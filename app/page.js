"use client"
import Gallery from "./components/gallery";

export default function Home() {
  let accept = ()=>{
    document.getElementById('cookiesContainer').style.display = 'none';
  }
  return (
    <div>
      <Gallery />
      <div className="cookiesContainer" id="cookiesContainer">
        We use cookies to enhance site navigation, analyse site usage and assist in our marketing efforts. Please let us know if you agree to all of these cookies.  Click here to find out more.
      
        <div className="cookiesButtonsContainer">
          <div className="cookiesContainerbutton1" onClick={()=>accept}>No. take me to settings</div>
          <div className="cookiesContainerbutton2" onClick={()=>accept}>Yes, I agree</div>
        </div>

      </div>
    </div>
  );
}
