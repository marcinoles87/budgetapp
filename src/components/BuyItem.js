import React, { useState } from 'react'

function BuyItem() {
  const [name , setName] = useState('');
  const [cost , setCost] = useState('');
  
 
  
  return (
      <>
      
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
        <button type='submit' className='btn btn-primary'>Add Cost</button>
      </div>

    



    

    </>
    
  )
}

export default BuyItem