import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import "./ViewProduct.css"
import base_url from './asset/bootapi'
import axios from 'axios'
import { useStateValue } from './StateProvider';

const ViewProduct = () => {
        const [product,SetProduct] = useState({});
        const { id } = useParams();
        useEffect(() => {
                getProductDetails();
            }, [])

    const getProductDetails = () =>{
        axios.get(`${base_url}/getOrder/${id}`).then(
            (response)=>{
                console.log(response.data);
                SetProduct(response.data);
            },
            (error)=>{
                console.log(error);
                SetProduct({});
                
            }
        )
    }
 const [{ basket }, dispatch] = useStateValue();

    console.log(basket);
    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: product.id, title: product.title, image: product.image, price: product.price, rating: product.rating

            }
        })

    };


    const removeFromBasket = (id) => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })
    }

    return (

        <div className="viewproduct__head">
            <div className="viewProduct__image">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/Nirali/GTM/09-2021/new_offer/CBCC_1_ILM_640x45._CB640872361_.jpg" alt="ad amazon"></img>
            </div>
        
        <div className="viewProduct">
            <div>
                <img src={product.image} alt=""></img>
            </div>
            <div className="viewProduct__title">
                <h2>{product.title}</h2>
                <div className="viewProduct__rating">
                    {Array(product.rating)
                        .fill()
                        .map((_, i) => (
                            <p key={i}>⭐</p>
                        ))}
                </div>
                <p className="viewProduct__price">
                    <strong className="viewProduct__mrp"> MRP </strong>
                    <strong ><h2> ₹ </h2></strong>
                    <strong  className="viewProduct__amount"   ><h2> {product.price}</h2></strong>
                </p>
                <p className="viewProduct__instock"> In Stock </p>
                <img className="viewProduct__sday" src={process.env.PUBLIC_URL+"/img/7day.jpg"} alt="7day return"></img>
                
            <button className="viewProduct__subbutton" onClick={addToBasket} >Add to Basket</button>
            <button className="viewProduct__subbutton" onClick={() => removeFromBasket(product.id)}> Remove from Basket</button>
        
            </div>
            
        </div>
        </div>
        

    )
}

export default ViewProduct
