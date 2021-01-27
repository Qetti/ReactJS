import React, { Fragment } from "react";
import ProductItem from "./ProductItem";
import withContext from "../../withContext";
import PropTypes from 'prop-types';


const ProductList = props => {
  const { products } = props.context;
  return (
    <Fragment>
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
                უი, პროდუქტები აღარ გვაააქვს
              </span>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};


ProductList.propTypes = {
  context: PropTypes.func
}

export default withContext(ProductList);