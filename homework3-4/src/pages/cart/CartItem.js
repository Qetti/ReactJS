import React from "react";
import Fade from "react-reveal/Fade";

const CartItem = props => {
  const { cartItem, cartKey } = props;
  const { product, amount } = cartItem;
  return (
    <Fade bottom cascade>
    <div className=" column is-half">
      <div className="box">
        <div className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img
                src={product.imgUrl}
                alt="product"
              />
            </figure>
          </div>
          <div className="media-content">
            <b>
              {product.name}
              <span className="tag is-primary" style={{ marginLeft: "10px"}}>{product.price}₾</span>
            </b>
            <div>{product.shortDesc}</div>
            <small>{`${amount} items in cart`}</small>
          </div>
          <div
            className="media-right"
            onClick={() => props.removeFromCart(cartKey)}
          >
            <span className="delete is-large"></span>
          </div>
        </div>
      </div>
    </div>
    </Fade>
  );
};

export default CartItem;
