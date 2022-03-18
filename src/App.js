import './App.css';
import React, { useState } from 'react';
import Todo from './Todo';
import { List, Paper } from '@material-ui/core';

function App() {
  let [items, setItem] = useState([
    {      id: 0, title: "Hello I'm from App.js", done: true},
    {      id: 1, title: "Hello I'm from App.js 222", done: false}
  ]);

  return (
    <div className="App">
        <Paper style={{margin: 16}}>
          <List>
            {
              items.map((item, idx)=>{
                return (<Todo item={item} key={item.id}/>)
              })
            }
          </List>
        </Paper>
      {/* {
        items.map((item, idx) => {
          return (
            <Todo item={item} key={item.id} />
          )
        })
      } */}
    </div>
  );
}

export default App;
