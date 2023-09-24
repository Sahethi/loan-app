package com.example.loanapp.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Table;
import javax.persistence.ManyToOne;
import java.sql.Date;
import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name="employee_issue_details")
public class Issue {
	@Id
	@Column(length=6, nullable=false, unique=true)
	private String issue_id;
	
	@JsonBackReference(value="IssueEmp")
	@ManyToOne
	private Employee employee;
    
	@JsonBackReference(value="IssueItem")
	@ManyToOne
	@JoinColumn
	private Item item;
	private LocalDate issue_date;
	private LocalDate return_date;
	public String getIssue_id() {
		return issue_id;
	}
	public void setIssue_id(String issue_id) {
		this.issue_id = issue_id;
	}
	public Employee getEmployee() {
		return employee;
	}
	public void setEmployee(Employee employee) {
		this.employee = employee;
	}
	public Item getItem() {
		return item;
	}
	public void setItem(Item item) {
		this.item = item;
	}
	public LocalDate getIssue_date() {
		return issue_date;
	}
	public void setIssue_date(LocalDate issue_date) {
		this.issue_date = issue_date;
	}
	public LocalDate getReturn_date() {
		return return_date;
	}
	public void setReturn_date(LocalDate return_date) {
		this.return_date = return_date;
	}
	
}
