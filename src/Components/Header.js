import {onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constant";

const Header=()=>{
    const user=useSelector((store)=>store.user)
    const navigate=useNavigate();
    const dispatch=useDispatch();
    // const [isSignInForm,setIsSignInForm]=useState(true);
   
    const handleSignOut=()=>{
    
        signOut(auth).then(() => {
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
          navigate("/error")
        });
    }

    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth, (user) => {
          if (user) {
            const {uid,email,displayName,photoURL} = user;
            dispatch(addUser({
              uid:uid,
              email:email,
              displayName:displayName,
              photoURL:photoURL
            })
        );
            navigate("/browse")
          } else {
            // User is signed out
            dispatch(removeUser());
            navigate("/")
          }
        });
        //unsubscribe will be called when component unmount/removed
        return ()=> unsubscribe();
        
       },[])
    
    return(

        <div className="absolute w-screen px-9 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
               <img className="w-[135px] mx-auto -ml-3"  src={LOGO} alt="logo"/>

        {user &&(<div className="flex ">
                <img className="" 
                src={user?.photoURL} 
                alt="user-icon"/>
                <button className="text-white font-bold ml-[5px] " onClick={handleSignOut}>(Sign out)</button>
            </div>
           )}
        </div>

    )
}

export default Header;
