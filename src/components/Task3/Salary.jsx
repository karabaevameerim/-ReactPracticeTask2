import React, { useState } from 'react'
import "./Salary.css"
const Salary = (props) => {
    const [text, setText] = useState(props.employees.map(e => ({...e})));
    // console.log(props.employees);
    const handleEditInput = (e, index)=>{
        const { name, value } = e.target;
        const newList = [...text];
        newList[index][name] = value;
        setText(newList);
    };
    const handleAllSalary =  text.reduce((acc, cur)=>{
       return  acc+cur.days*cur.salaryPerDay;
    }, 0)
  return (
    <div>
        <h2>Task3</h2>
        <table>
            
            <tr>
    <th>Name</th>
    <th>surname</th>
    <th>Days</th>
    <th>SalaryPerDay</th>
  </tr>
  
  {props.employees.map((e, index) => (

    <tr key={index}>
        <td>{e.name}</td>
        <td>{e.surname}</td>
        <td><input name="days" value={text[index].days} onChange={(e) => handleEditInput(e, index)} type="text" /></td>
        <td><input name="salaryPerDay" value={text[index].salaryPerDay} onChange={(e) => handleEditInput(e, index)} type="text" /></td>
        <td>{text[index].days * text[index].salaryPerDay}</td>
    </tr>
))}

</table>
<p> AllEmployeesSalary: {handleAllSalary}</p>
    </div>
  )
}

export default Salary