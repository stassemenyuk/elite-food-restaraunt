import request from '../../request';

const getProductInfo = (id) => {
  return function getProductInfoAsync(dispatch) {
    request(`/products/${id}`).then((res) => {
      dispatch({ type: 'product/getProductInfo', payload: res });
    });
  };
};

const getSimilarProduct = (id) => {
  return async function getSimilarProductAsync(dispatch) {
    const product = await request(`/products/${id}`);
    request(`/products?category=${product.category}`).then((res) => {
      const elementIndex = res.findIndex((e) => e.id === id);
      res.splice(elementIndex, 1);
      dispatch({ type: 'product/getSimilarProduct', payload: res });
    });
  };
};

export { getProductInfo, getSimilarProduct };
