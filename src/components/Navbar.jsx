import { Link } from "react-router-dom";
import logo from "../components/images/logo1.png";

export default function Navbar(){
    return(
        <>
        <div className="row bg-dark">
            <div className="col-md-12">
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src={logo}  />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav  ms-auto w-75">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/about"}>About</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to={'/products'}>Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/services'}>Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/contact'}>Contact Us</Link>
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