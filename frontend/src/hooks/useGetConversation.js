import {useState,useEffect} from 'react'

const useGetConversation = () => {
    const[loading,setLoading]=useState(false);
    const[conversation,setConversations]=useState([]);

    useEffect(() => {
    const getConversation=async()=>{
        setLoading(true);
        try {
            const res=await fetch('/api/users');
            const data=await res.json();
            if(data.error){
                throw new Error(data.error);
            }
            setConversations(data);
        } catch (error) {
            toast.error(error.message);
        }finally{
            setLoading(false); 
        }
    }
    getConversation();
    
    }, []);
    return {loading,conversation};
    
}

export default useGetConversation;
