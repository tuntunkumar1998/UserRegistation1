import React, { useState , useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import EmpService from "../Service/EmpService";
import EmpList from './EmpList';

const UpdateEmployee = () => {
    const { id } = useParams();
   const navigate = useNavigate();
      const [employee , setEmployee] = useState({
         id :id,
         name:"",
         phone:"",
         email:"",
   });
  const handleChange = (e) =>{
    const value = e.target.value;
    setEmployee({...employee , [e.target.name]:value})
  }
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await EmpService.getEmployeeById(id);
         // console.log(response.data);
          setEmployee(response.data || {});
        } catch (error) {
          console.log(error);
        }
      };
        fetchData();
    }, [id]);
  

  const updateEmployee =(e) =>{
    e.preventDefault();
    EmpService.UpdateEmp(employee,id)
    .then((response) =>{
        console.log("Updated" ,response);
        navigate("/")

    })
    .catch((error) =>{
        console.log(error);
    })
  }

  return (
    <div className="max-w-xl mx-40 my-20 bg-tranceperante-700 rounded px-8 py-4 shadow">
        <div className="text-4xl tracking-wider font-bold text-center py-4 px-8">
        <p>Update Employee</p>
        </div>

        <div className="mx-10 my-2">
            <input
             type="text"
             name='name'
             value={employee.name}
             onChange={(e) => handleChange(e)}
             className="w-full py-2 my-4 text-slate-800 bg-yellow-100"  placeholder='Name'></input>

            <input 
            type="number" 
            name='phone'
            value={employee.phone}
            onChange={(e) => handleChange(e)}
            className="w-full py-2 my-4 text-slate-800 bg-yellow-100" placeholder='Phone'></input>

            <input 
            type="email"
            name='email'
            value={employee.email}
            onChange={(e) => handleChange(e)}
            className="w-full py-2 my-4 text-slate-800 bg-yellow-100" placeholder='Email'></input>

        </div>
        <div className="flex my-3 space-x-4 px-20"> 
            <button 
            onClick={updateEmployee}
            className="bg-green-400 hover:bg-green-700 py-2 px-6 rounded">Update</button>
            <button onClick={()=> navigate("/")} className="bg-red-400 hover:bg-red-700 py-2 px-6 rounded">Cancel</button>
        </div>
    </div>
  )
}

export default UpdateEmployee