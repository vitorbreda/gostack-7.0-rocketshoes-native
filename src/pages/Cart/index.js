import React from 'react';

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

export default function Cart() {
    return (
        <Container>
            <CartBox>
                <Product>
                    <ProductInfo>
                        <ProductImage
                            source={{
                                uri:
                                    'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
                            }}
                        />
                        <ProductDetails>
                            <ProductTitle>
                                Tênis VR Caminhada Confortável
                            </ProductTitle>
                            <ProductPrice>R$ 179,90</ProductPrice>
                        </ProductDetails>
                        <ProductDelete>
                            <Icon
                                name="delete-forever"
                                size={24}
                                color={colors.primary}
                            />
                        </ProductDelete>
                    </ProductInfo>
                    <ProductControls>
                        <ProductControlButton>
                            <Icon
                                name="remove-circle-outline"
                                size={20}
                                color={colors.primary}
                            />
                        </ProductControlButton>
                        <ProductAmount value="2" />
                        <ProductControlButton>
                            <Icon
                                name="add-circle-outline"
                                size={20}
                                color={colors.primary}
                            />
                        </ProductControlButton>
                        <ProductSubtotal>R$ 1000,50</ProductSubtotal>
                    </ProductControls>
                </Product>
                <TotalContainer>
                    <TotalText>TOTAL</TotalText>
                    <TotalAmount>R$ 2000.00</TotalAmount>
                    <OrderButton>
                        <OrderButtonText>FINALIZAR PEDIDO</OrderButtonText>
                    </OrderButton>
                </TotalContainer>
            </CartBox>
        </Container>

        // <EmptyContainer>
        //     <Icon name="remove-shopping-cart" size={64} color="#fff" />
        //     <EmptyText>Seu carrinho está vazio.</EmptyText>
        // </EmptyContainer>
    );
}
