import React from "react";
import styles from './ImgContainer.css';
function ImgContainer(props) {
    return (
        <div className="product-image-container">
            <img className="product-img " src={props.productImage} alt={props.productName}/>
        </div>
    )
}

export default ImgContainer;