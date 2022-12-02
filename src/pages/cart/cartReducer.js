export default function cartReducer(state = [], action) {
  switch (action.type) {
    case 'cart/deleteFromCart':
      const cart = state;
      const index = cart.findIndex((i) => i.id === action.payload);
      return [...cart.slice(0, index), ...cart.slice(index + 1)];
    case 'cart/addToCart':
      return [...state, action.payload];
    default:
      return state;
  }
}
