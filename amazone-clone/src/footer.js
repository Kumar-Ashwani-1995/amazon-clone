import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom';


export function FooterContainer() {
    return (<section className="footer">
        <a className="buttonStyle" href="#">
            <button className="buttonStyle">Back to top</button>
            </a>
            <span className="footer__inner">
                <a className="footer__innerContent" href="#">About us</a>
                <a className="footer__innerContent" href="#">Contact us</a>
                <a className="footer__innerContent" href="#">Social</a>
                <Link to="/">
                
                <img className="header__logo"  src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="AmaZon.com"></img>
                </Link>
            </span>
            
            
        </section>
    )
}