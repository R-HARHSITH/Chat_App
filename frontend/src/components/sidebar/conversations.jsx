import React from 'react'
import Conversation from './conversation'
import useGetConversation from '../../hooks/useGetConversation';
const conversations = () => {
  const {loading,conversations}=useGetConversation();
  console.log("CONVERSATIONS: ",conversations);
 
  return (
   <div className='py-2 flex flex-col overflow-auto h-96'>
    {conversations.map((conversation,idx)=>(
      <Conversation key={conversation._id} conversation={conversation}
      lastIndex={idx===(conversation.lenght-1)}></Conversation>
    ))}
    {loading ?<span className='laoding loading-spinner mx-auto'></span>:null}    
   </div>
  );
};

export default conversations;


// import React from 'react'
// import Conversation from './conversation'
// const conversations = () => {
//   return (
//     <div className='py-2 flex flex-col overflow-auto'>
//       <Conversation/>
//       <Conversation/>
//       <Conversation/>
//       <Conversation/>
//     </div>
//   )
// }

// export default conversations;
