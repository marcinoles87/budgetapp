import React, { useState } from 'react'

function BuyItem() {
  const [item , setItem] = useState(['www'])
  
  const handleOnChange = (e , i) => {
   const arrayOne = [...item]
   arrayOne[i] = e.target.value
   setItem(arrayOne)
  }

  console.log(item)
  

  const handleOnClick = () => {
    const abc = [...item, []]
    setItem(abc)
  }
  
  return (
    <>
    {item.map( (data,i) => {
      return(
      <div className="input-group mb-3">
  <input value={data} onChange={e => handleOnChange(e,i)}  type="text" className="form-control" placeholder="item buy" aria-label="" aria-describedby="basic-addon1"></input>
  {/* <input onChange={handleOnChange}   type="number" className="form-control" placeholder="item cost/pln" aria-label="" aria-describedby="basic-addon1"></input> */}
  <div className="input-group-prepend">
    <button  onClick={handleOnClick} className="btn btn-outline-secondary" type="button">Add Expens</button>
  </div>
</div>)
    })}

    </>
    
  )
}

export default BuyItem