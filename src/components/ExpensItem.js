import React from 'react';
import { TiDelete} from 'react-icons/ti'

function ExpensItem({id , name , cost}) {
  return (
    <li className='list-group-item' key={id}>
      {name} 
      <span className='badge'> E {cost}</span>
      
    </li>
  )
}

export default ExpensItem