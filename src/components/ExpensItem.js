import React from 'react';
import { TiDelete} from 'react-icons/ti'

function ExpensItem({id , name , cost}) {
  return (
    <li className='list-group-item'>{name} <span className='badge  bg-primary'> {cost} pln</span>
      </li>
  )
}

export default ExpensItem