import React from "react";

function TodoList(props) {
  return (
    <>
    <li className="listitem">
        {props.item}
     <span className="icons"><i className="fa-solid fa-trash-can fa-2x1 icon delete" onClick={e=>{props.deleteItem(props.index)}}></i></span>

    </li>
    
    </>
  );
}

export default TodoList;
