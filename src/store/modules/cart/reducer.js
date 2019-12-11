import produce from 'immer';

export default function cart(state = [], action) {
    switch (action.type) {
        case '@cart/add_success':
            return produce(state, draft => {
                const {product} = action;

                draft.push(product);
            });
        case '@cart/remove':
            return produce(state, draft => {
                const productIndex = draft.findIndex(p => p.id === action.id);

                if (productIndex >= 0) {
                    draft.splice(productIndex, 1);
                }
            });
        case '@cart/update_amount_success': {
            return produce(state, draft => {
                const productIndex = draft.findIndex(p => p.id === action.id);

                if (productIndex >= 0) {
                    draft[productIndex].amount = Number(action.amount);
                }
            });
        }
        default:
            return state;
    }
}
