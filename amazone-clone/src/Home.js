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
                                hotProd={true}
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
                                hotProd={false}
                            ></Product>
                        </div>
                    ) }
                    </div>
                
                

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
