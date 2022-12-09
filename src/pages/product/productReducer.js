const initialState = {
  data: {},
  similarProducts: [],
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case 'product/getProductInfo':
      return {
        ...state,
        data: {
          ...action.payload,
          picture: action.payload.pictures[0],
        },
      };
    case 'product/getSimilarProduct':
      return {
        ...state,
        similarProducts: action.payload,
      };
    default:
      return state;
  }
}
