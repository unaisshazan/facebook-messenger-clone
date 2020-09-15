import React, { useState } from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import { FormControl ,InputLabel,Input} from '@material-ui/core';
function App() {
  const [input, setInput] = useState(["hello"]);
  const [messages, setMessages] = useState([]);
  console.log(input);
  console.log(messages);
  const sendMessage = (event) => {
    event.preventDefault();

    setMessages([...messages, input]);
    setInput("");
  };
  return (
    <div className="App">
      <h1>Messenger</h1>
      <form action="">
        <FormControl>
          <InputLabel >Enter a message...</InputLabel>
          <Input/>
       
        </FormControl>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={!input}
          onClick={sendMessage}
        >
          Send Message
        </Button>
      </form>

      {messages.map((message) => (
        <p>{message}</p>
      ))}
    </div>
  );
}

export default App;
