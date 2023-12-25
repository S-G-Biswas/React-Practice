import './App.css';
import {useState} from "react";

function App() {

   let [count,setCount] = useState(0);
   let [comm,setComm] = useState(0);
   let [share,setShare] = useState(0);

   let Like = () =>{
      setCount(count + 1);
   }
   let Comm = () =>{
    setComm(comm + 1);
   }
   let Share = () =>{
    setShare(share + 1);
   }

  return (
    <div className="Post">
      <div className='imgSec'>
        <img src='https://fastly.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY' className='image'></img>
      </div>
      <hr></hr>
      <div className='btnSec'>
         <button className='likebtn' onClick={Like}>Like {count}</button>
         <button className='commbtn' onClick={Comm}>comm {comm}</button>
         <button className='sharebtn' onClick={Share}>Share {share}</button>
      </div>
    </div>
  );
}

export default App;
