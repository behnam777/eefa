"use client"
import { useEffect, useState , useRef} from 'react';
import Link from 'next/link';


const Gallery = () => { 
    const [mounted, setMounted] = useState(false) 
    const counter = useRef(1)
    useEffect(() => {
        setMounted(true)

    //---------------------------------Gallery Controler---------------------------------
        let ImagesNumber = (document.getElementsByClassName('main-gaallery-img').length);
        displayBG(counter.current);
        setInterval(async () => {
            counter.current = counter.current +1
            if(counter.current > ImagesNumber){counter.current = 1}
            if(counter.current < 0 ){counter.current = ImagesNumber}
            displayBG(counter.current);
            if(counter.current == ImagesNumber){counter.current = 0}
        }, 8000); 
    }, [])
    //------------------------------------------------------------------------------------
    let forwardGallery = ()=>{
        let ImagesNumber = (document.getElementsByClassName('main-gaallery-img').length);
        counter.current = counter.current + 1 
        if(counter.current > ImagesNumber){counter.current = 1} 
        displayBG(counter.current);
    }
    let backwardGallery = ()=>{ 
        let ImagesNumber = (document.getElementsByClassName('main-gaallery-img').length);
        counter.current = counter.current -1
        if(counter.current <= 0 ){counter.current = ImagesNumber} 
        displayBG(counter.current);
    }
    
    let displayBG = (i)=>{
        let AllImages = document.getElementsByClassName('main-gaallery-img');
        let AllAnimationButtons = document.getElementsByClassName('circle-animation');
        let AllBasicButtons = document.getElementsByClassName('mainGaalleryButtonBasic');
        for (let index = 0; index < AllImages.length; index++) {
            const element = AllImages[index];
            element.style.display = 'none'
        }
        for (let index = 0; index < AllAnimationButtons.length; index++) {
            const element = AllAnimationButtons[index];
            element.style.display = 'none'
        }
        for (let index = 0; index < AllBasicButtons.length; index++) {
            const element = AllBasicButtons[index];
            element.style.display = 'block'
        }
        document.getElementById('mainGaalleryImg' + i).style.display = 'block';
        document.getElementById('mainGaalleryButtonLoad' + i).style.display = 'block';
        document.getElementById('mainGaalleryButtonBasic' + i).style.display = 'none';
    }
    //------------------------------------------------------------------------------------
    let closeMainMenu = () => {
        if (mounted) {
            document.getElementById('mainPageHeaderMenuPhoneContainer').style.display = "none";
            document.getElementById("mainPageHeaderPhone").classList.remove('phone-menu-open');
        }
    }
    let openMainMenu = () => {
        if (mounted) {
            document.getElementById('mainPageHeaderMenuPhoneContainer').style.display = "block";
            document.getElementById("mainPageHeaderPhone").classList.add('phone-menu-open');
        }
    }

 



    return (
        <div className='main-page-gallery'>
            <div className="main-page-header">
                <img className="main-page-header-logo" src="/icons/mainPageLogo.svg" />
                <div className="main-page-header-menu">
                    <a className="main-page-header-menu-item" href='/'>Home</a>
                    <a className="main-page-header-menu-item" href='./pages/projects'>Projects</a>
                    <a className="main-page-header-menu-item" href='./pages/about'>About</a>
                    <a className="main-page-header-menu-item" href='./pages/blog'>Blogs</a>
                    <a className="main-page-header-menu-item" href='./pages/contact'>Contact</a>
                </div>
            </div>

            <div className="main-page-header-phone">
                <img className="main-page-header-logo-phone" src="/icons/gallry-menu-logo-w-phone.svg" />
                <img className="main-page-header-icon-phone" src="/icons/gallery-menu-phone.svg" onClick={openMainMenu} />
                <div className="main-page-header-menu-phone" id="mainPageHeaderPhone">
                    <div className="main-page-header-menu-phone-container" id="mainPageHeaderMenuPhoneContainer">
                        <img className="main-page-header-menu-logo-phone" src="/icons/gallry-menu-logo-b-phone.svg" />
                        <img className="main-page-header-menu-icon-phone" src="/icons/gallery-close-con.svg" onClick={closeMainMenu} />
                    </div>
                    <div className="main-page-header-menu-item-phone-container" >
                        <div className="main-page-header-menu-item-phone" onClick={closeMainMenu}  ><Link href="/">Home</Link></div>
                        <div className="main-page-header-menu-item-phone" onClick={closeMainMenu}  ><Link href="./pages/projects">Projects</Link></div>
                        <div className="main-page-header-menu-item-phone" onClick={closeMainMenu}  ><Link href="./pages/about">About</Link></div>
                        <div className="main-page-header-menu-item-phone" onClick={closeMainMenu}  ><Link href="./pages/blog">Blog</Link></div>
                        <div className="main-page-header-menu-item-phone" onClick={closeMainMenu}  ><Link href="./pages/Contact">Contact</Link></div>
                    </div>
                    <div className="header-social-phone">
                        <img className="header-social-linkedin-phone" src="//icons/footer-linkedin.svg" />
                        <img className="header-social-instagram-phone" src="//icons/footer-instagram.svg" />
                    </div>
                </div>
            </div>

            <div className="main-gaallery">
                <img src="/images/gallery/G1.jpg" className="main-gaallery-img" id="mainGaalleryImg1" />
                <img src="/images/gallery/G2.jpg" className="main-gaallery-img" id="mainGaalleryImg2" />
                <img src="/images/gallery/G3.jpg" className="main-gaallery-img" id="mainGaalleryImg3" />

                <div className="main-gaallery-gradiant-top"> </div>
                <div className="main-gaallery-gradiant-bottom"> </div>

                <div className="main-gaallery-arrow-left">
                    <div className="arrow-container">
                        <img className="main-gaallery-arrow main-gaallery-arrow-left-img" src="/icons/gallery-arrow.svg" width="40px"
                            height="40px" onClick={backwardGallery} />
                    </div>
                </div>
                <div className="main-gaallery-arrow-right">
                    <div className="arrow-container">
                        <img className="main-gaallery-arrow main-gaallery-arrow-right-img" src="/icons/gallery-arrow.svg" width="40px"
                            height="40px" onClick={forwardGallery} />
                    </div>
                </div>

                <div className="main-gaallery-note">
                    <div className="main-gaallery-note-title">Slow</div>
                    <div className="main-gaallery-note-status">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi.
                    </div>
                </div>

                <div className='main-gaallery-buttons-container'>


                    {
                        Array(3).fill().map((_, i) => { 
                            return (

                                <div key={i} >
                                    <svg width="30" height="30"  className='mainGaalleryButton'>
                                        <circle cx="15" cy="15" r="7" fill="none" stroke="white" strokeWidth="2" className="circle-animation" id={"mainGaalleryButtonLoad"+(i+1)}/>
                                        <circle cx="15" cy="15" r="3" fill="white" />
                                        <circle cx="15" cy="15" r="5" fill="white" id={"mainGaalleryButtonBasic"+(i+1)} className='mainGaalleryButtonBasic'/>
                                    </svg> 
                                </div>
                            )
                        })
                    }





                </div>
            </div>

        </div>
    )
}
export default Gallery;


