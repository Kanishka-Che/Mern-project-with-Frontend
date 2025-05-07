import { useState } from "react"

export default function TestPage(){

        const[count,setCount]=useState(0)
        const[status,setStatus]=useState("Pass")

   
    return(

        <div className="w-full h-screen flex flex-col justify-center items-center">
            <div className="w-[450px] h-[250px] shadow flex justify-center items-center ">
                <button onClick={()=>{
                        setCount(count-1)}}
                        className="bg-blue-600 text-white font-bold text-center w-[100px] h-[40px] text-[20px] cursor-pointer justify-center items-center">
                    -
                </button>
    <span className="text-[30px] font-bold text-center w-[100px] h-[40px] mx-[10px] flex justify-center items-center">
        {count}
    </span>

                <button onClick={()=>{
                setCount(count+1)
                }}className="bg-blue-600 text-white font-bold text-center w-[100px] h-[40px] text-[20px] cursor-pointer justify-center items-center">
                + 
                </button>

        
        </div>

         <div className="w-full h-screen flex justify-center items-center">
         <div className="w-[450px] h-[250px] shadow flex justify-center items-center ">
             <button onClick={()=>{
                     setStatus("Fail")}}
                     className="bg-blue-600 text-white font-bold text-center w-[100px] h-[40px] text-[20px] cursor-pointer ">
                 Fail
             </button>
 <span className="text-[30px] font-bold text-center w-[100px] h-[40px] mx-[10px] flex justify-center items-center">
     {status}
 </span>

             <button onClick={()=>{
             setStatus("pass")
             }}className="bg-blue-600 text-white font-bold text-center w-[100px] h-[40px] text-[20px] cursor-pointer justify-center items-center">
             Pass
             </button>

     </div>
     </div>
     </div>
    )
}