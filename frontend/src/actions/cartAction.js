export const addToCart = (nft, quantity, varient) => (dispatch, getState) => {
  var cartItem = {
    name: nft.name,
    _id: nft._id,
    image: nft.image,
    varient: varient,
    quantity: Number(quantity),
    prices: nft.prices,
    price: nft.prices[0][varient] * quantity,
  };
  if (cartItem.quantity > 10) {
    alert("you Can only add 10 nfts");
  } else {
    if (cartItem.quantity < 1) {
      dispatch({ type: "DELETE_FROM_CART", payload: nft });
    } else {
      dispatch({ type: "ADD_TO_CART", payload: cartItem });
      localStorage.setItem(
        "cartItems",
        JSON.stringify(getState().cartReducer.cartItems)
      );
    }
  }
};

export const deleteFromCart = (nft) => (dispatch, getState) => {
  dispatch({ type: "DELETE_FROM_CART", payload: nft });
  const cartItems = getState().cartReducer.cartitems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
