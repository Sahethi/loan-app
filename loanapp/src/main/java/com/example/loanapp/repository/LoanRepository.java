package com.example.loanapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.example.loanapp.model.Loan;

@Repository
public interface LoanRepository extends JpaRepository<Loan, String>{
	@Query("SELECT l.loan_id FROM Loan l WHERE l.loan_type=?1")
	public String findbylt(String loan_type);

}