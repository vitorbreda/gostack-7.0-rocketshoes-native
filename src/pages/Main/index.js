import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {FlatList} from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {formatPrice} from '../../util/format';

import api from '../../services/api';

import * as cartActions from '../../store/modules/cart/actions';

import {
    Container,
    Product,
    ProductImage,
    ProductTitle,
    ProductPrice,
    AddButton,
    ProductAmount,
    ProductAmountText,
    AddButtonText,
} from './styles';

class Main extends Component {
    state = {
        products: [],
    };

    async componentDidMount() {
        const response = await api.get('/products');

        const data = response.data.map(product => ({
            ...product,
            priceFormatted: formatPrice(product.price),
        }));

        this.setState({products: data});
    }

    handleAddProduct = id => {
        const {addToCartRequest} = this.props;

        addToCartRequest(id);
    };

    renderProduct = ({item}) => {
        const {amount} = this.props;

        return (
            <Product>
                <ProductImage source={{uri: item.image}} />
                <ProductTitle>{item.title}</ProductTitle>
                <ProductPrice>{item.priceFormatted}</ProductPrice>
                <AddButton onPress={() => this.handleAddProduct(item.id)}>
                    <ProductAmount>
                        <Icon name="add-shopping-cart" color="#fff" size={20} />
                        <ProductAmountText>
                            {amount[item.id] || 0}
                        </ProductAmountText>
                    </ProductAmount>
                    <AddButtonText>ADICIONAR</AddButtonText>
                </AddButton>
            </Product>
        );
    };

    render() {
        const {products} = this.state;

        return (
            <Container>
                <FlatList
                    horizontal
                    data={products}
                    keyExtractor={item => String(item.id)}
                    renderItem={this.renderProduct}
                />
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    amount: state.cart.reduce((amount, product) => {
        amount[product.id] = product.amount;

        return amount;
    }, {}),
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(cartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
