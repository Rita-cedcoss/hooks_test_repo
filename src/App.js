import logo from './logo.svg';
import './App.css';
import Copmonet1 from './test/Copmonet1';
import './test/Component.css'
import { Route, Routes, useNavigate } from 'react-router-dom';
import Create from './test/Create';
import Component2 from './test/Component2';
import { useRef, useState } from 'react';
function App() {
  const title=useRef();
  const description=useRef();
  const navigate=useNavigate();
  const [arrCreate,setArrcreate]=useState([]);
  const create=()=>{
    alert();
    let text=title.current.value;
    let desp=description.current.value;
    let obj={title:text,description:desp};
    arrCreate.push(obj);
    setArrcreate(arrCreate);
    description.current.value="";
    title.current.value="";
    console.log(arrCreate);
  } 
  const Delete=(e)=>
  {  
    let ind=e.target.getAttribute("index");
    console.log(ind);
    arrCreate.splice(ind,1);
    setArrcreate([...arrCreate]); 
  }
 const Edit=(e)=>
 {
  let ind=e.target.getAttribute("index");
  let titl=title.current.value;
  document.getElementById("title").value=arrCreate[ind].title;
  
  console.log(titl,ind);
  navigate("/create");
 }
  return (
   <>
   <Copmonet1></Copmonet1>
   <Routes>
    <Route path="/" element={<Component2 arr={arrCreate} delete={Delete} edit={Edit}></Component2>}></Route>
    <Route path="/create" element={<Create create={create} title={title} description={description}></Create>}></Route>
   </Routes>
  
   </>
  );
}

export default App;
