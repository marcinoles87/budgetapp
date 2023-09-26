import React, { useState } from 'react'

function BuyItem() {
  const [item , setItem] = useState()

  const handleOnChange = (e) => {
    const target = e.target.value
    console.log(target)
    setItem(target)
  }

  const handleOnClick = () => {
    console.log(`dodano produkt ${item} `)
  }
  
  return (
    <div className="input-group mb-3">
  <input onChange={handleOnChange}  type="text" className="form-control" placeholder="item buy" aria-label="" aria-describedby="basic-addon1"></input>
  <input onChange={handleOnChange}  type="number" className="form-control" placeholder="item cost/pln" aria-label="" aria-describedby="basic-addon1"></input>
  <div className="input-group-prepend">
    <button  onClick={handleOnClick} className="btn btn-outline-secondary" type="button">Add Expens</button>
  </div>
</div>
  )
}

export default BuyItem