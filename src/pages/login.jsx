import { use, useState } from "react";

function login(){

    const [formData,setFormData]=useState({
        email: "",
        password: ""
    });



    const handleChange=(e)=>{
        setFormData=({...formData,[e.target.email]:e.target.value})
    }


    const handleSubmit=async (e) =>{
        e.preventDefault();


        try{

            const res=await fetch("http://localhost:8081/api/auth/login", {

                method: "POST",
                headers:{
                    "content-Type": "application/json"
                },

                body: JSON.stringify({
                    useremail: formData.email,
                    password: formData.password
                    
                })

            });

        
            const data = await res.json();

            if(res.ok && data.token){

            localStorage.setItem("token",data.token);
            localStorage.setItem("email", formData.email);

            alert("Login Successful!");


           if(data.role === "ADMIN"){

           }
           else{

           }


            }

            else{
                alert("Login Failed: "+(data.messege || "Invalid credentials"));
            }


        }

        catch(err){

            console.log("Login Error:", err);
            alert("Server error. Please try again later");
        }

    };


    return(


    <form onSubmit={(handleSubmit)} className="login-form">

      <input type="text" name="email"  value={formData.email} required className="input"  onChange={handleChange} />
    
      <input type="password" name="password"   value={formData.password}   required className="input" onChange={handleChange} />

      <button>Submit</button>

    </form>

)


    

}





export default login