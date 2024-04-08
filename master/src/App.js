import './App.css';
import Table from './components/DataTable';
import FormData from './components/FormData';
import Navbar from './components/Navbar';
// import Counter from './components/counter';
import Todo from './components/todo';
import FocusInput from './components/useRefInputFocus';
import CompA from './contextAPI/CompA';


//Redux
import { Provider } from "react-redux";
import ReduxCounter from './Redux/Counter';
import store from './Redux/store';

//ContextAPI
import { createContext } from 'react';
import Circle from './Dynamic_Circle/Circle';



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
      <Circle />

      {/* Context API */}
      
     {/* <Firstname.Provider value={"Shyam"}>
       <Lastname.Provider value={"Gopal"}>
          <CompA />
       </Lastname.Provider>  
     </Firstname.Provider> */}

     {/* Redux Counter */}
     {/* <Provider store={store}>
      <div>
        <h1>Redux Counter App</h1>
        <ReduxCounter />
      </div>
    </Provider> */}
     
    </div>
  );
}

export default App;
export {Firstname, Lastname};
