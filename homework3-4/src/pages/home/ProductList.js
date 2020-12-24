import React, { Fragment } from "react";
import ProductItem from "./ProductItem";
import withContext from "../../withContext";
import Fade from "react-reveal/Fade";


const ProductList = props => {
  const { products } = props.context;
  return (

    <Fade bottom cascade>
    <Fragment>
      <div className="hero is-primary">
        <div className="hero-body container">
          <Fade top cascade>
          <h4 className="title">Shop Unique Plants Online</h4>
          </Fade>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="column columns is-multiline">
          {products && products.length ? (
            products.map((product, index) => (
              <ProductItem
                product={product}
                key={index}
                addToCart={props.context.addToCart}
              />
            ))
          ) : (
            <div className="column">
              <span className="title has-text-grey-light">
                ვერ მოიძებნა პროდუქტები!
              </span>
            </div>
          )}
        </div>
      </div>
    </Fragment>
    </Fade>
  );
};

export default withContext(ProductList);
