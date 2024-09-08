import React, { useState } from 'react'
import {useAuthContext } from '../context/authcontext';
// import { set } from 'mongoose';
import toast from 'react-hot-toast';

const uselogout = () => {
  const [loading,setloading]=useState(false);
  const {authUser,setAuthUser}=useAuthContext();
  const logout=async()=>{
    setloading(true);
    try {
        const res=await fetch("/api/auth/logout",{
            method:"POST",
            headers:{"Content-Type":"application/json"}
        });
        if(res.ok){
            toast.success("Logged out successfully");
        }
        const data=await res.json();
        if(data.error){
            throw new Error(data.error);
        }
        localStorage.removeItem("user-log");
        setAuthUser(null); 
    } catch (error) {
        console.log(error.message);
        toast.error(error.message);
    }finally{
        setloading(false);
    }
  }
  return {loading,logout};
}

export default uselogout
