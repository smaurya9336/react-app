import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Adlogin(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const adlogcode = async (e)=>{
        e.preventDefault();
        const admin= {email,password};
        const response = await fetch('http://localhost:8000/adlogin',{
            method: 'POST',
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(admin)
        })
      const data = await response.json();
      if(data.msg="Login Success"){
        alert("Login Success");
        setEmail("");
        setPassword("");
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
        <form onSubmit={adlogcode} className="my-5 p-5 shadow-lg rounded-5">
        <h2 className="pb-3"><u className="text-danger">Admin</u> Login Form</h2>
                    
                     Enter Your Email:
                     <input className="form-control" type="email" name="email" value={email} onChange={ (e)=> setEmail(e.target.value)}/>
                     
                     <br />
                     Enter Your Password:
                     <input className="form-control" type="password" name="password" value={password} onChange={ (e)=> setPassword(e.target.value) } />
                     
                     <br />
                     <button className="mb-3 form-control btn btn-primary" type="submit">Submit</button>
                    
        </form>
        </div>
         </div>
         <Footer />
        </>
    )
}