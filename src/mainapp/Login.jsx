import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link, useNavigate} from "react-router-dom";

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate= useNavigate()
    const logcode = async (e)=>{
        e.preventDefault();
        const user= {email,password};
        const response = await fetch('http://localhost:8000/login',{
            method: 'POST',
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(user)
        })
      const data = await response.json();
      if(data.msg="Login Success"){
        alert("Login Success");
        console.log(data.id);
        setEmail("");
        setPassword("");
        navigate(`/userDash/${data.id}`);
      }
      else{
        alert(data.msg);
      }
    }
    return(
        <>
        <Navbar />
         <div className="row">
        <div className="col-md-6 mx-auto">
        <form onSubmit={logcode} className="my-5 p-5 shadow-lg rounded-5">
        <h2 className="pb-3"><u className="text-danger">Login </u> Form</h2>
                    
                     Enter Your Email:
                     <input className="form-control" type="email" name="email" value={email} onChange={ (e)=> setEmail(e.target.value)}/>
                     
                     <br />
                     Enter Your Password:
                     <input className="form-control" type="password" name="password" value={password} onChange={ (e)=> setPassword(e.target.value) } />
                     
                     <br />
                     <button className="mb-3 form-control btn btn-primary" type="submit">Submit</button>
                    <Link to={'/registration'}>Create New Account ?</Link>
        </form>
        </div>
         </div>
        <Footer />
        </>
    )
}