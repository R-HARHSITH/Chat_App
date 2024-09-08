import React, { useEffect, useState } from 'react'
import useConversation from '../zustand/useConvrsation';

const useGetMessages = () => {
  const [loading,setLoading]=useState(false);
  const {messages,setMessages,selctedConversation}=useConversation();
  useEffect(() => {
    const getMessages=async()=>{
        setLoading(true)
        try {
            const res=await fetch(`/api/messages/${selctedConversation._id}`);
            const data=await res.json();
            if(data.error) throw new Error(data.error);
            setMessages(data);
        } catch (error) {
            toast.error(error.message);
        }finally{
            setLoading(false);
        }
    }
    if(selctedConversation?._id)getMessages();
  }, [selctedConversation?._id,setMessages])
  return {messages,loading};
}

export default useGetMessages;
