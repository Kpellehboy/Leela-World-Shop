import React from "react";


export const CartItem =(props)=>{
    const {productName, price, productImage } = props.data;


    return <div className="CartItem">
        <img src={productImage} alt="cart-image"/>
        <div className="Description">
         <p>
           <b>{productName}</b> 
         </p>
        <p>${price}</p>
        </div>
        
    </div>
};