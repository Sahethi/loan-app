package com.example.loanapp.repository;

import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.loanapp.model.EmployeeCard;
import com.example.loanapp.model.Loan;

//EmployeeRepo is for fetching details from employee card and string mentioned the primary key
public interface EmployeeCardRepository extends JpaRepository <EmployeeCard, String>{
	@Query("SELECT l.loan from EmployeeCard l WHERE l.employee.employee_id =?1")
	public List<Loan> getEmpLoans(String empid);
	
	@Query("SELECT e.card_issue_date from EmployeeCard e WHERE e.employee.employee_id=?1")
	public List<Date> getEmpIssueDate(String empid);
}
