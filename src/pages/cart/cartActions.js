const deleteFromCart = (id) => ({ type: 'cart/deleteFromCart', payload: id });

const addToCart = (elem) => ({ type: 'cart/addToCart', payload: elem });

export { deleteFromCart, addToCart };
