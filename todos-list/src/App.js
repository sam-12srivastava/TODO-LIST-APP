// import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import {Todos} from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer';
// import PropTypes from 'prop-types'
import React, { useState } from "react";
import {addtodo} from './MyComponents/addtodo';
function App() {
  const onDelete=(todo)=>{
  console.log("i am onDelete todo",todo);
  //deleteing in this way will not work in react 5
  // let index=todos.indexOf(todo);
  // todos.splice(index,1);
setTodos(todos.filter((e)=>{
  return e!==todo;
}))
  }
  const Addtodo =()=>{
    console.log("i am adding this todo");
 let sno;
    if(todos.length()==0){
  sno=0;
 }
 else{
   sno=todos[todos.length-1].sno +1;}
    
    const mytodo={
 sno:sno,
  title:title,
  desc:desc,
 }
 setTodos([...todos,mytodo])
 console.log(mytodo);

  }
 const [todos,setTodos]=useState([
    {
    sno:1,
    title:"Go to the Market",
    desc:"You need to go to the market to get this job done"

  },
  {
    sno:2,
    title:"Go to the College",
    desc:"You need to go to the market to get this job done"

  },
  {
    sno:3,
    title:"Go to the Office",
    desc:"You need to go to the market to get this job done"

  }
]);
  return (
    <>
   <Header title="MY TODOS LIST" searchBar={false}/>  
   <addtodo Addtodo={Addtodo}/>
   <Todos todos={todos} onDelete={onDelete}/>
   <Footer/>
    </>
  );
}

export default App;



