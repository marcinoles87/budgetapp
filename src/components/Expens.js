import React, { useEffect, useState } from 'react'
import ExpensItem from './ExpensItem'

function Expens({setSpent}) {

  const [sum , setSum ] = useState(0)
  
    const expense = [
          {id: 1234 , name : 'shooping' , cost : 12 },
          {id: 1235 , name : 'car gas' , cost : 585 },
          {id: 1236 , name : 'kids fun' , cost : 66} ,
          {id: 1238 , name : 'my own' , cost : 15.5 },
        
    ]

  
    const costAll = expense.map( (item) => {

      return item.cost
      
      
    })

  useEffect( () => {
     const newSum =  costAll.reduceRight((acc, cur) => acc + cur, 0);
     setSpent(newSum)
  } , [])
  
    
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