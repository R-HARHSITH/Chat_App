import React from 'react'
import { BiLogOut } from "react-icons/bi";
import uselogout from '../../hooks/uselogout';


const logoutBtn = () => {
  const {loading,logout}=uselogout();
  return (
    <div className='mt-auto'>
    {!loading?( <BiLogOut className='w-6 h-6 text-black cursor-pointer' onClick={logout}/>):
    (<span className='loading loading-spinner' />)
    }
    </div>
  )
}

export default logoutBtn;

// import React from 'react'
// import { BiLogOut } from "react-icons/bi";


// const logoutBtn = () => {
//   return (
//     <div className='mt-auto'>
//      <BiLogOut className='w-6 h-6 text-black cursor-pointer'/>
//     </div>
//   )
// }

// export default logoutBtn;
