import React, { useState } from 'react'
import "./Paragraph.css"

const Paragraph = (props) => {
    const [task, setTask] = useState("");
    const handleInput =(e)=>{
        setTask(e.target.value);
    };
// console.log(task);
const handleAdd = ()=>{
    if(!task){
        alert('не все поля заполнены!');
        return;
    };
const newList = {
    task: task,
    status: false,
    id: Date.now(),
};

// console.log(newList);
props.handleList(newList);
setTask("");
};



  return (
   
        <div className='list'>
        <h2>Task2</h2>
        <input type="text" onChange={handleInput} value = {task} />
        <button onClick={handleAdd}>+Add</button>
   
     {props.inpList.map((item)=>(
             <p key ={item.id}>
                {item.task}
             </p>
            ))}
    </div>
    
  )
}

export default Paragraph