import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import aboutBanner from "../components/images/about-banner.jpg";
export default function Home(){
    return(
        <>
 <Navbar />
 <Slider />
<div className="row my-5">
<div className="col-md-6 ms-auto">
<h4>About Us</h4>
<p>KARAM is a leading global occupational safety brand with a vast portfolio of over 3500 certified products conforming to multiple national and international standards and exporting our safety solutions to over 100 nations.</p>
</div>

    <div className="col-sm-4 me-auto my-auto">
     <img src={aboutBanner} className='w-100 shadow-lg' />   
      
    </div>
   
</div>

<Footer />
        </>
    )
}