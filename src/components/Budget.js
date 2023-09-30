import React , {useContext, useState} from 'react';
import { AppContex } from './Appcontex';

function Budget() {

  const {budget , dispatch} = useContext(AppContex)
  const [changeBudget , setChangeBudget] = useState()
  const [show , setShow] = useState(false)
 
    
  

  const handleOnClick = (e) =>{
   e.preventDefault()
   setShow(!show)
  
   

    dispatch({
      type : 'CHANGE_BUDGET',
      payload : changeBudget
    }
    )
  }
  
  return (
    <div className='alert alert-secondary'>
      <span>Budget : {budget} </span>
      {show ? <input placeholder='add your budget' onChange={( event) => setChangeBudget(event.target.value)} value={changeBudget}></input> : ''}
      
      <button className='btn btn-primary' onClick={handleOnClick} >Edit</button>
    </div>
  )
}

export default Budget