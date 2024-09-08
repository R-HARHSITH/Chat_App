import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/authcontext';

const useSignup = () => {
    const[loading,setloading]=useState(false);
    const {authUser,setAuthUser}=useAuthContext(); 
    const signup=async({fullName,userName,password,confirmPassword,gender})=>{
        const success=handleInputErrors({fullName,userName,password,confirmPassword,gender});
        if(!success)return ;
        setloading(true);
        try {
          const res=await fetch('/api/auth/signup',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({fullName,userName,password,confirmPassword,gender}),
          });
          if(res){
            toast.success("Successfully sign up completed");
          }
          else{
            toast.error("Sign up failed");
          }
          const data=await res.json();
          if(data.error){
            throw new Error(data.error);
          }
          // saving in local storage
          localStorage.setItem("user-log",JSON.stringify(data));
          // console.log(data); 
          setAuthUser(data); 
        } catch (error) {
          toast.error(error.message);
        }finally{
          setloading(false);
        }
        
    };
    
    return {loading,signup};
 
};

export default useSignup;

function handleInputErrors({fullName,userName,password,confirmPassword,gender}){
  if(!fullName || !userName || !password || !confirmPassword || !gender){
     toast.error('Please fill all fields');
     return false;
  }
  if(password!=confirmPassword){
    toast.error('Passwords donot match');
    return false;
  }
  if(password.length<8){
    toast.error('Paasword should contain atleast 8 characters');
    return false;
  }
  return true;
}