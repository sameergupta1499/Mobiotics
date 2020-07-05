import React from "react";

import styles from './AddToCart.css';

function AddToCart(props) {
    return (
        <>
            <div className={"addToCartContainer"}>
       <button className={"addToCartButton"} onClick={()=>props.incDecHandler(props.product._id,1)}>Add To Cart</button>
       <button className={"incDecButton"} onClick={()=>props.incDecHandler(props.product._id,-1)}>-</button>
            <div className={"productQuantity"}>{props.product.Quantity}</div>
       <button className={"incDecButton"} onClick={()=>props.incDecHandler(props.product._id,1)}>+</button>
            </div>
        </>
    )
}

export default AddToCart;