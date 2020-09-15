import React,{useState} from 'react';
import './App.css';

function App() {
  const [input,setInput]= useState('');
  return (
    <div className="App">
    
   <h1>Messenger</h1>
   <input value={input}/>
   <button>Send Message</button> 
   
   </div>
  );
}

export default App;
