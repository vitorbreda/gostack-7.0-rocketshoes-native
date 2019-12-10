import React from 'react';
import {connect} from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Wrapper, Container, Logo, ItemCount, BasketContainer} from './styles';

function Header({navigation, cartSize}) {
    return (
        <Wrapper>
            <Container>
                <Logo />
                <BasketContainer onPress={() => navigation.navigate('Cart')}>
                    <Icon name="shopping-basket" color="#FFF" size={24} />
                    <ItemCount>{cartSize}</ItemCount>
                </BasketContainer>
            </Container>
        </Wrapper>
    );
}

const mapStateToProps = state => ({
    cartSize: state.cart.length,
});
export default connect(mapStateToProps)(Header);
