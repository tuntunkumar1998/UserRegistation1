package com.tn.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tn.Entity.Employee;

@Repository
public interface employee extends JpaRepository<Employee, Long> {

	String save(employee emp);

}
