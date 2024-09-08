import React, { useRef } from 'react'
import { useEffect } from 'react';
import Message from './Message';
import useGetMessages from '../../hooks/useGetMessages';
import MessageSkeleton from '../skeletons/MessageSkeleton';
const Messages = () => {
  const {messages=[],loading}=useGetMessages();
  const lastMessage=useRef();
  // messages.map((message) => (
    // console.log(message.newMessage.message)
  // ))
useEffect(() => {
  setTimeout(() => {
    lastMessage.current?.scrollIntoView({ behavior: "smooth" });
  }, 100);
}, [messages])

  return (
    <div className='px-4 flex-1 overflow-auto h-96'>
      {!loading &&
				messages.length > 0 &&
				messages.map((message) => (
					<div key={message.newMessage._id} ref={lastMessage}>
						<Message message={message} />
					</div>
				))}

			{loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
			{!loading && messages.length === 0 && (
				<p className='text-center'>Send a message to start the conversation</p>
			)}
    </div>
  )
}

export default Messages;



// import React from 'react'
// import Message from './message';
// const messages = () => {
//   return (
//     <div className='px-4 flex-1 overflow-auto'>
//       <Message/>
//       <Message/>
//       <Message/>
//       <Message/>
//       <Message/>
//     </div>
//   )
// }

// export default messages;
