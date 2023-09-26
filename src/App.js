
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import Spent from './components/Spent';
import Expens from './components/Expens';
import BuyItem from './components/BuyItem';
import { useEffect, useState } from 'react';

function App() {

  const [budget , setBudget] = useState(1000);
  const [spentCost , setSpent] = useState(0);
  const [remaining , setRemaining] = useState(0);
  const [itemBuy , setItembuy] = useState()
  
  useEffect( () => {
    setRemaining(budget - spentCost)
  },[spentCost])

  const  costItemBuy = (childData) => {
    setItembuy(childData)
  
  }

  return (
    <div className="App">
      <h1 className='mt-3'>Budget Planner</h1>
      <p>{itemBuy}</p>
      <div className='col mt-3'>
        <div className='row-sm'>
          <Budget budget={budget}></Budget>

        </div>
        
        <div className='row-sm'>
          <Remaining remaining={remaining}></Remaining>
        </div>

        <div className='row-sm'>
          <Spent spentCost={spentCost} ></Spent>
        </div>
      </div>
      <h3 className='mt-3'>Expense</h3>
      <div className='col mt-3'>
        <div className='row-sm'>
          <Expens setSpent={setSpent}></Expens>
        </div>
      </div>

      <div className='col mt-3'>
        <BuyItem costItemBuy={costItemBuy}></BuyItem>
      </div>
    </div>
  );
}

export default App;
