import React, { Fragment } from "react";
import withContext from "../../withContext";
import CartItem from "./CartItem";
import Fade from "react-reveal/Fade";
import PropTypes from 'prop-types';


const Cart = props => {
  const { cart } = props.context;
  const cartKeys = Object.keys(cart || {});
  return (
	<Fade bottom cascade>
      <div className="container">
        {cartKeys.length ? (
          <div className="column columns is-multiline">
            {cartKeys.map(key => (
              <CartItem
                cartKey={key}
                key={key}
                cartItem={cart[key]}
                removeFromCart={props.context.removeFromCart}
              />
            ))}
            <div className="column is-12 is-clearfix">
              <br />
              <div className="is-pulled-right">
                <button
                  onClick={props.context.clearCart}
                  className="button is-warning "
                >
                  კალათის გასუფთავება
                </button>{" "}
                <button
                  className="button is-success"
                  onClick={props.context.checkout}
                >
                  ყიდვა
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="column">
            <div className="title has-text-grey-light">ჯერ დაამატე პროდუქტები კალათაშიიი</div>
          </div>
        )}
      </div>
    </Fade>
  );
};

Cart.propTypes = {
  context: PropTypes.func
}


export default withContext(Cart);
