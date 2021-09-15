import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider';
const CheckoutProduct = ({ id, image, title, price, rating }) => {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = (id) => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt=""></img>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <span className="checkoutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p key={i}>🌟</p>
                        ))}
                </span>
                <button onClick={() => removeFromBasket(id)}> Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
