import React from "react";
import ImgContainer from "./ImgContainer/ImgContainer"
import AddToCart from "./AddToCart/AddToCart"
import styles from './ProductContainer.css';
function ProductContainer(props) {
        return (
            <>
            <div className={"product-item-container"}>
                <div className={"product-item"}>
                    <div className={"product-left-section"}>
                    <ImgContainer productImage={props.product.Product_img} productName={props.product.Product_name}/>
                    <div className={"discount"}>{props.product.Product_discount}% OFF</div>
                    </div>
                    <div className={"product-right-section"}>
                        <div className={"brand-name"}>{props.product.Brand_name}</div>
                        <div className={"product-name"}>{props.product.Product_name}</div>
                        <div className={"weight"}>{props.product.Weight}</div>
                        <div className={"product_MRP"}>MRP {props.product.Product_MRP}</div>
                        <div className={"product_price"}>Rs {props.product.Product_price}</div>
                        <AddToCart product={props.product} incDecHandler={props.incDecHandler}/>
                    </div>
                </div>
            </div>
            </>
        )
}
export default ProductContainer;