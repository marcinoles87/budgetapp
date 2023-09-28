import React from 'react';
import { TiDelete} from 'react-icons/ti';
import { useContext } from 'react';
import { AppContex } from './Appcontex';

function ExpensItem({name , cost }) {

  const {expenses} = useContext(AppContex)


  const handleDeleteclick = () => {
   
    expenses.map( (item , index) => {
      const remowe  = expenses.splice(item[index] , index )
      console.log(remowe)
    })
   
  }

  return (
    <li className='list-group-item'>
        {name} <span className='badge  bg-primary'> {cost} pln</span>
      <TiDelete onClick={handleDeleteclick}></TiDelete>
      </li>
  )
}

export default ExpensItem