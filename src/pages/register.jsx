import { use, useState } from "react";
import "../css/register.css"



function Register(){


   const [formData,setFormData]=useState({
    email: "",
    password: ""
   });



   const handleChange= (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
   }


  



   const handleSubmit=async (e)=>{
    e.preventDefault();

    try{

        const res = await fetch ("http://localhost:8081/api/auth/register",{

            method : "POST",
            headers: {
                "Content-Type":"application/json"
            },

            body: JSON.stringify(formData)

        });

      if(res.ok){
        alert("User Registered Successfully");
     
      }
      else{
        alert("Registration Failed");
      }
    }

    catch(err){
        console.log("Error",err);
        alert("Server Error ")
    }

   };




    return(
        
        <form onSubmit={(handleSubmit)}  className="register-form">

        <input type="text" name="email" value={formData.email} className="input"  required onChange={handleChange} placeholder="Enter your email"/>
        <input type="password" name="password" value={formData.password}  required className="input" onChange={handleChange} placeholder="Enter your password" />

        <button className="btn">Submit</button>

        </form>
    )
}

export default Register;