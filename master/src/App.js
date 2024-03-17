import './App.css';
import Table from './components/DataTable';
import Counter from './components/counter';
import Todo from './components/todo';
import FocusInput from './components/useRefInputFocus';
import {Navbar} from  './Routes/Navbar';
import { AllRoutes } from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <br></br> */}
      {/* <FocusInput /> */}
      {/* <Todo /> */}
      {/* <Table /> */}
      <Navbar />
      <AllRoutes/>
    </div>
  );
}

export default App;
