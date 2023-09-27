import React, { useContext, useState } from 'react';
import { AppContex } from './Appcontex';

function BuyItem() {
  
  const {dispatch} = useContext(AppContex);
  const [name , setName] = useState('');
  const [cost , setCost] = useState('');
  
 
  const onSubmit = (event) =>{
    event.preventDefault();
    alert(' name : ' + name + ' cost :' + cost)
  }
  return (
      <form onSubmit={onSubmit}>
      
      <div className="row">
      
      <div className='col-sm'>
        <label for='name'>Name</label>
        <input  
        type="text" 
        className="form-control" 
        required='required'
        id='name'
        value={name}
        onChange={(event) => setName(event.target.value)}>
        </input>
      </div>
      </div>

      <div className="row">
      
      <div className='col-sm'>
        <label for='cost'>Cost</label>
        <input  
          type="text" 
          className="form-control" 
          required='required'
          id='cost'
          value={cost}
          onChange={(event) => setCost(event.target.value)}>
        </input>
      </div>
      </div>

      <div className='col-sm'>
        <button  type='submit' className='btn btn-primary'>Add Cost</button>
      </div>


    </form>
    
  )
}

export default BuyItem