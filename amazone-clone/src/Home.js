import React, { useEffect, useState } from 'react'
import "./Home.css"
import Product from './Product'
import { useStateValue } from './StateProvider'
import ImageSlider from './sliderForImage/ImageSlider'
import SliderData from './sliderForImage/SliderData'
import base_url from './asset/bootapi'
import axios from 'axios'
import { BackupProduct ,HotProducts} from './BackupProduct'

const Home = () => {
    const [{ basket,user }, dispatch] = useStateValue();
    const [productCart,SetProductCart] = useState([]);
    const [hotProducts,SetHotProducts] = useState([]);

    useEffect(() => {
        getHotProducts();
        getAllOrder();
        
        
    }, [])

    const getHotProducts = () =>{
        axios.get(`${base_url}/hotOrders`).then(
            (response)=>{
                console.log(response.data);
                SetHotProducts(response.data);
                if(response.data === null || response.data ===""){
                    SetHotProducts(HotProducts);
                }
            },
            (error)=>{
                console.log(error);
                SetHotProducts(HotProducts);
                
            }
        )
    }

    const getAllOrder = () =>{
        axios.get(`${base_url}/getOrder`).then(
            (response)=>{
                console.log(response.data);
                SetProductCart(response.data);
                if(response.data === null || response.data ===""){
                    SetProductCart(HotProducts);
                }
            },
            (error)=>{
                console.log(error);
                SetProductCart(BackupProduct);
                
            }
        )
    }

    return (
        <div className="home">
            <div >

                <ImageSlider  slides={SliderData}></ImageSlider>
                <div className="home__hot">
                       { hotProducts.map((product, index) =>
                        <div className="home__row" key={index}>
                            
                            <Product 
                                id={product.id}
                                title={product.title}
                                price={product.price}
                                rating={product.rating}
                                image={product.image}
                            ></Product>
                        </div>
                    ) }
                    </div>
                
                    <div className="home__srow">
                       { productCart.map((product, index) =>
                        <div className="home__product" key={index}>
                            
                            <Product 
                                id={product.id}
                                title={product.title}
                                price={product.price}
                                rating={product.rating}
                                image={product.image}
                            ></Product>
                        </div>
                    ) }
                    </div>
                
                {/* <div className="home__row">
                    <Product
                        id="4903850"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                        price={199.99}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                    <Product
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                    <Product
                        id="12321341"
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                        price={11.96}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                    />
                    <Product
                        id="49538094"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={239.0}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                    />
                    
                </div> */}

                <div className="home__row">
                    <Product
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />
                </div>
            </div>

        </div>
    )
}

export default Home
