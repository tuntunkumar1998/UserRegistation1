package com.tn.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tn.Entity.Employee;
import com.tn.repository.employee;

@Service
public class EmpService {

	
	@Autowired
	employee Emp;
	
	
	public String createEmp(Employee emp) {
		
		Emp.save(emp);
		return "create successfully";
		
	}
	
	public List<Employee> getAll(){
		
		return Emp.findAll();
	}
	
	public boolean deleteEmp(Long id) {
		
		Emp.deleteById(id);
		return true;
	}
	
	public String UpdateEmployee(Long id , Employee employee) {
		
		Employee newemp = Emp.findById(id).get();
		newemp.setName(employee.getName());
		newemp.setPhone(employee.getPhone());
		newemp.setEmail(employee.getEmail());
		
		Emp.save(newemp);
		return "Update Successfully";
	}

	 

	public Employee getEmployeeById(Long id) {
		 Employee emp = Emp.findById(id).get();
		return emp;
	}
	
	
	
}
