import { useState } from "react";
import Header from "./Header";
const Login=()=>{
    // Creating a hook-useState for state updation
    const [isSignInForm,setIsSignInForm]=useState(true);
    const toggleSignInForm=()=>{
      setIsSignInForm(!isSignInForm);
    };
    return (
        <div>
        <Header/>
        <div className="absolute bg-gradient-to-b from-black to-[#000000]">
            <img className=" h-full w-full object-cover opacity-40"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_large.jpg"
             alt="bg-img"/>
        </div>
          <form className=" w-[435px] absolute p-12 my-[77px] mx-auto right-0 left-0 bg-black  bg-opacity-65 text-white rounded-sm">
             <h1 className="font-bold text-3xl py-4  mx-[16px]">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
             { !isSignInForm &&
             (<input type="text" 
             placeholder="Full Name" 
             className="p-[14px] mt-[18px] mx-[16px] mb-4 w-[300px] bg-slate-700 bg-opacity-50 border-[1px] border-solid border-gray-300 rounded-md"
             />)
            }
             <input type="text" 
             placeholder="Email or mobile number" 
             className="p-[14px] mt-[18px] mx-[16px] mb-4 w-[300px] bg-slate-700 bg-opacity-50 border-[1px] border-solid border-gray-300 rounded-md"
             />
             <input type="password" 
             placeholder="Password" 
             className="p-[14px] mb-4 mx-[16px] w-[300px] bg-slate-700 bg-opacity-50 border-[1px] border-solid border-gray-300 rounded-md"
             />
             <button className="p-2 mb-6 mx-[16px] bg-[#E50914]  w-[300px] rounded-md cursor-pointer">{isSignInForm ? "Sign In" : "Sign Up"}</button>

             {/* <h3 className="text-center text-[#b0b0b0]">{isSignInForm ? "OR" : ""}</h3>
             <button className="p-2 mt-4  mx-[16px] mb-6 bg-[#808080] bg-opacity-45  w-[300px] rounded-md cursor-pointer {isSignInForm ? 'display:' : 'display:none'}">{isSignInForm ? "Use a sign in code" : ""}</button> */}

             <h3 className="text-center cursor-pointer">{isSignInForm ? "Forgot password?" : ""}</h3>
    
             {/*<input  class="p-2 mt-4 mx-[16px] mb-6 invert checked:invert-0 accent-white" type="checkbox" 
                id="check1"
                name="option1" 
                value="something" 
                checked 
            />
            <label class="p-2 mt-4 mb-6 ">Remember me</label>*/}
             
            <h3 className="text-[#b0b0b0] mx-[16px] p-2 mt-4 mb-2">  {isSignInForm ? "New to Netflix? " : "Already a user?"}<span className="text-white font-bold cursor-pointer" onClick={toggleSignInForm}> {isSignInForm ? "Sign Up." : "Sign In."}</span></h3>
            <p className="p-2 mx-[16px] text-[#b0b0b0] font-extralight text-xs text-start">This page is protected by Google reCAPTCHA to<br/>ensure you're not a bot.<span className="text-[#0044CC] cursor-pointer">Learn more.</span></p>
          </form>
        </div>
    )
}

export default Login;