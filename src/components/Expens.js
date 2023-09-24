import React, { useEffect, useState } from 'react'
import ExpensItem from './ExpensItem'

function Expens() {
    const expense = [
          {id: 1234 , name : 'shooping' , cost : 12 },
          {id: 1235 , name : 'car gas' , cost : 55 },
          {id: 1236 , name : 'kids fun' , cost : 66} ,
          {id: 1238 , name : 'my own' , cost : 77 },
        
    ]

    const allCost = expense[0].cost + expense[1].cost ;
  
    const costAll = expense.map( (item) => {
      return(item.cost++)
      
    })

    console.log(costAll)
    
  return (
    <div className='list-group'>
        {expense.map( (item) => {
            return(

                <ExpensItem id={item.id} name={item.name} cost={item.cost} key={item.id}></ExpensItem>
            )
        })}
    </div>


  )
}

export default Expens