// import React from 'react'
// import {Todoitem} from "./Todoitem";


// export const Todos= (props) => {
//   let myStyle={
//     minHeight:"70vh"
  
//   }
//   return (
//     <div className='container my-3' style={myStyle}>
//      <h3 className='my-3'>Todos List</h3>
    
//     {props.todos.length===0?"No Todos to Display":
//      props.todos.map((todo)=>{
//       // return(
//       //   <>
//       //   <h3>this</h3>
// return (
// <>
// <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete}/> 
//     </>
//       }
//      })
// } 
//     </div>
//   )
// }

// // export default Todos

// // export const Todos = ({ todos }) => {
// //   if (!todos || todos.length === 0) {
// //     return <p>No todos to display.</p>;
// //   }

// //   return (
// //     <ul>
// //       {todos.map((todo, index) => (
// //         <li key={index}>{todo.title || 'Untitled'}</li>
// //       ))}
// //     </ul>
// //   );
// // };

// export default Todos;

import React from 'react';
import { Todoitem } from './Todoitem';

export const Todos = (props) => {
  let myStyle = {
    minHeight: '70vh',
  };

  return (
    <div className="container my-3" style={myStyle}>
      <h3 className="my-3">Todos List</h3>

      {props.todos && props.todos.length === 0 ? (
        <p>No Todos to Display</p>
      ) : (
        props.todos.map((todo) => (
          <Todoitem
            todo={todo}
            key={todo.sno} // Assuming 'sno' is unique for each todo
            onDelete={props.onDelete}
          />
        ))
      )}
    </div>
  );
};

export default Todos;
