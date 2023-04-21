import React, { useState } from 'react'
import Counter from './components/Counter/Counter'
import Paragraph from './components/Paragraph/Paragraph'
import Salary from './components/Task3/Salary'

const App = () => {
  // todo ----------startTask1-----------
  const [counter, setCounter] = useState(0)
 const increment = ()=>{
setCounter(counter+1)
 };
 const decriment = ()=>{
  setCounter(counter-1)
 };
 // ! ----------finishtTask1-----------
//  todo---------------startTask2-------------
 const [inpList, setInpList] = useState([]);
 const handleList = (newObj)=> {
  let newList = [...inpList]
  newList.push(newObj);
  setInpList(newList)
 }
//  console.log(inpList);
// !--------------------finishtTask2--------------------
const [count, setCount] = useState('')
const  employees = [
  { name: 'SALAMAT', surname: 'BAIKE', days: 20, salaryPerDay: 80 },
  { name: 'Dastan', surname: 'aaa', days: 15, salaryPerDay: 40 },
  { name: 'Emir', surname: 'bbb', days: 22, salaryPerDay: 60 },
  { name: 'Sheraman', surname: 'ccc', days: 15, salaryPerDay: 55 },
  { name: 'Albina', surname: 'kkk', days: 18, salaryPerDay: 44 },
  { name: 'Azret', surname: 'hhh', days: 10, salaryPerDay: 22 },
  { name: 'Mirdin', surname: 'Agai', days: 20, salaryPerDay: 70 },
  { name: 'Bayish', surname: 'zzz', days: 16, salaryPerDay: 33 },
  { name: 'Adilet', surname: 'Gazybekov', days: 11, salaryPerDay: 16 },
  { name: 'Aidana', surname: 'pppp', days: 5, salaryPerDay: 28 },
{ name: 'Ilim', surname: 'ttt', days: 12, salaryPerDay: 72 },
];
  return (
    <div>
      <Counter increment={increment} decriment={decriment} counter ={counter}  />
      <Paragraph handleList={handleList} inpList={inpList} />
      <Salary employees={employees}/>
    </div>
  )
}

export default App