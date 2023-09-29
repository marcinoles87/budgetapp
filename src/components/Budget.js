import React , {useContext} from 'react';
import { AppContex } from './Appcontex';

function Budget() {

  const {budget} = useContext(AppContex)
  
  return (
    <div className='alert alert-secondary'>
      <span>Budget : {budget}</span>
      <button className='btn btn-primary'>Edit</button>
    </div>
  )
}

export default Budget