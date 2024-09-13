import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Registration(){
    const navigate = useNavigate();
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const regcode = async (e) =>{
        e.preventDefault();
        const user = {firstname,lastname,email,password};
        const response= await fetch('http://localhost:8000/',{
            method : "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body:JSON.stringify(user)

        });
        const result = await response.json();
        if(result.msg === "Success"){
            alert("Registration Success");
            setFirstname("");
            setLastname("");
            setEmail("");
            setPassword("");
            navigate('/login');
        }
        else{
            alert("Registration Failed");
        }
        
    }

    return(
        <>
   <Navbar />

<div className="row">
    <div className="col-md-6 mx-auto">
    <form onSubmit={regcode} className="my-5 p-5 shadow-lg rounded-5">
        <h2 className="pb-3"><u className="text-danger">Rgistatin </u> Form</h2>
                    Enter Your First Name:
                     <input className="form-control" type="text" name="firstname" value={firstname} onChange={ (e)=> setFirstname(e.target.value) }/>
                     <br /> 
                     Enter Your Last Name:
                     <input className="form-control" type="text" name="lastname" value={lastname} onChange={ (e)=> setLastname(e.target.value) } />
                     <br />
                    
                     Enter Your Email:
                     <input className="form-control" type="email" name="email" value={email} onChange={ (e)=> setEmail(e.target.value)}/>
                     
                     <br />
                     Enter Your Password:
                     <input className="form-control" type="password" name="password" value={password} onChange={ (e)=> setPassword(e.target.value) } />
                     
                     <br />
                     <button className="mb-3 form-control btn btn-primary" type="submit">Submit</button>
                    <Link to={'/login'}>Already Have an Account ?</Link>
                </form>
    </div>
</div>

   <Footer />
        </>
    )
}