import React from "react";
import styles from './Footer.css';
import Modal from "./Modal/Modal"

function getTotal(products) {
    let sumQuantity = 0;
    let sumPrice = 0;
    for (let i = 0; i < products.length; i++) {
        sumQuantity += products[i].Quantity;
        sumPrice += (products[i].Quantity * products[i].Product_price);
    }
    return {
        totalQuantity: sumQuantity,
        totalPrice: sumPrice
    }
}

function Footer(props) {
    let total = {
        totalQuantity: 0,
        totalPrice: 0
    }
    if (props.products.length !== 0) {
        console.log(props.products.length)
        total = getTotal(props.products)
    }

    return (
        <>
            <div className={"footer-container"}>
                <div className={"footer-left"}>
                    <div className={"footer-quantity"}>Qty : {total.totalQuantity}</div>
                    <div className={"footer-total"}>Total : {total.totalPrice}</div>
                </div>
                <div className={"footer-right"}>
                    <button className={"checkOutButton"} onClick={()=>props.modalHandler()}>CHECKOUT</button>
                    <Modal modalStatus={props.modalStatus} modalHandler={props.modalHandler} totalPrice={total.totalPrice}/>
                </div>
            </div>
        </>
    )
}

export default Footer;
