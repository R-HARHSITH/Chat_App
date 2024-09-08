import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';

const login = () => {
  const [userName,setUserName]=useState("");
  const [password,setPassword]=useState("");
  const {loading,Login}=useLogin();
  const handleSubmit=async(e)=>{
    e.preventDefault();
    await Login(userName,password);
  }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold teext-center text-gray-500'>Login <span>ChatApp</span> </h1>
       <form onSubmit={handleSubmit}>
        <div>
          <label className='label p-2'>
            <span className='text-base label-text'> Username </span>
          </label>
          <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' value={userName}
          onChange={(e)=>setUserName(e.target.value)} />
        </div>
        <div>
        <label className='label p-2'>
            <span className='text-base label-text'> Password </span>
          </label>
          <input type='password' placeholder='Enter password' className='w-full input input-bordered h-10' value={password}
          onChange={(e)=>setPassword(e.target.value)}></input>
        </div>
        <Link to='/signup' className='text-sm hover:underline hover:text-blue-950'>Don't have account</Link>
        <div>
        <button className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading}>
							{loading ? <span className='loading loading-spinner'></span> : "Login"}
						</button>
        </div>
       </form>
      </div>
    </div>
  )
}

export default login;


// import React from 'react'

// const login = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className='w-full p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//         <h1 className='text-3xl font-semibold teext-center text-gray-500'>Login <span>ChatApp</span> </h1>
//        <form>
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
//         <a href='' className='text-sm hover:underline hover:text-blue-950'>Don't have account</a>
//         <div>
//           <button className='btn btn-block btn-sm mt-2 '>Login</button>
//         </div>
//        </form>
//       </div>
//     </div>
//   )
// }

// export default login;
