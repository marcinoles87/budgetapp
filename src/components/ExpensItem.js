import React from 'react';
import { TiDelete} from 'react-icons/ti';
import { useContext } from 'react';
import { AppContex } from './Appcontex';

function ExpensItem({name , cost ,id}) {

  const {dispatch} = useContext(AppContex)


  const handleDeleteclick = () => {
   
    dispatch({
      type : 'DELETE_EXPENSE' ,
      payload : id
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