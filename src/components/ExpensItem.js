import React from 'react';
import { TiDelete} from 'react-icons/ti'

function ExpensItem({name , cost , expenses}) {

  const handleDeleteclick = () => {
    console.log(expenses)
  }

  return (
    <li className='list-group-item'>
        {name} <span className='badge  bg-primary'> {cost} pln</span>
      <TiDelete onClick={handleDeleteclick}></TiDelete>
      </li>
  )
}

export default ExpensItem