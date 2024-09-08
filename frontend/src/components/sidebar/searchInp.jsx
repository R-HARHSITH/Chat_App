import React from 'react'
import { FaSearch } from "react-icons/fa";
import toast from 'react-hot-toast';
import useConversation from '../../zustand/useConvrsation';
import useGetConversation from '../../hooks/useGetConversation';

const searchInput = () => {
  const [search, setSearch] = useState("");
	const { setSelectedConversation } = useConversation();
	const { conversations } = useGetConversation();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!search) return;
		if (search.length < 3) {
			return toast.error("Search term must be at least 3 characters long");
		}

		const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

		if (conversation) {
			setSelectedConversation(conversation);
			setSearch("");
		} else toast.error("No such user found!");
	};
  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-2'>
        <input type='text' placeholder='Search' className='input input-bordered rounded-full mt-3' value={search} 
        onChange={(e)=>setSearch(e.target.value)}
        />
        <button type='submit' className='btn btn-circle bg-sky-500 text-white mt-3 mr-1 hover:bg-black'>
        <FaSearch/>
        </button>
    </form>
  )
}

export default searchInput;


// import React from 'react'
// import { FaSearch } from "react-icons/fa";

// const searchInput = () => {
//   return (
//     <form className='flex items-center gap-2'>
//         <input type='text' placeholder='Search' className='input input-bordered rounded-full mt-3' />
//         <buton type='submit' className='btn btn-circle bg-sky-500 text-white mt-3 mr-1 hover:bg-black'>
//         <FaSearch/>
//         </buton>
//     </form>
//   )
// }

// export default searchInput;
