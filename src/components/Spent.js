import React , {useContext}from 'react'
import { AppContex } from './Appcontex'

function Spent({spentCost}) {

  const {expenses , budget} = useContext(AppContex)
  
  const totalExpenses = expenses.reduce( (total , item) =>{
    return ( total = total + item.cost)
  } , 0)

  const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-info';
  const spentTomuch = totalExpenses > budget ? 'you spent to much money !' : '';
  return (
    <div className={`alert ${alertType}`}>
        <span>Spent : {totalExpenses} {spentTomuch}</span>
        
        </div>
  )
}

export default Spent