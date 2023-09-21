
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Budget from './components/Budget';

function App() {
  return (
    <div className="App">
      <h1 className='mt-3'>Budget Planner</h1>
      <div className='row mt-3'>
        <div className='col-sm'>
          <Budget></Budget>
        </div>
      </div>
    </div>
  );
}

export default App;
