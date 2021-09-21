import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider';
import { MdRemoveCircleOutline,MdControlPoint } from "react-icons/md";


const CheckoutProduct = ({ id, image, title, price, rating ,variable}) => {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = (id) => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })
    }
    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id, title: title, image: image, price: price, rating: rating

            }
        })

    };
    
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt=""></img>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>INR</small>
                    <strong>{price}</strong>
                </p>
                
                <span className="checkoutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p key={i}>⭐</p>
                        ))}
                </span>
                <span className="checkoutProduct__addSub">
                    {variable=="payment"?<></>:
                    <>
                    <MdRemoveCircleOutline onClick={() => removeFromBasket(id) } className="checkoutProduct__add"/>
                    <h2 className="checkoutProduct__count">{variable}</h2>
                    <MdControlPoint onClick={addToBasket} className="checkoutProduct__add"/>
                    </>
                
                    }
                
                </span>
            </div>
        </div>
    )
}

export default CheckoutProduct
