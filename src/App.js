
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import Spent from './components/Spent';

function App() {
  return (
    <div className="App">
      <h1 className='mt-3'>Budget Planner</h1>
      <div className='row mt-3'>
        <div className='col-sm'>
          <Budget></Budget>
          <Remaining></Remaining>
          <Spent></Spent>
        </div>
      </div>
    </div>
  );
}

export default App;
