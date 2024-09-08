import React from 'react'
import SearchInput from './searchInp'
import Conversations from './conversations'
import LogoutBtn from './logoutBtn'

const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col sm:flex-col'>
      <SearchInput />
      <div className='divider px-3'></div>
      <Conversations />
      <LogoutBtn/> 
    </div>
  )
}

export default Sidebar



// import React from 'react'
// import SearchInput from './searchInp'
// import Conversations from './conversations'
// import LogoutBtn from './logoutBtn'

// const Sidebar = () => {
//   return (
//     <div className>
//       <SearchInput />
//       <div className='divider px-3'></div>
//       <Conversations />
//       <LogoutBtn/> 
//     </div>
//   )
// }

// export default Sidebar
