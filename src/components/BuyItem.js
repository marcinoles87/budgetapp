import React, { useState } from 'react'

function BuyItem() {
  const [item , setItem] = useState(['www'])
  
 
  
  return (
      <>
      <h3>Add Cost</h3>
      <div className="row">
      
      <div className='col-sm'>
        <label for='name'>Name</label>
        <input  
        type="text" 
        className="form-control" 
        required='required'
        id='name'>
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
          id='cost'>
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