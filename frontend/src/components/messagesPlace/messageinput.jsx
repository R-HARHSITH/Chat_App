import React, { useState } from 'react'
import { IoMdSend } from "react-icons/io";
import useSendMessages from '../../hooks/useSendMessages.js';

const messageinput = () => {
  const [message,setMessage]=useState("");
  const {loading,sendMessage}=useSendMessages();
  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(!message)return;
    await sendMessage(message);
    setMessage("");
  }
  return (
    <div>
      <form className='px-4 my-3' onSubmit={handleSubmit} >
        <div className='w-full relative'>
            <input type='text' className='border text-sm rounded-lg block w-full p-2.5 bg-gray-300 text-black border-gray-400' placeholder='Enter message' value={message}
					onChange={(e) => setMessage(e.target.value)} />
            <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
            {loading?<div className='loading loading-spinner'></div>:<IoMdSend />}
        </button>
        </div>
      </form>
    </div>
  )
};

export default messageinput;



// import React from 'react'
// import { IoMdSend } from "react-icons/io";

// const messageinput = () => {
//   return (
//     <div>
//       <form className='px-4 my-3'>
//         <div className='w-full relative'>
//             <input type='text' className='border text-sm rounded-lg block w-full p-2.5 bg-gray-300 text-black border-gray-400' placeholder='Enter message'></input>
//             <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
//             <IoMdSend />
//         </button>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default messageinput;
