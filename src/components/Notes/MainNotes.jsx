import React from 'react'

const MainNotes = ({title, descriptio}) => {
  return (
    <div>
        <div className='p-4 rounded-3xl border shadow-sm w-[200px] h-[200px]'>
            <h5>{title}</h5>
            <p>{descriptio}</p>
        </div>
    </div>
  )
}

export default MainNotes