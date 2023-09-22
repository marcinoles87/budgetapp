import React from 'react'

function ExpensItem({id , name , cost}) {
  return (
    <div key={id}>{name} <span>{cost}</span></div>
  )
}

export default ExpensItem