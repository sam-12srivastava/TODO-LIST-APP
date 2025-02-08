import React, { useState } from "react";

export const addtodo = (Addtodo) => {
 const [title,setTitle]=useState("");
 const [desc,setDesc]=useState("");
   const submit=(e)=>{
e.preventDefault();
if(!title || desc){
   alert("Title or description cannot be blank") 
}
else{
Addtodo(title,desc);
  setTitle("");
  setDesc("");
}
}
  return (
    <div className='container'>
        <h3>Add a Todo</h3>
     <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Todo Title</label>
    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} class="form-control" id="title" aria-describedby="emailHelp"/>
    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Todo Description</label>
    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} class="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
</form> 
    </div>
  )


}

export default addtodo
