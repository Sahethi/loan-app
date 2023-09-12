package com.example.loanapp.model;
import java.sql.Date;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;
import javax.persistence.OneToMany;
import javax.persistence.CascadeType;
import java.util.List;

@Entity
@Table(name="employee_master")
public class Employee {
	@Id
	@Column(length=6, nullable=false, unique=true)
	private String employee_id;
	@Column(length=20)
	private String employee_name;
	@Column(length=25)
	private String designation;
	@Column(length=25)
	private String department;
	private char gender;
	private Date date_of_birth;
	private Date date_of_joining;
	
	@OneToMany(cascade=CascadeType.ALL)
	private List<EmployeeCard> EmployeeCard;

	@OneToMany(cascade=CascadeType.ALL)
	private List<Issue> issue;

	public String getEmployee_id() {
		return employee_id;
	}

	public void setEmployee_id(String employee_id) {
		this.employee_id = employee_id;
	}

	public String getEmployee_name() {
		return employee_name;
	}

	public void setEmployee_name(String employee_name) {
		this.employee_name = employee_name;
	}

	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	public char getGender() {
		return gender;
	}

	public void setGender(char gender) {
		this.gender = gender;
	}

	public Date getDate_of_birth() {
		return date_of_birth;
	}

	public void setDate_of_birth(Date date_of_birth) {
		this.date_of_birth = date_of_birth;
	}

	public Date getDate_of_joining() {
		return date_of_joining;
	}

	public void setDate_of_joining(Date date_of_joining) {
		this.date_of_joining = date_of_joining;
	}

	public List<EmployeeCard> getEmployeeCard() {
		return EmployeeCard;
	}

	public void setEmployeeCard(List<EmployeeCard> employeeCard) {
		EmployeeCard = employeeCard;
	}

	public List<Issue> getIssue() {
		return issue;
	}

	public void setIssue(List<Issue> issue) {
		this.issue = issue;
	}
	
}
