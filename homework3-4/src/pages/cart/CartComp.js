import React, { Fragment } from "react";
import withContext from "../../withContext";
import Fade from "react-reveal/Fade";

import CartItem from "./CartItem";

const Cart = props => {
  const { cart } = props.context;
  const cartKeys = Object.keys(cart || {});
  return (
    <Fragment>
      <Fade top cascade>
      <div className="hero is-primary">
        <div className="hero-body container">
          <h4 className="title">List of choosen products</h4>
        </div>
      </div>
      </Fade>
      <br />
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
              <Fade right cascade>
              <div className="is-pulled-right">
                <button
                  onClick={props.context.clearCart}
                  className="button is-warning "
                >
                  Delete all products
                </button>{" "}
                
                <button
                  className="button is-success"
                  onClick={props.context.checkout}
                >
                  Proceed
                </button> 
                
              </div></Fade>
            </div>
          </div>
        ) : (
          <div className="column">
            <div className="title has-text-grey-light">Please choose products before proceeding</div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default withContext(Cart);
