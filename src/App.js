
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import Spent from './components/Spent';
import Expens from './components/Expens';
import BuyItem from './components/BuyItem';
import { useEffect, useState } from 'react';
import {AppProvider} from './components/Appcontex'

function App() {

  const [budget , setBudget] = useState(1000);
  const [spentCost , setSpent] = useState(0);
  const [itemBuy , setItembuy] = useState()
  
 
  const  costItemBuy = (childData) => {
    setItembuy(childData)
  
  }

  return (

    <AppProvider>
      <div className="App">
      <h1 className='mt-3'>Budget Planner</h1>
      <p>{itemBuy}</p>
      <div className='row mt-3'>
        <div className='col-sm'>
          <Budget budget={budget}></Budget>

        </div>
        
        <div className='col-sm'>
          <Remaining></Remaining>
        </div>

        <div className='col-sm'>
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
        <h2 className='mt-3'>Add Expense</h2>
        <BuyItem costItemBuy={costItemBuy}></BuyItem>
      </div>
    </div>
    </AppProvider>
    
  );
}

export default App;
