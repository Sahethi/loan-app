package com.example.loanapp.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;
import javax.persistence.OneToMany;
import javax.persistence.CascadeType;
import java.util.List;

@Entity
@Table(name="loan_card_master")
public class Loan {
	@Id
	@Column(length=6, nullable=false, unique=true)
	private String loan_id;
	
	@Column(length=15)
	private String loan_type;
	
	@Column(length=2)
	private int duration_in_years;
	
	@OneToMany(cascade=CascadeType.ALL)
	private List<EmployeeCard> employeecard;
	public String getLoan_id() {
		return loan_id;
	}
	public void setLoan_id(String loan_id) {
		this.loan_id = loan_id;
	}
	public String getLoan_type() {
		return loan_type;
	}
	public void setLoan_type(String loan_type) {
		this.loan_type = loan_type;
	}
	public int getDuration_in_years() {
		return duration_in_years;
	}
	public void setDuration_in_years(int duration_in_years) {
		this.duration_in_years = duration_in_years;
	}
	public List<EmployeeCard> getEmployeecard() {
		return employeecard;
	}
	public void setEmployeecard(List<EmployeeCard> employeecard) {
		this.employeecard = employeecard;
	}

}
