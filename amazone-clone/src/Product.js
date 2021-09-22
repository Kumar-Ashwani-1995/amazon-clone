import React from 'react'
import { Link } from 'react-router-dom';
import "./Product.css";
import { useStateValue } from './StateProvider';
import { AiFillFire } from "react-icons/ai";

const Product = ({ id, title, image, price, rating , hotProd}) => {

    const [{ basket }, dispatch] = useStateValue();

    console.log(basket);
    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id, title: title, image: image, price: price, rating: rating

            }
        })

    };

    return (
        <div className="product">
            <div className="product__info">
                {hotProd?<span ><AiFillFire className="product__hot"/> </span>:<></>}
                <Link className="link" to={`/product/${id}`}>
                <p> {title}</p></Link>
                
                <p className="product__price">
                    <small>INR</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p key={i}>⭐</p>
                        ))}
                </div>
            </div>
            <Link className="link" to={`/product/${id}`}>
            <img className="product__image" src={image} alt=""></img>
            </Link>
            
            <button className="product__button" onClick={addToBasket} >Add to Basket</button>

        </div >
    )
}

export default Product
