import { Link } from "react-router-dom";
import logo from "../components/images/logo1.png";

export default function Navbar(){
    return(
        <>
        <div className="row bg-dark">
            <div className="col-md-12">
            <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src={logo}  />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav  ms-auto w-75">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={"/"}>Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={"/about"}>About</Link>
        </li>
        
        <li class="nav-item">
          <Link class="nav-link" to={'/products'}>Products</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={'/services'}>Services</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={'/contact'}>Contact Us</Link>
        </li>
      </ul>
      <Link className="btn btn-outline-danger" to={'/login'}>Query ?</Link>
    </div>
  </div>
</nav>
            </div>
        </div>
      
        </>
    )
}