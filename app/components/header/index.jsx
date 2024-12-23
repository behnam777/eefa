"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
const Header = () => {

    const [menuItemSelected, setMenuItemSelected] = useState(1);
    let closeMainMenu = () => {
        document.getElementById('mainPageHeaderMenuPhoneContainer').style.display = "none";
        document.getElementById("mainPageHeaderPhone").classList.remove('phone-menu-open');
    }
    let openMainMenu = () => {
        document.getElementById('mainPageHeaderMenuPhoneContainer').style.display = "block";
        document.getElementById("mainPageHeaderPhone").classList.add('phone-menu-open');
    }
    let selectItem = (number) => {

        let getItems = document.getElementsByClassName('header-menu-item')
        for (let index = 0; index < getItems.length; index++) {
            const element = getItems[index];
            element.classList.remove('header-menu-item-selected');
        }
        window.localStorage.setItem("menuItemSelected",number); 
        console.log('menuItemSelected',number);
    }
    useEffect(() => {
        let menuItemSelected = window.localStorage.getItem("menuItemSelected");
        if(menuItemSelected){
            document.getElementById('headerMenuItem'+menuItemSelected).classList.add('header-menu-item-selected');
        }
    }, [])
    return (
        <div className="header">
            <img className="header-logo" src="/icons/logo.svg" alt="eefa arch" />
            <div className="header-menu">
                <a className="header-menu-item " id="headerMenuItem1" onClick={() => selectItem(1)} href='/'>Home</a>
                <a className="header-menu-item " id="headerMenuItem2" onClick={() => selectItem(2)} href='./projects'>Projects</a>
                <a className="header-menu-item " id="headerMenuItem3" onClick={() => selectItem(3)} href='./about'>About</a >
                <a className="header-menu-item " id="headerMenuItem4" onClick={() => selectItem(4)} href='./blog'>Blogs</a >
                <a className="header-menu-item " id="headerMenuItem5" onClick={() => selectItem(5)} href='./contact'>Contact</a >
            </div>

            <div className="main-page-header-phone">
                <img className="main-page-header-logo-phone" src="/icons/gallry-menu-logo-b-phone.svg" />
                <img className="main-page-header-icon-phone" src="/icons/gallery-close-b-con.svg" onClick={openMainMenu} />
                <div className="main-page-header-menu-phone" id="mainPageHeaderPhone">
                    <div className="main-page-header-menu-phone-container" id="mainPageHeaderMenuPhoneContainer">
                        <img className="main-page-header-menu-logo-phone" src="/icons/gallry-menu-logo-b-phone.svg" />
                        <img className="main-page-header-menu-icon-phone" src="/icons/gallery-close-con.svg" onClick={closeMainMenu} />
                    </div>
                    <div className="main-page-header-menu-item-phone-container" >
                        <div className="main-page-header-menu-item-phone" onClick={closeMainMenu}  ><Link href="/">Home</Link></div>
                        <div className="main-page-header-menu-item-phone" onClick={closeMainMenu}  ><Link href="./projects">Projects</Link></div>
                        <div className="main-page-header-menu-item-phone" onClick={closeMainMenu}  ><Link href="./about">About</Link></div>
                        <div className="main-page-header-menu-item-phone" onClick={closeMainMenu}  ><Link href="./blog">Blog</Link></div>
                        <div className="main-page-header-menu-item-phone" onClick={closeMainMenu}  ><Link href="./contact">Contact</Link></div>
                    </div>
                    <div className="header-social-phone">
                        <img className="header-social-linkedin-phone" src="/icons/footer-linkedin.svg" />
                        <img className="header-social-instagram-phone" src="/icons/footer-instagram.svg" />
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Header;

