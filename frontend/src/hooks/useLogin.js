import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/authcontext";
const useLogin = () => {
const [loading,setloading]=useState(false);
const {setAuthUser}=useAuthContext();
const Login=async(userName,password)=>{
    const success=handleInputErrors({userName,password});
    if(!success)return ;
    try {
        setloading(true);
        const res=await fetch('/api/auth/login',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({userName,password}),
          });
        if(res.ok){
            toast.success("Successfully logged in !!!");
          }
          else{
            toast.error("Login failed");
          }
        const data=await res.json();
        console.log(data);
        if(data.error){
            throw new Error(data.error);
        }
        localStorage.setItem("user-log",JSON.stringify(data));
        setAuthUser(data);
    } catch (error) {
        toast.error(error.message);
    }finally{
        setloading(false);
    }
}
return {loading,Login};
}

export default useLogin

function handleInputErrors({userName,password}){
    if(!userName || !password){
       toast.error('Please fill all fields');
       return false;
    }
    if(password.length<8){
      toast.error('Paasword should contain atleast 8 characters');
      return false;
    }
    return true;
  }