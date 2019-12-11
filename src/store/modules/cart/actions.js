export function addToCartRequest(id) {
    return {
        type: '@cart/add_request',
        id,
    };
}

export function addToCartSuccess(product) {
    return {
        type: '@cart/add_success',
        product,
    };
}

export function removeFromCart(id) {
    return {
        type: '@cart/remove',
        id,
    };
}

export function updateAmountRequest(id, amount) {
    return {
        type: '@cart/update_amount_request',
        id,
        amount,
    };
}

export function updateAmountSuccess(id, amount) {
    return {
        type: '@cart/update_amount_success',
        id,
        amount,
    };
}
