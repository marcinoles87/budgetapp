import React from 'react'

function Remaining({remaining}) {
  return (
    <div className='alert alert-success'>
        <span>Remaining : {remaining}</span>
    </div>
  )
}

export default Remaining