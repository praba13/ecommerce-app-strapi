import React from 'react';
import './Footer.css';
import payment from '../../assets/payment.png';
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footerTop">
                <div className="footerItem">
                    <h1 className='footerh1'>Categories</h1>
                    <span>Women</span>
                    <span>Men</span>
                    <span>Shoes</span>
                    <span>Accessories</span>
                    <span>New Arrivals</span>
                </div>{/*item1*/}
                <div className="footerItem">
                    <h1 className='footerh1'>Links</h1>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Compare</span>
                    <span>Cookies</span>
                </div>{/*item2*/}
                <div className="footerItem">
                    <h1 className='footerh1'>About</h1>
                    <span>
                        Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
                        amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
                        ut labore etdolore.
                    </span>
                </div>{/*item3*/}
                <div className="footerItem">
                    <h1 className='footerh1'>Contact</h1>
                    <span>
                        Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
                        amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
                        ut labore etdolore.
                    </span>
                </div>{/*item4*/}
            </div>{/*top*/}
            <div className="bottom">
                <div className="left">
                    <span className="logo">PR-STORE</span>
                    <span className="copyright">
                        &copy; 2023. All Rights Reserved
                    </span>
                </div>{/*left*/}
                <div className="right">
                    <img src={payment} alt="Payment" />
                </div>{/*right*/}
            </div>{/*bottom*/}
        </div>
    );
};

export default Footer;