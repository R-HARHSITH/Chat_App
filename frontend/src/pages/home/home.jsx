import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import MessageContainer from '../../components/messagesPlace/messagecontainer';
const home = () => {
  return (
    <div>
      <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-grey-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <Sidebar />
        <MessageContainer />
      </div>
    </div>
  )
}

export default home;


// import React from 'react'
// import Sidebar from '../../components/sidebar/Sidebar';
// import MessageContainer from '../../components/messagesPlace/messagecontainer';
// const home = () => {
//   return (
//     <div>
//       <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-grey-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//         <Sidebar />
//         <MessageContainer />
//       </div>
//     </div>
//   )
// }

// export default home;
