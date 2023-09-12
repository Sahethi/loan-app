package com.example.loanapp.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.ManyToOne;
import java.sql.Date;

@Entity
@Table(name="employee_card_details")
public class EmployeeCard {	
	@Id
	@Column(length=6, nullable=false, unique=true)
	private String card_id; 
	@ManyToOne
	private Employee employee;

	@ManyToOne
	private Loan loan;
	
	private Date card_issue_date;

	public String getCard_id() {
		return card_id;
	}

	public void setCard_id(String card_id) {
		this.card_id = card_id;
	}

	public Employee getEmployee() {
		return employee;
	}

	public void setEmployee(Employee employee) {
		this.employee = employee;
	}

	public Loan getLoan() {
		return loan;
	}

	public void setLoan(Loan loan) {
		this.loan = loan;
	}

	public Date getCard_issue_date() {
		return card_issue_date;
	}

	public void setCard_issue_date(Date card_issue_date) {
		this.card_issue_date = card_issue_date;
	}
	
}
