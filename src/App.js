
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import Spent from './components/Spent';
import Expens from './components/Expens';

function App() {
  return (
    <div className="App">
      <h1 className='mt-3'>Budget Planner</h1>
      <div className='col mt-3'>
        <div className='row-sm'>
          <Budget></Budget>

        </div>
        
        <div className='row-sm'>
          <Remaining></Remaining>
        </div>

        <div className='row-sm'>
          <Spent></Spent>
        </div>
      </div>
      <h3 className='mt-3'>Expense</h3>
      <div className='col mt-1'>
        <div className='row-sm'>
          <Expens></Expens>
        </div>
      </div>
    </div>
  );
}

export default App;
