import './App.css';
import Table from './components/DataTable';
import FormData from './components/FormData';
import Navbar from './components/Navbar';
import Counter from './components/counter';
import Todo from './components/todo';
import FocusInput from './components/useRefInputFocus';
import CompA from './contextAPI/CompA';

//ContextAPI
import { createContext } from 'react';

const Firstname = createContext();
const Lastname = createContext();

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <br></br> */}
      {/* <FocusInput /> */}
      {/* <Todo /> */}
      {/* <Table /> */}
      {/* <Navbar /> */}
     {/* <FormData /> */}

     <Firstname.Provider value={"Shyam"}>
       <Lastname.Provider value={"Gopal"}>
          <CompA />
       </Lastname.Provider>  
     </Firstname.Provider>
     
    </div>
  );
}

export default App;
export {Firstname, Lastname};
