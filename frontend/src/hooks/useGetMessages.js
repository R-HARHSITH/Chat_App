import React, { useEffect, useState } from 'react'
import useConversation from '../zustand/useConvrsation';
import toast from 'react-hot-toast';

const useGetMessages = () => {
  const [loading,setLoading]=useState(false);
  const { selectedConversation, setSelectedConversation, messages, setMessages } = useConversation();

  // console.log("Hello",selctedConversation._id);
  useEffect(() => {
    const getMessages=async()=>{
        setLoading(true)
        try {
            const res=await fetch(`/api/messages/${selectedConversation._id}`);
            const data=await res.json();
            if(data.error) throw new Error(data.error);
            setMessages(data);
        } catch (error) {
            toast.error(error.message);
        }finally{
            setLoading(false);
        }
    }
    if(selectedConversation?._id)getMessages();
  }, [selectedConversation?._id,setMessages])
  // console.log(data);
  return {messages,loading};
}

export default useGetMessages;
