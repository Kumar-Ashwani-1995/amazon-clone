import { Link ,useHistory} from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css"
import { useStateValue } from './StateProvider'
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from "./reducer"
import cartEmpty from './asset/cartEmpty.png';

const Payment = () => {
    const [{ basket,user }, dispatch] = useStateValue();
    const [uniq,setUniq] = useState({});
    const history = useHistory();
    const payment = ()=>{
        dispatch({
            type: "DELETE_BASKET",
            
        })
        history.push("/placedOrderPage");
        
    }
     const findUnique = ()=>{
        var tempResult = {}

        for(let { id, image,price,rating,title } of basket)
        tempResult[id] = { 
            id, image,price,rating,title,
            count: tempResult[id] ? tempResult[id].count + 1 : 1
        }      

        setUniq(Object.values(tempResult))
        console.log(uniq)
    }
    useEffect(() => {
       findUnique();
    }, [basket])
    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout(<Link to="/checkout">{basket?.length} items</Link>)
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3> Deliver To</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?user.email:"Guest"}</p>
                        {/* <p>jamshedpur</p> */}

                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3> Review item and delivery</h3>
                    </div>
                    <div className="payment__items">
                       <>{uniq.length ? uniq.map((product, index) =>
                        <div key={index}>
                            <CheckoutProduct
                                id={product.id}
                                title={product.title}
                                price={product.price}
                                rating={product.rating}
                                image={product.image}
                                variable= {product.count}
                            ></CheckoutProduct>
                        </div>
                    ) :
                        <div className="checkout__empty">

                            <img src={cartEmpty} alt="Empty cart"></img>
                            <h2 className="checkout__emptyText"> Your Amazon Basket is empty</h2>
                        </div>
                    }</>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3> Payment Details</h3>
                    </div>
                    <div className="payment__details">
                        <CurrencyFormat renderText={(value) => (
                    <>
                        <p>

                            Subtotal ({basket?.length} items): <strong>{value}</strong>
                        </p>
                                </>
                            )}
                            decimalScale={2}
                            value={getBasketTotal(basket)}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"INR "}/>
                        <button disabled={!basket?.length} className="payment__buttonPay" onClick={()=>payment()}>Pay now</button>
                        <button  className="payment__buttonDecline" onClick={()=>history.push("/checkout")}>Decline</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payment
