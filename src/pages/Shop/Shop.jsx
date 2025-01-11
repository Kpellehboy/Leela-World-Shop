import React from "react";
import {PRODUCTS} from "../../Products";
import {Product} from "./product";
import "./shop.css";



export const Shop =() =>{
    return (
    <div>
      <div className="shopTitle">
      <h1><i>Leela World</i></h1>
      </div>
      <div className="products"> {PRODUCTS.map((product) =>(
        <Product data={product}/>
        
        ))}
        </div>
        
    </div>);
};