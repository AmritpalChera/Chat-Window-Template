import React from 'react'
import { IoClose } from 'react-icons/io5'

const Header = ({name, toggleClose}) => {
  return (
    <div className='sticky top-0 bg-white shadow-md shadow-slate-300 h-12 p-4'>
      <div className='w-full flex h-full items-center text-xl'>
        <div className='font-bold  flex-1 text-start'>{name}</div>
        <div className='relative' onClick={toggleClose}>
          <div className='hover:before:block hover:before:absolute hover:before:-inset-1 hover:before:-skew-y-3 hover:before:bg-sky-50 relative inline-block cursor-pointer rounded-full overflow-hidden'>
            <span><IoClose className={`relative hover:text-sky-700`} /></span>
            
          </div>
        </div>
        
      </div>
     
    </div>
  )
}

export default Header