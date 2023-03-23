import List from "./components/List";
import { useState } from "react";
import { Button, Typography } from "@mui/material";
import './index.css'

function App() {

  const [toDos, setToDos] = useState(['placeholder', 'dafdf']);

  const handleSubmit = (e) => {
      console.log(e)
      e.preventDefault();
      const newItem = e.target.newItem.value

      if(newItem != '') { 
      setToDos([...toDos, newItem])
      }
    
  }

  return (
    <div className="App">
      <header className="App-header">
      {
}

<Typography variant="h1" component="h2">
  To Do App
</Typography>;


          < List toDos={toDos}  />
          {console.log(toDos)}

          <form onSubmit={handleSubmit}  > 
          <input type="text" id="newItem" name="newItem" placeholder="todoItem" ></input>
          <Button variant="outlined" type="submit">Add todo</Button>
          </form> 

      </header>
    </div>
  );
}

export default App;
