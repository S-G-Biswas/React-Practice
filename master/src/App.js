import './App.css';
import Counter from './components/counter';
import Todo from './components/todo';
import FocusInput from './components/useRefInputFocus';

function App() {
  return (
    <div className="App">
      <Counter />
      <br></br>
      <FocusInput />
      <Todo />
    </div>
  );
}

export default App;
