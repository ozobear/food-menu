import React from "react";

const ShoppingCart = (props) => (
    <div>
        <h2>Carrito de compras</h2>
        <p>Total de productos: {props.info.items}</p>
    </div> 
);

export default ShoppingCart;