import React, { useState,useEffect } from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import { FormControl ,InputLabel,Input} from '@material-ui/core';
import Message from './Message'
function App() {
  const [input, setInput] = useState(["hello"]);
  const [messages, setMessages] = useState([]);
  const [username,setUsername]=useState('');

  useEffect(() => {
setUsername(prompt('Please enter your name'))
  }, [])
 
  const sendMessage = (event) => {
    event.preventDefault();

    setMessages([...messages, input]);
    setInput("");
  };
  return (
    <div className="App">
      <h1>Messenger</h1>
  <h3>welcome {username}</h3>
      <form action="">
        <FormControl>
          <InputLabel >Enter a message...</InputLabel>
          <Input  value={input}
          onChange={(event) => setInput(event.target.value)}/>
       
       <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={!input}
          onClick={sendMessage}
        >
          Send Message
        </Button>
        </FormControl>
    

      </form>

      {messages.map((message) => (
        <Message text={message}/>
      
      ))}
    </div>
  );
}

export default App;
