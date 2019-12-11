import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import colors from '../../styles/colors';

import {
    Container,
    CartBox,
    Product,
    ProductInfo,
    ProductImage,
    ProductDetails,
    ProductTitle,
    ProductPrice,
    ProductDelete,
    ProductControls,
    ProductControlButton,
    ProductAmount,
    ProductSubtotal,
    TotalContainer,
    TotalText,
    TotalAmount,
    OrderButton,
    OrderButtonText,
    EmptyContainer,
    EmptyText,
} from './styles';

import {formatPrice} from '../../util/format';

import * as cartActions from '../../store/modules/cart/actions';

function Cart({cart, total, removeFromCart, updateAmountRequest}) {
    function increment(product) {
        updateAmountRequest(product.id, product.amount + 1);
    }

    function decrement(product) {
        updateAmountRequest(product.id, product.amount - 1);
    }

    return (
        <>
            {cart.length ? (
                <Container>
                    <CartBox>
                        {cart.map(product => (
                            <Product key={product.id}>
                                <ProductInfo>
                                    <ProductImage
                                        source={{
                                            uri: product.image,
                                        }}
                                    />
                                    <ProductDetails>
                                        <ProductTitle>
                                            {product.title}
                                        </ProductTitle>
                                        <ProductPrice>
                                            {product.priceFormatted}
                                        </ProductPrice>
                                    </ProductDetails>
                                    <ProductDelete
                                        onPress={() =>
                                            removeFromCart(product.id)
                                        }>
                                        <Icon
                                            name="delete-forever"
                                            size={24}
                                            color={colors.primary}
                                        />
                                    </ProductDelete>
                                </ProductInfo>
                                <ProductControls>
                                    <ProductControlButton
                                        onPress={() => decrement(product)}>
                                        <Icon
                                            name="remove-circle-outline"
                                            size={20}
                                            color={colors.primary}
                                        />
                                    </ProductControlButton>
                                    <ProductAmount
                                        value={String(product.amount)}
                                    />
                                    <ProductControlButton
                                        onPress={() => increment(product)}>
                                        <Icon
                                            name="add-circle-outline"
                                            size={20}
                                            color={colors.primary}
                                        />
                                    </ProductControlButton>
                                    <ProductSubtotal>
                                        {product.subtotal}
                                    </ProductSubtotal>
                                </ProductControls>
                            </Product>
                        ))}
                        <TotalContainer>
                            <TotalText>TOTAL</TotalText>
                            <TotalAmount>{total}</TotalAmount>
                            <OrderButton>
                                <OrderButtonText>
                                    FINALIZAR PEDIDO
                                </OrderButtonText>
                            </OrderButton>
                        </TotalContainer>
                    </CartBox>
                </Container>
            ) : (
                <EmptyContainer>
                    <Icon name="remove-shopping-cart" size={64} color="#fff" />
                    <EmptyText>Seu carrinho está vazio.</EmptyText>
                </EmptyContainer>
            )}
        </>
    );
}

const mapStateToProps = state => ({
    cart: state.cart.map(product => ({
        ...product,
        subtotal: formatPrice(product.price * product.amount),
    })),
    total: formatPrice(
        state.cart.reduce((total, product) => {
            return total + product.price * product.amount;
        }, 0),
    ),
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(cartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
