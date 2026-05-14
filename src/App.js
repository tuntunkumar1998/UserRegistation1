
import navbar from './component/navbar';
import './App.css';
import EmpList from './component/EmpList';
import AddEmp from './component/AddEmp';
import UpdateEmployee  from './component/UpdateEmployee';
import { BrowserRouter, Route, Routes, } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter> 
         <navbar/>

       <Routes>
         <Route endex element={ <EmpList/> } /> 
            <Route path="/" element={ <EmpList/> } /> 
            <Route path="/AddEmp" element={ <AddEmp/> } />
            <Route path='/editEmployee/:id' element = {<UpdateEmployee/>}/>
      </Routes>
    </BrowserRouter> 
    </>
  );
}


export default App;
