"use client"
import { useEffect, useState } from 'react';

const Footer = () => {
    let topFunction = ()=>{
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    return (
        <footer>
            <div className='footer-up-side'></div>
            <div className="left-side">
                <div className="footer-logo">
                    <img src="/icons/fotter-logo.svg" className="" />
                </div>
                <div className="footer-toup-phone" onClick={topFunction}>
                    <div className="footer-toup-title-phone">Bck to Top</div>
                    <img className="footer-toup-icon-phone" src="/icons/footer-up.svg" />
                </div>
                <div className="footer-menu">
                    <a className="footer-menu-item" href='/'>Home</a>
                    <a className="footer-menu-item" href='./projects'>Product</a>
                    <a className="footer-menu-item" href='./about'>About</a>
                    <a className="footer-menu-item" href='./blog'>Blogs</a>
                    <a className="footer-menu-item" href='./contact'>Contact</a>
                </div>
            </div>


            <div className="right-side">
                <div className="right-side-level-1">
                    <div className="footer-social">
                        <img className="footer-social-linkedin" src="/icons/footer-linkedin.svg" />
                        <img className="footer-social-instagram" src="/icons/footer-instagram.svg" />
                    </div>
                    <div className="footer-toup" onClick={topFunction}>
                        <div className="footer-toup-title">Back to Top</div>
                        <img className="footer-toup-icon" src="/icons/footer-up.svg" />
                    </div>
                </div>
                <div className="right-side-level-2">
                    <div className="footer-copyright">Legal and policies 2024 EEFA. All Right Reserved.</div>
                </div>
            </div>

            <div className="right-side-phone">
                <div className="right-side-level-1-phone">
                    <div className="footer-social-phone">
                        <img className="footer-social-linkedin-phone" src="/icons/footer-linkedin.svg" />
                        <img className="footer-social-instagram-phone" src="/icons/footer-instagram.svg" />
                    </div>
                </div>
                <div className="right-side-level-2-phone">
                    <div className="footer-copyright-phone">
                        <div style={{ width: '100%' }}>Legal and policies</div>
                        <div>2024 EEFA. All Right Reserved.</div>
                    </div>
                </div>
            </div>

        </footer>
    )
}


export default Footer;