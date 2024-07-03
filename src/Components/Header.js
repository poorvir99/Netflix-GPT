import {onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constant";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header=()=>{
    const user=useSelector((store)=>store.user)
    const navigate=useNavigate();
    const dispatch=useDispatch();
    // const [isSignInForm,setIsSignInForm]=useState(true);

    const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)
   
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


       const handleGptSearchClick=()=>{
        //toggle GPT search button
        dispatch(toggleGptSearchView());

       }

       const handleLanguageChange=(e)=>{
        dispatch(changeLanguage(e.target.value));
  

       }
    
    return(

        <div className="absolute w-screen px-9 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
               <img className="w-[135px] mx-auto -ml-3"  src={LOGO} alt="logo"/>

        {user &&(<div className="flex p-2 ">

          { showGptSearch && <select 
            className="bg-black mr-[10px] px-[5px] text-white border-[1px] border-gray-500 rounded-sm  bg-opacity-90" 
            onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang)=>(
              <option key= {lang.indentifier}value={lang.indentifier}>{lang.name}</option>
            ))}

        </select>}
              <button 
                   className="bg-black mr-[10px] text-white hover:text-black px-[10px] border-[1px] border-gray-500 rounded-sm hover:bg-[rgba(253,249,249,0.63)] text-lg bg-opacity-20"
                   onClick={handleGptSearchClick}>
                 {showGptSearch? "Home" : 
                  <>
                 <FontAwesomeIcon icon={faSearch} className="mr-[6px] text-lg text-white hover:text-black "/>
                 GPT search
                 </>
                 }
                
              </button>
                <img className="rounded-md mr-[5px]" 
                src={user?.photoURL} 
                alt="user-icon"/>
                <button className="bg-black mr-[10px] text-white hover:text-black px-[10px] border-[1px] border-gray-500 rounded-sm hover:bg-[rgba(253,249,249,0.63)] text-lg bg-opacity-20  ml-[5px] " onClick={handleSignOut}>Sign out</button>
            </div>
           )}
        </div>

    )
}

export default Header;
