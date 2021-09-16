import { Link ,useHistory} from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css"
import { useStateValue } from './StateProvider'
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from "./reducer"

const Payment = () => {
    const [{ basket,user }, dispatch] = useStateValue();
    const history = useHistory();
    const payment = ()=>{
        dispatch({
            type: "DELETE_BASKET",
            
        })
        history.push("/placedOrderPage");
        
    }
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
                       { basket.map((product, index) =>
                        <div key={index}>
                            <CheckoutProduct
                                id={product.id}
                                title={product.title}
                                price={product.price}
                                rating={product.rating}
                                image={product.image}
                            ></CheckoutProduct>
                        </div>
                    ) }
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
