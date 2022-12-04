import request from '../../request.js';

const getByCategory = (category) => {
  return function getByCategoryAsync(dispatch) {
    request(`/products?category=${category}`).then((res) => {
      console.log(res);
      dispatch({ type: 'products/getByCategory', payload: res });
    });
  };
};

function getAllElements(dispatch) {
  request('/products').then((res) => {
    dispatch({ type: 'products/getAll', payload: res });
  });
}

export { getAllElements, getByCategory };
