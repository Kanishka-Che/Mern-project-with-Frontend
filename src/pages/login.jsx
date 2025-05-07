import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"

export default function LoginPage(){

    const[email,seteEmail]=useState("")
    const[password,setPassword]=useState("")


   async function handlelogin(){
    

        try{
            const response= await axios.post("http://localhost:5000/users/login" ,{
            email:email,
            password:password
        })
        //alert("Login Successful")
        toast.success("Login Successful")
        console.log(response.data)

        }catch(e){
           // alert(e.response.data.message) error code not a 200(error)
           toast.error(e.response.data.message)
        }

       
    }


    return(
        <div className="w-full h-screen bg-[url('/login.jpg')] bg-center bg-cover flex justify-evenly items-center">

            <div className="w-[50%] h-full ">
            </div>
            <div className="w-[50%] h-full flex justify-center items-center">
                <div className="w-[450px] h-[600px] backdrop-blur-md rounded-[20px] shadow-xl flex flex-col items-center justify-center">
                    <input onChange={(e)=>{
                        seteEmail(e.target.value)
                    }} 
                    value={email}
                    className="w-[300px] h-[50px] border border-[#c34f29] rounded-[20px] my-[20px]"/>
                    <input onChange={(e)=>{
                        setPassword(e.target.value)
                    }}
                    value={password}
                    type="password" className="w-[300px] h-[50px] border border-[#c34f29] rounded-[20px] mb-[20px]"/>
                    <button onClick={handlelogin} className="cursor-pointer w-[300px] h-[50px] bg-[#c34f29] rounded-[20px] text-[20px] font-bold text-white my-[20px]">Login</button>

                </div>
            </div>

        </div>
    )
}