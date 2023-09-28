import React, { useContext } from 'react'
import { AppContex } from './Appcontex'

function Remaining() {

  const {budget , expenses} = useContext(AppContex)
  
  const totalExpenses = expenses.reduce( (total , item) =>{
    return ( total = total + item.cost)
  } , 0)


  return (
    <div className='alert alert-success'>
        <span>Remaining : {budget - totalExpenses}  </span>
    </div>
  )
}

export default Remaining