import React from 'react'

function Spent({spentCost}) {
  
  return (
    <div className='alert alert-info'>
        <span>Spent : {spentCost}</span>
        </div>
  )
}

export default Spent