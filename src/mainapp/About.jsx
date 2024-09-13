import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import aboutOverview from "../components/images/about-overview-08.jpg";

export default function About(){
    return(
        <>
        <Navbar />
        <Slider />

    <div className="row my-5">
        <div className="col-md-5 my-auto mx-auto">
            <h1>About Us</h1>
           <p className="text-justify">KARAM is a leading global occupational safety brand with a vast portfolio of over 3500 certified products conforming to multiple national and international standards and export our safety solutions to over 100 nations.</p>
        </div>
        <div className="col-md-5 mx-auto">
            <img src={aboutOverview} className="w-100" />
        </div>

    </div>
        <Footer />
        </>
    )
}