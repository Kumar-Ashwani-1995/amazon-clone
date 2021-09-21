import React, { useEffect, useState } from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import cartEmpty from './asset/cartEmpty.png';

const Checkout = () => {
    const [uniq,setUniq] = useState({});
    const [{ basket }, dispatch] = useStateValue();






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
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=""></img>
                <div>
                    <h2 className="checkout__title"> Your Shopping Basket</h2>
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
            <div className="checkout__right">
                {/* Subtotal component */}
                <Subtotal></Subtotal>
            </div>
        </div>
    )
}

export default Checkout
