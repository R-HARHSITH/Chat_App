import React from 'react'

const genderCheckbox = ({onCheckboxChange,selectedGender}) => {
  return (
    <div className='flex'>
        <div className='form-control'>
        <label className={`label gap-2  cursor-pointer ${selectedGender==="Male"?"selected":" "}`}><span className='label-text'>Male</span>
        <input type='checkbox' className='checkbox border-slate-900 ' checked={selectedGender==='Male'}
        onChange={()=>onCheckboxChange("Male")}></input>
        </label>
        </div>
        <div className='form-control'>
            <label className={`label gap-2  cursor-pointer ${selectedGender==="Female"?"selected":" "}`}>
            <span className='label-text'>Female</span>
            <input type='checkbox' className='checkbox border-slate-900' checked={selectedGender==='Female'}
        onChange={()=>onCheckboxChange("Female")}></input>
            </label>
        </div>
    </div>
  );
};


export default genderCheckbox;


// import React from 'react'

// const genderCheckbox = () => {
//   return (
//     <div className='flex'>
//         <div className='form-control'>
//         <label className={'label gap-2  cursor-pointer'}><span className='label-text'>Male</span>
//         <input type='checkbox' className='checkbox border-slate-900 '></input>
//         </label>
//         </div>
//         <div className='form-control'>
//             <label className={'label gap-2 cursor-pointer'}>
//             <span className='label-text'>Female</span>
//             <input type='checkbox' className='checkbox border-slate-900'></input>
//             </label>
//         </div>
//     </div>
//   );
// };


// export default genderCheckbox;