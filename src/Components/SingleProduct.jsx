import React from "react";

const SingleProduct = ({ img, title, description, price }) => {
  return (
    <div className="sp">
      <img src={img} alt="" />
      <h2>{title}</h2>
      <p>{description.slice(0, 30)}</p>
      <div className="last">
        <h3>Rs. {price}</h3>
        <button>Buy Now</button>
      </div>
    </div>
  );
};

export default SingleProduct;
