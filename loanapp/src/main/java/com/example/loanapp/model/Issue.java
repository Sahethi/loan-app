package com.example.loanapp.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.ManyToOne;
import java.sql.Date;
import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name="employee_issue_details")
public class Issue {
	@Id
	@Column(length=6, nullable=false, unique=true)
	@JsonBackReference
	private String issue_id;
	@ManyToOne
	private Employee employee;

	@JsonBackReference
	@ManyToOne
	private Item item;
	private Date issue_date;
	private Date return_date;
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
	public Date getIssue_date() {
		return issue_date;
	}
	public void setIssue_date(Date issue_date) {
		this.issue_date = issue_date;
	}
	public Date getReturn_date() {
		return return_date;
	}
	public void setReturn_date(Date return_date) {
		this.return_date = return_date;
	}
	
}
