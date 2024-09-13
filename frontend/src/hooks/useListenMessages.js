import { useSocketContext } from "../context/socketcontext";
import useConversation from "../zustand/useConvrsation";
import { useEffect } from "react";

const useListenMessages=()=>{
    const {socket}=useSocketContext();
    const { selectedConversation, setSelectedConversation, messages, setMessages } = useConversation();

    useEffect(() => {
     socket?.on("newMessage",(newMessage)=>{
        newMessage.shouldShake=true;
        setMessages([...messages,newMessage]);
     })

     return ()=>socket?.off("newMessage");
    }, [socket,setMessages,messages]);
}

export default useListenMessages;