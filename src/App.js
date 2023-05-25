import { useState } from 'react';
import './App.css'
import TodoInput from './Component/TodoInput';
import TodoList from './Component/TodoList';
function App() {

  // Creating list to add task from input
  const [listTodo, setListTodo]  = useState([]);

  // This function will add the entered task in the list input parameter is for the text entered in the text area
  let addList = (input)=>{
    if(input!=="")
    setListTodo([...listTodo, input])
  }
  
const deletelisttodo = (key)=>{
  let newlisttodo = [...listTodo];
  newlisttodo.splice(key, 1);
  setListTodo([...newlisttodo]);
}  


  return (
    <div className="main-container">

      <div className="center-container">
         <TodoInput addlist={addList}/>
         <h1 className='app-heading'>TODO</h1>
         {listTodo.map((listItem, i)=>{
          return <TodoList key={listItem} index={listItem} item={listItem}  deleteItem={deletelisttodo}/>

         })}
      </div>
    </div>  
  );
}

export default App;
