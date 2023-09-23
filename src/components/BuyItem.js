import React from 'react'

function BuyItem() {
  return (
    <div class="input-group mb-3">
  <input type="text" className="form-control" placeholder="item buy" aria-label="" aria-describedby="basic-addon1"></input>
  <input type="number" className="form-control" placeholder="item cost/pln" aria-label="" aria-describedby="basic-addon1"></input>
  <div class="input-group-prepend">
    <button class="btn btn-outline-secondary" type="button">Add Expens</button>
  </div>
</div>
  )
}

export default BuyItem