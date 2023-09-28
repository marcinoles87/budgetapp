import React , {useContext}from 'react'
import { AppContex } from './Appcontex'

function Spent({spentCost}) {

  const {expenses} = useContext(AppContex)
  
  const totalExpenses = expenses.reduce( (total , item) =>{
    return ( total = total + item.cost)
  } , 0)
  
  return (
    <div className='alert alert-info'>
        <span>Spent : {totalExpenses}</span>
        </div>
  )
}

export default Spent