import React , {useContext} from 'react';
import { AppContex } from './Appcontex';

function Budget() {

  const {budget} = useContext(AppContex)
  
  return (
    <div className='alert alert-secondary'>
      <span>Budget : {budget}</span>
    </div>
  )
}

export default Budget