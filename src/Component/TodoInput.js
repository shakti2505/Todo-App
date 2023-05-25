import React, { useState } from 'react'

function TodoInput(props) {

    const [input, setInput] = useState("");
  return (
      <div className='input-container'>
        <input 
        type="text" 
        className='input-box-todo'
        placeholder='Enter Task'
        value={input}
        onChange={e=>{
            setInput(e.target.value)
        }}
        />
        <button className='add-btn' onClick={()=>{
            props.addlist(input)
            setInput("")
        }}>+</button>
      
      </div>    
  )
}

export default TodoInput