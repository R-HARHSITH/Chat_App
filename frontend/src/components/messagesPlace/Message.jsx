import React from 'react'
import { useAuthContext } from '../../context/authcontext';
import useConversation from '../../zustand/useConvrsation';
import { extractTime } from '../../utils/extractTime';
const Message = ({message}) => {
  const {authUser}=useAuthContext();
  const {selectedConversation}=useConversation();
  const formattedTime=extractTime(message.newMessage.createdAt);
  const fromMe=message.newMessage.senderId===authUser._id;
  const chatClassName=fromMe?'chat-end':'chat-start';
  const profilePic=fromMe?authUser.profilePic:selectedConversation?.profilePic
  const bubbleBgColor=fromMe?'bg-blue-500':"";
// console.log(fromMe);
  return (
    <div className={`chat ${chatClassName}`} >
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src={profilePic} alt='hello' /> 
            </div>
        </div>
       <div className={`chat-bubble text-white bg-blue-500 ${bubbleBgColor}`}>{message.newMessage.message}</div>
       <div className='chat-footer opacity-500 text-xs flex gap-1 items-center'>{formattedTime}</div>
    </div>
  )
}

export default Message;


// import React from 'react'

// const message = () => {
//   return (
//     <div className='chat chat-end'>
//         <div className='chat-image avatar'>
//             <div className='w-10 rounded-full'>
//                 <img src='https://avatar.iran.liara.run/public/22' alt='hello' />
//             </div>
//         </div>
//        <div className={'chat-bubble text-white bg-blue-500'}>Hello</div>
//        <div className='chat-footer opacity-500 text-xs flex gap-1 items-center'>11:11</div>
//     </div>
//   )
// }

// export default message;
