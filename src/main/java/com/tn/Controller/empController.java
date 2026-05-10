package com.tn.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.tn.Entity.Employee;
import com.tn.service.EmpService;

@CrossOrigin("http://localhost:3000/")
@RestController
public class empController {

	
	@Autowired
	EmpService empservice;
	
	
	@PostMapping("createEmp")
	public String createEmp(@RequestBody Employee emp) {
		return empservice.createEmp(emp);
	}
	
	@GetMapping("GetAll")
	public List<Employee> GetAll(){
		return empservice.getAll();
	}
	
	@GetMapping("GetEmp/{id}")
	public Employee GetEmployeeById(@PathVariable Long id){
			 return  empservice.getEmployeeById(id);
		  
	}
	
	@DeleteMapping("deleteEmp/{id}")
	public String DeleteEmp(@PathVariable Long id) {
		
		if(empservice.deleteEmp(id))
		   return "Delete Successfully";
		
		return "Not Found";
		}
	
	
	@PutMapping("employee/{id}")
	public String UpdateEmp(@PathVariable Long id , @RequestBody Employee employee) {
		
		return empservice.UpdateEmployee(id, employee);
	}
	
	
	
}
