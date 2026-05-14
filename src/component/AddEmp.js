import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EmpService from "../Service/EmpService";
import EmpList from './EmpList';

const AddEmp = () => {
   const navigate = useNavigate();
      const [employee , setemployee] = useState({
         id :"",
         name:"",
         phone:"",
         email:"",
   });
  const handleChange = (e) =>{
    const value = e.target.value;
    setemployee({...employee , [e.target.name]:value})
  }

  const saveEmployee =(e) =>{
    e.preventDefault();
    EmpService.saveEmployee(employee)
    .then((Response) =>{
        console.log("save" ,Response);
        navigate("/")

    })
    .catch((Error) =>{
        console.log(Error);
    })
  }

  const reset = (e) =>{
      e.preventDefault();
      setemployee({
        id :"",
        name:"",
        phone:"",
        email:"",
      });
  }
     


  return (
    <div className="max-w-xl mx-40 my-20 bg-slate-700 rounded px-8 py-4 shadow">
        <div className="text-4xl tracking-wider font-bold text-center py-4 px-8">
        <p>AddEmployee</p>
        </div>

        <div className="mx-10 my-2">
            <input
             type="text"
             name='name'
             value={employee.name}
             onChange={(e) => handleChange(e)}
             className="w-full py-2 my-4 text-slate-800" placeholder='Name'></input>

            <input 
            type="number" 
            name='phone'
            value={employee.phone}
            onChange={(e) => handleChange(e)}
            className="w-full py-2 my-4 text-slate-800" placeholder='Phone'></input>

            <input 
            type="email"
            name='email'
            value={employee.email}
            onChange={(e) => handleChange(e)}
            className="w-full py-2 my-4 text-slate-800" placeholder='Email'></input>

        </div>
        <div className="flex my-4 space-x-4 px-20"> 
            <button 
            onClick={saveEmployee}
            className="bg-green-400 hover:bg-green-700 py-2 px-6 rounded">Save</button>
            <button
            onClick={reset} 
            className="bg-blue-400 hover:bg-blue-700 py-2 px-6 rounded">Clear</button>
            <button onClick={()=> navigate("/")} className="bg-red-400 hover:bg-red-700 py-2 px-6 rounded">Cancel</button>
        </div>
    </div>
  )
}

export default AddEmp