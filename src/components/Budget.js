import React , {useContext} from 'react';
import { AppContex } from './Appcontex';

function Budget() {

  const {budget , dispatch} = useContext(AppContex)

  const handleOnClick = () =>{
    
    dispatch({
      type : 'CHANGE_BUDGET',
      payload : budget
    }
    )
  }
  
  return (
    <div className='alert alert-secondary'>
      <span>Budget : {budget} </span>
      <button className='btn btn-primary' onClick={handleOnClick} >Edit</button>
    </div>
  )
}

export default Budget