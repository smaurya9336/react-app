
import image1 from "../components/images/s1.jpg";
import image2 from "../components/images/image2.jpg";
import image3 from "../components/images/image3.jpg";

export default function Slider(){
    return(
        <>
        <div className="row bg-dark p-2 text-light">
            <div className="col-sm-5"></div>
            <div className="col-sm-6">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={image1} className="d-block w-100" />
      <div className="s bg-danger w-50 position-absolute">More details on News & Events</div>
    </div>
    <div className="carousel-item">
      <img src={image2} className="d-block w-100" />
      <div className="s bg-danger w-50 position-absolute">More details on News & Events</div>
    </div>
    <div className="carousel-item">
      <img src={image3} className="d-block w-100" />
      <div className="s bg-danger w-50 position-absolute">More details on News & Events</div>
    </div>
  </div>
  
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
            </div>
            <div className="col-sm-1 my-auto">
            <p className="fa-brands fs-4 fa-facebook border p-3 rounded-circle"></p>
            <br/>
            <p className="fa-brands fs-4 fa-linkedin border p-3 rounded-circle"></p>
            <br/>
            <p className="fa-brands fs-4 fa-twitter border p-3 rounded-circle"></p><br/>
            <p className="fa-brands fs-4 fa-instagram border p-3 rounded-circle"></p><br/>
            <p className="fa-brands fs-4 fa-youtube border p-3 rounded-circle"></p>
            </div>
        </div>
        </>
    )
}