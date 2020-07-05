import React from "react";

import styles from './Modal.css';
function getModalClass(modalStatus){
    if(modalStatus==true){
        return "showModal";
    }
    else{
        return "hideModal";
    }
}

function Modal(props) {
    return (
        <div className={getModalClass(props.modalStatus)}>
            <button className={"closeModalButton"} onClick={()=>props.modalHandler()}>✕</button>
            <h1 className={"tSMessage"}>Transaction Successful ! </h1><img className={"modalCheckImage"} src={require('./greenTick.gif')} alt=""/>
            <h2>₹ {props.totalPrice}</h2>

        </div>

    )
}

export default Modal;