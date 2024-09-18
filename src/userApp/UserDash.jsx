import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

export default function UserDash(){
const {id} = useParams()
// console.log(id);
const [firstname, setFirstname]=useState("");
const [lastname, setLastname]=useState("");
const [email, setEmail]=useState("");


const getUser = async () =>{
  const response = await fetch(`http://localhost:8000/${id}`)
 if(response.ok){
  const data= await response.json()
  // console.log(data);
  setFirstname(data.firstname);
  setLastname(data.lastname);
  setEmail(data.email);
  
 }
}

useEffect(()=>{
  getUser();
},[])

    return(
        <>
      <div className="row vh-7">
        <div className="col-sm-12 py-5 bg-dark"></div>
        </div>
      <div className="row vh-93">
        <div className="col-2 h-100 scroll bg-danger"></div>
        <div className="col-10 h-100 scroll bg-success">
        <div className="row h-100">
        <div className="col-md-6 mx-auto p-5 bg-light p-4 rounded-5 my-auto">
          <h5 className="text-center">User Details</h5>

        <div className="row my-3">
          <div className="col-md-6">FirstName : </div>
          <div className="col-md-6">{firstname}</div>
        </div>
        <div className="row my-3">
          <div className="col-md-6">LastName : </div>
          <div className="col-md-6">{lastname}</div>
        </div>
        <div className="row my-3">
          <div className="col-md-6">Email : </div>
          <div className="col-md-6">{email}</div>
        </div>

        <div className="row my-3">
          <div className="col-md-6 mx-auto text-center">
        <Link to={`/userDash/${id}`} className="btn btn-warning">Edit</Link>
       </div>
        </div>
        </div>
        </div>
     </div>
     </div>
        </>
    )
}