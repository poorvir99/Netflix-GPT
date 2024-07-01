import {signOut } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header=()=>{
    const user=useSelector((store)=>store.user)
    const navigate=useNavigate();
    // const [isSignInForm,setIsSignInForm]=useState(true);
   
    const handleSignOut=()=>{
    
        signOut(auth).then(() => {
            navigate("/")
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
          navigate("/error")
        });
    }
    
    return(

        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
               <img className="w-[176px] " 
                src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                alt="logo"/>

        {user &&(<div className="flex ">
                <img className=" " 
                src={user?.photoURL} 
                alt="user-icon"/>
                <button className="text-white font-bold" onClick={handleSignOut}>(Sign out)</button>
            </div>
           )}
        </div>

    )
}

export default Header;
