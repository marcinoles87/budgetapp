import React, { useState } from 'react'

function BuyItem({costItemBuy}) {
  const [item , setItem] = useState({})

const message = 'from child to parent'
  
  const handleOnChange = (e) => {
    const target = e.target.value
    const target2 = e.target.value
    console.log(target)
    setItem({
      name : target ,
      cost : target2
    })
  }

  const handleOnChange2 = (e) => {
    const target = e.target.value
    console.log(target)
    setItem({
      cost : target
    })
  }

  const handleOnClick = () => {
    console.log(`dodano produkt ${item.name} `)
    console.log(`dodano produkt ${item.cost} `)
    costItemBuy(message)
  }
  
  return (
    <div className="input-group mb-3">
  <input onChange={handleOnChange}  type="text" className="form-control" placeholder="item buy" aria-label="" aria-describedby="basic-addon1"></input>
  <input onChange={handleOnChange2}   type="number" className="form-control" placeholder="item cost/pln" aria-label="" aria-describedby="basic-addon1"></input>
  <div className="input-group-prepend">
    <button  onClick={handleOnClick} className="btn btn-outline-secondary" type="button">Add Expens</button>
  </div>
</div>
  )
}

export default BuyItem