
export const checkValidData=(email,password)=>{
     // const isFirstNameValid=/b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
     const isEmailValid=/^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
     const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    
//     if(!isFirstNameValid) return "Please enter a valid name."
     if(!isEmailValid) return "Please enter a valid email address or phone number."
     if(!isPasswordValid) return "Please enter a valid password."
    
     return null;
    }
    
    
    