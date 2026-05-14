import React, { useEffect , useState} from 'react'
import {useNavigate } from "react-router-dom";
import EmpService from '../Service/EmpService';

const EmpList = () => {
 const navigate = useNavigate();
 const [loading ,setLoading] = useState(true)
 const [employees , setEmployees] = useState([])

 useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await EmpService.getEmp();
     // console.log(response.data);
      setEmployees(response.data || []);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
    fetchData();
}, []);

const editEmployee = (e ,id) => {
   e.preventDefault();
  navigate(`/editEmployee/${id}`)
};

const deleteEmployee = (e,id) =>{
 e.preventDefault();
 if (!window.confirm("Are you sure you want to delete?")) return;
     EmpService.deleteById(id)
     .then(() =>{
      if(employees){
          setEmployees((prevElement) =>{
            return prevElement.filter((employee) => employee.id !==id);
          })
        }
      })
    };
  return (
    <div className="container mx-auto my-2">
    <div>
      <button
      onClick={() => navigate("/AddEmp")}
       className="bg-blue-700 hover:bg-slate-600 my-10 font-semibold px-20 py-2 rounded">Add Employee</button> 
    </div>
    <div>
      <table className="table-shadow"> 
        <thead className="bg-blue-700">
          <th className="px-6 py-3 uppercase tracking-wide">Name</th>
          <th className="px-6 py-3 uppercase tracking-wide">Phone</th>
          <th className="px-6 py-3 uppercase tracking-wide">Email</th>
          <th className="px-6 py-3 uppercase tracking-wide">Action</th>
        </thead>
         {!loading && (  
        <tbody>
             {employees.map((employee) => (  
            <tr key = {employee.id} className="hover:bg-white hover:text-black">
             <td className="text-left px-6 py-4 whitespace-nowrap">{employee.name}</td>
             <td className="text-left px-6 py-4 whitespace-nowrap">{employee.phone}</td>
             <td className="text-left px-6 py-4 whitespace-nowrap">{employee.email}</td>
             <td className="text-left px-6 py-4 whitespace-nowrap">
              <a
               onClick={(e,id) => editEmployee(e,employee.id)}
              className='hover:text-green-400 hover:cursor-pointer px-3'>Edit</a>
              <a
              onClick={(e,) => deleteEmployee(e,employee.id)}
              className='hover:text-red-500 hover:cursor-pointer px-3'>Delete</a>
             </td>
          </tr>
           ))}
        </tbody>
         )} 
      </table>
    </div>
    </div>
  )
}

export default EmpList;