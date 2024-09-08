import React, { useState } from 'react'
import  GenderCheckbox from './GenderCheckbox';
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup';
import toast, { Toaster } from 'react-hot-toast';
const Signup = () => {
  const [input,setInput]=useState({
    fullName:'',
    userName:'',
    password:'',
    confirmPassword:'',
    gender:''
  });

  const {loading,signup}=useSignup();
  const handleCheckboxChange=(gender)=>{
    setInput({...input,gender}); 
  }
  const handlesubmit=async(e)=>{
    e.preventDefault();      
    //  console.log(input);
    await signup(input);
    
  }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-500'>Signup <span>ChatApp</span> </h1>
       <form onSubmit={handlesubmit}>
       <div>
          <label className='label p-2'>
            <span className='text-base label-text'> Full Name </span>
          </label>
          <input type='text' placeholder='Enter Full name' className='w-full input input-bordered h-10' value={input.fullName}
          onChange={(e)=>setInput({...input,fullName:e.target.value})}></input>
        </div>
        <div>
          <label className='label p-2'>
            <span className='text-base label-text'> Username </span>
          </label>
          <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' value={input.username}
          onChange={(e)=>setInput({...input,userName:e.target.value})}></input>
        </div>
        <div>
        <label className='label p-2'>
            <span className='text-base label-text'> Password </span>
          </label>
          <input type='password' placeholder='Enter password' className='w-full input input-bordered h-10' value={input.password}
          onChange={(e)=>setInput({...input,password:e.target.value})}></input>
        </div>
        <div>
        <label className='label p-2'>
            <span className='text-base label-text'> Confirm Password </span>
          </label>
          <input type='password' placeholder='confirm password' className='w-full input input-bordered h-10' value={input.confirmPassword}
          onChange={(e)=>setInput({...input,confirmPassword:e.target.value})}></input>
        </div>
        <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={input.gender}/>
        <Link to='/login' className='text-sm hover:underline hover:text-blue-950'>Already have account</Link>
        <div>
          {/* {!loading?(<button className='btn btn-block btn-sm mt-2 ' onClick={signup}>Signup </button>):
    (<span className='loading loading-spinner' />)
    } */}
    {/* <button className='btn btn-block btn-sm mt-2 '>Signup</button> */}
    <button className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading}>
							{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
						</button>
        </div>
       </form>
      </div>
    </div>
  )
}

export default Signup;



// import React from 'react'
// import  GenderCheckbox from './GenderCheckbox';
// const signup = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className='w-full p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//         <h1 className='text-3xl font-semibold text-center text-gray-500'>Signup <span>ChatApp</span> </h1>
//        <form>
//        <div>
//           <label className='label p-2'>
//             <span className='text-base label-text'> Full Name </span>
//           </label>
//           <input type='text' placeholder='Enter Full name' className='w-full input input-bordered h-10'></input>
//         </div>
//         <div>
//           <label className='label p-2'>
//             <span className='text-base label-text'> Username </span>
//           </label>
//           <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10'></input>
//         </div>
//         <div>
//         <label className='label p-2'>
//             <span className='text-base label-text'> Password </span>
//           </label>
//           <input type='password' placeholder='Enter password' className='w-full input input-bordered h-10'></input>
//         </div>
//         <div>
//         <label className='label p-2'>
//             <span className='text-base label-text'> Confirm Password </span>
//           </label>
//           <input type='password' placeholder='confirm password' className='w-full input input-bordered h-10'></input>
//         </div>
//         <GenderCheckbox/>
//         <a href='' className='text-sm hover:underline hover:text-blue-950'>Already have account</a>
//         <div>
//           <button className='btn btn-block btn-sm mt-2 '>Signup</button>
//         </div>
//        </form>
//       </div>
//     </div>
//   )
// }

// export default signup;