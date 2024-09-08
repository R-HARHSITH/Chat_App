import React from 'react'
import useConversation from '../../zustand/useConvrsation.js'

const conversation = ({conversation,lastIndex}) => {
  // console.log(lastIndex);
  const {selectedConnversation,setSelectedConversation}=useConversation();
  const isSelected=selectedConnversation?._id===conversation._id;
  return (
    <>
    <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
      ${isSelected?"bg-sky-600":""}
      `} 
      onClick={()=>setSelectedConversation(conversation)}
      >
      <div className='avatar online placeholderS'>
        <div className='w-12 rounded full'>
            <img src={conversation.profilePic}>
            </img>
        </div>
      </div>
    
    <div className='flex flex-col flex-1'>
      <div className='flex gap-3 justify-between'>
        <p className='font-bold text-black'>
          {conversation.fullName}
        </p>
        <span className='text-xl'>👽</span>
      </div>
    </div>
    </div>
   {!lastIndex &&  <div className='divider my-0 py-0 h-1' />}
    </>
  )
}

export default conversation;


// import React from 'react'

// const conversation = () => {
//   return (
//     <>
//     <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
//       <div className='avatar online placeholderS'>
//         <div className='w-12 rounded full'>
//             <img src='https://avatar.iran.liara.run/public/22'>
//             </img>
//         </div>
//       </div>
    
//     <div className='flex flex-col flex-1'>
//       <div className='flex gap-3 justify-between'>
//         <p className='font-bold text-gray-200'>
//           Hello
//         </p>
//         <span className='text-xl'>👽</span>
//       </div>
//     </div>
//     </div>
//     <div className='divider my-0 py-0 h-1'>

//     </div>
//     </>
//   )
// }

// export default conversation;
