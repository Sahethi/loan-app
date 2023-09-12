package com.example.loanapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.loanapp.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, String>{

}
