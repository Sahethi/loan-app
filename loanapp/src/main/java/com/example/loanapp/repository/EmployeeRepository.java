package com.example.loanapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.example.loanapp.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, String>{

//	@Query("SELECT distinct e FROM Employee e inner JOIN e.empCard c WHERE e.empid=?1 and "
//			+ "e.partment=?2")
//	List<Employee> findAllCard(String employeeid);
	String deleteById();

}