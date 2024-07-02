import { useState,useRef } from "react";
import Header from "./Header";
import{checkValidData} from "../utils/Validate";
import {createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_PIC, USER_AVATAR } from "../utils/constant";


const Login=()=>{

    // Creating a useState hook for state updation.
    const [isSignInForm,setIsSignInForm]=useState(true);

    //error messgae for form validation
    const [errorMessage,setErrorMessage]=useState(null);

  
    const dispatch=useDispatch();

    //creating useRef hook for form validation.
    const name=useRef(null);
    const email=useRef(null);
    const password=useRef(null);

    //For switching between sign in/sign up
    const toggleSignInForm=()=>{
      setIsSignInForm(!isSignInForm);
    };

   //Validate the form data using useRef
    const handleButtonClick=()=>{
      // console.log(name);
      // console.log(email.current.value);
      // console.log(password.current.value); 
     const message= checkValidData(email.current.value, password.current.value);
     setErrorMessage(message);
     if(message) return;

        //sign in/sign up logic
        if(!isSignInForm){
         //sign up logic
         createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR
          }).then(() => {
            // Profile updated!
            const {uid,email,displayName,photoURL} = auth.currentUser;
            dispatch(
              addUser({
              uid:uid,
              email:email,
              displayName:displayName,
              photoURL:photoURL
            })
          );
            

          }).catch((error) => {
            // An error occurred
           setErrorMessage(error.message);
          });
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+"-"+errorMessage);
          
        });
        }

        else{
        //sign in logic
        signInWithEmailAndPassword(auth,email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+"-"+errorMessage);
        });
        }

   }

    return (
        <div>
        <Header/>
        <div className="absolute bg-gradient-to-b from-black to-[#000000]">
            <img className=" h-full w-screen object-cover opacity-40" 
            src={BG_PIC} alt="bg-img"/>
        </div>

          <form onSubmit={(e)=>e.preventDefault()} className=" w-[435px] absolute p-12 my-[77px] mx-auto right-0 left-0 bg-black  bg-opacity-65 text-white rounded-sm">
             <h1 className="font-bold text-3xl py-4  mx-[16px]">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
             { !isSignInForm &&
             (<input
              ref={name}
               type="text" 
             placeholder="Full Name" 
             className="p-[14px] mt-[18px] mx-[16px] w-[300px] bg-slate-700 bg-opacity-50 border-[1px] border-solid border-gray-300 rounded-md"
             />)
            }
             <input 
             ref={email}
             type="text" 
             placeholder="Email or mobile number" 
             className="p-[14px] mt-[18px] mx-[16px] mb-4 w-[300px] bg-slate-700 bg-opacity-50 border-[1px] border-solid border-gray-300 rounded-md"
             />

             <input
             ref={password} 
             type="password" 
             placeholder="Password" 
             className="p-[14px] mb-4 mx-[16px] w-[300px] bg-slate-700 bg-opacity-50 border-[1px] border-solid border-gray-300 rounded-md"
             />
              <p 
               className="text-red-600 ml-[18px] mb-[16px] text-xs font-bold">{errorMessage}
            </p>

             <button 
                 className="p-2 mb-6 mx-[16px] bg-[#E50914]  w-[300px] rounded-md cursor-pointer"
                 onClick={handleButtonClick}>
                 {isSignInForm ? "Sign In" : "Sign Up"}
            </button>

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
             
            <h3 className="text-[#b0b0b0] mx-[16px] p-2 mt-4 mb-2"> 
               {isSignInForm ? "New to Netflix? " : "Already a user?"}
               <span className="text-white font-bold cursor-pointer" onClick={toggleSignInForm}>
                 {isSignInForm ? "Sign Up." : "Sign In."}
            </span></h3>
            <p className="p-2 mx-[16px] text-[#b0b0b0] font-extralight text-xs text-start">
              This page is protected by Google reCAPTCHA to<br/>ensure you're not a bot.
              <span className="text-[#0044CC] cursor-pointer">Learn more.
            </span></p>
          </form>
        </div>
    )
}

export default Login;