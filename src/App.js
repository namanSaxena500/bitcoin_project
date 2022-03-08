import logo from './logo.svg';
import './App.css';
import Search from './Search';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Showdata from './Showdata';

function App() {
  const[search,setSearch]=useState("");
  const[dataof,setDataof]=useState(false)
  const setSearchvalue = (e) =>{
    setSearch(e.target.value);

}
 
  const Submit = (e) =>{
    alert("hi")

    e.preventDefault();
setDataof(true)
  
  }
  return (
  <>
  <form onSubmit={Submit}>
   <div className="row col-md-4 col-sm-6 p-3 m-auto">
        <input type="text" className="form-control col-9" placeholder="Search anything" onChange={setSearchvalue}/>
        <button type="submit" className="btn btn-primary col-3" >Submit</button>

    </div>
    </form><br/>     
   {    dataof == true ?
  <Search dataof={search}/> : ""
  }
  <Routes>
  <Route exact path="/" element={<Search/>}/>
  <Route exact path="/moredata/:bitid" element={<Showdata/>}/>
  </Routes>
  
  </>
  );
}

export default App;
