import React, { useEffect } from 'react'
import { IoMdCall } from "react-icons/io";
import Messages from './Messages';
import MessageInput from './messageinput';
import useConversation from '../../zustand/useConvrsation';
const messagecontainer = () => {
  // const noChat=true;.
  const {selectedConversation,setSelectedConversation}=useConversation();
    
  useEffect(() => {
    
     return ()=>setSelectedConversation(null);
  }, [setSelectedConversation])
  
  return (
    <div className='md:min-w-[450px] flex flex-col'>
      {!selectedConversation?<NoChat/>:(
        <>
        <div className='bg-slate-500 px-4 py-2 mb-2 text-left'>
         
          <span className='label-text text-xl'>TO:</span><span className='text-gray-900  font-bold text-xl'>{selectedConversation.fullName}</span>
          <button type='submit' className='btn w-15 h-7 bg-green-500 text-white mt-3 ml-96 hover:bg-black'>
          <IoMdCall className='cursor-pointer w-6 h-5'/>
          </button>
        </div>    
        <Messages />
        <MessageInput />
        </>
      )}
    </div>
  )
}

export default messagecontainer;

const NoChat=()=>{
  return(
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-black-200 font font-semibold flex flex-col items-center gap-2'>
        <p>Hi 👋 hello</p>
      </div>
    </div>
  )
}


// import React from 'react'
// import { IoMdCall } from "react-icons/io";
// import Messages from './messages';
// import MessageInput from './messageinput';
// const messagecontainer = () => {
//   return (
//     <div className='md:min-w-[450px] flex flex-col'>
//       <>
//       <div className='bg-slate-500 px-4 py-2 mb-2 text-left'>
       
//         <span className='label-text text-xl'>TO:</span><span className='text-gray-900  font-bold text-xl'>HI</span>
//         <button type='submit' className='btn w-15 h-7 bg-green-500 text-white mt-3 ml-96 hover:bg-black'>
//         <IoMdCall className='cursor-pointer w-6 h-5'/>
//         </button>
//       </div>    
//       <Messages />
//       <MessageInput />
//       </>
//     </div>
//   )
// }

// export default messagecontainer;
