export function addToCart(product) {
    return {
        type: '@cart/add',
        product,
    };
}

export function removeFromCart(id) {
    return {
        type: '@cart/remove',
        id,
    };
}

export function updateAmount(id, amount) {
    return {
        type: '@cart/update_amount',
        id,
        amount,
    };
}
