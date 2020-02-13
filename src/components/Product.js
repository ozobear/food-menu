import React from "react";

const Product = (props) => (
    <div className="product-card">
      <div className="product-detail">
        <h2>{props.info.name}</h2>
        <img src={props.info.imgUrl} alt="" />
        <p><b>Precio:</b> {props.info.price}</p>
        <p><b>Descripción:</b> {props.info.description}</p>
      </div>
    </div>
);

export default Product;