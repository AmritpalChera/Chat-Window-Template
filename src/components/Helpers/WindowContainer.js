import React from 'react'

const WindowContainer = ({children}) => {
  return (
    <div className='overflow-hidden rounded-md bg-white w-full h-full shadow-lg shadow-slate-400 fixed max-xsm:top-0 max-xsm:left-0  xsm:w-80 xsm:h-128 xsm:bottom-16 xsm:right-16'>
      {children}
    </div>
  )
}

export default WindowContainer