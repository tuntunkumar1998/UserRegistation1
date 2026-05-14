
import axios from 'axios';

const EMPLOYEE_API_BASE_URL= "http://localhost:7070"
class EmpService{
    saveEmployee(employee){
       return axios.post(EMPLOYEE_API_BASE_URL+"/createEmp" ,employee)
    }

    getEmp(){
        return axios.get(EMPLOYEE_API_BASE_URL+"/GetAll")
    }

   deleteById(id){
    return axios.delete(EMPLOYEE_API_BASE_URL + "/deleteEmp/" + id);
   }

    UpdateEmp(employee , id){
        return axios.put(EMPLOYEE_API_BASE_URL+ "/employee/"+id , employee)
     }

     getEmployeeById(id){
        return axios.get(EMPLOYEE_API_BASE_URL+ "/GetEmp/" + id)
     }
}

export default new EmpService(); 