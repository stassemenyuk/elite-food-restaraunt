export default function productsReducer(state = [], action) {
  switch (action.type) {
    case 'products/getAll':
      return action.payload;
    case 'products/getByCategory':
      return action.payload;

    default:
      return state;
  }
}
