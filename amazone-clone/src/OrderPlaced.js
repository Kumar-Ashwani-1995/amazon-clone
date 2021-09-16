import React from 'react'
import "./OrderPlaced.css"
import { useHistory} from 'react-router-dom';

const OrderPlaced = () => {
    const history = useHistory();
    return (
        <div className="orderPlaced">
            <div className="orderPlaced__container">
            <img className="orderPlaced__image" src="https://cdn.pixabay.com/photo/2014/04/02/10/40/check-304167_960_720.png" alt="Success"></img>
            <h1 >Order Placed</h1> 
            <button className="orderPlaced__button" onClick={()=>history.push("/")} >Home</button>
            </div>
        </div>
    )
}

export default OrderPlaced
