import React from 'react'
import "./OrderPlaced.css"
import { useHistory} from 'react-router-dom';
import { useStateValue } from './StateProvider';

const OrderPlaced = () => {
    const history = useHistory();
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className="orderPlaced">
            <div className="orderPlaced__container">
            <img className="orderPlaced__image" src="https://cdn.pixabay.com/photo/2014/04/02/10/40/check-304167_960_720.png" alt="Success"></img>
            {user?<>{user.multiFactor.user.email.split("@")[0]} your order is been placed</>:"Guest your order is been placed"}
            
            <button className="orderPlaced__button" onClick={()=>history.push("/")} >Home</button>
            </div>
        </div>
    )
}

export default OrderPlaced
