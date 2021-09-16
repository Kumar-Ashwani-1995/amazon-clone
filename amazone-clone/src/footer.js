import React from 'react'
import Footer from './footer/index'

const linkStyle = {
  position: "relative",
  marginBottom:"20px",

 }

export function FooterContainer() {
    return (
        <Footer style= { {} }>
            <img className="header__logo" style= { linkStyle } src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="AmaZon.com"></img>
            <Footer.Wrapper>
                
                
           
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href="#">Story</Footer.Link>
                    <Footer.Link href="#">Clients</Footer.Link>
                    <Footer.Link href="#">Testimonials</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Services</Footer.Title>
                    <Footer.Link href="#">Marketing</Footer.Link>
                    <Footer.Link href="#">Consulting</Footer.Link>
                    <Footer.Link href="#">Development</Footer.Link>
                    <Footer.Link href="#">Design</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Contact Us</Footer.Title>
                    <Footer.Link href="#">United States</Footer.Link>
                    <Footer.Link href="#">United Kingdom</Footer.Link>
                    <Footer.Link href="#">Australia</Footer.Link>
                    <Footer.Link href="#">Support</Footer.Link>
                </Footer.Column>
                
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}