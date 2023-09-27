import React, { useEffect, useState , useContext } from 'react'
import ExpensItem from './ExpensItem'
import { AppContex } from './Appcontex'

function Expens({setSpent}) {

  const {expenses} = useContext(AppContex)
    
  return (
    <div className='list-group'>
        {expenses.map( (item) => {
            return(

                <ExpensItem id={item.id} name={item.name} cost={item.cost} key={item.id}></ExpensItem>
            )
        })}
    </div>


  )
}

export default Expens