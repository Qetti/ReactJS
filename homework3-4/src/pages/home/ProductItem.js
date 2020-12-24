import React from "react";
import Fade from "react-reveal/Fade";


const ProductItem = props => {
  const { product } = props;
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
            <b >
              {product.name}
              <span className="tag is-primary" style={{ marginLeft: "10px"}}>{product.price}   €</span>
            </b>
            <div>{product.shortDesc}</div>

            {product.stock > 0 ? (
              <small>{product.stock + " Left In Stock"}</small>
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
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Fade>
  );
};

export default ProductItem;
