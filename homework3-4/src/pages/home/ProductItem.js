import React from "react";

const ProductItem = props => {
  const { product } = props;
  return (
    <div className=" column is-half">
      <div className="box">
        <div className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img
                src="https://bulma.io/images/placeholders/128x128.png"
                alt="product"
              />
            </figure>
          </div>
          <div className="media-content">
            <b >
              {product.name}
              <span className="tag is-primary" style={{ marginLeft: "10px"}}>{product.price}₾</span>
            </b>
            <div>{product.shortDesc}</div>

            {product.stock > 0 ? (
              <small>{product.stock + " ცალი მარაგში"}</small>
            ) : (
              <small className="has-text-danger">აღარ არის მარაგშიიი</small>
            )}
            <div className="is-clearfix">
              <button
                className="button is-small is-outlined is-primary   is-pulled-right"
                onClick={() =>
                  props.addToCart({
                    id: product.name,
                    product,
                    amount: 1
                  })
                }
              >
                კალათაში დამატება
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
