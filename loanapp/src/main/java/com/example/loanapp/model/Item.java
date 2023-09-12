package com.example.loanapp.model;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
@Table(name="items_master")
public class Item {
	@Id
	@Column(length=6, nullable=false, unique=true)
	private String item_id;
	@Column(length=25)
	private String item_description;
	private char issue_status;
	@Column(length=25)
	private String item_make;
	@Column(length=20)
	private String item_category;
	@Column(length=6)
	private int item_valuation;
	@OneToMany(cascade=CascadeType.ALL)
	private List<Issue> issue;
	public String getItem_id() {
		return item_id;
	}
	public void setItem_id(String item_id) {
		this.item_id = item_id;
	}
	public String getItem_description() {
		return item_description;
	}
	public void setItem_description(String item_description) {
		this.item_description = item_description;
	}
	public char getIssue_status() {
		return issue_status;
	}
	public void setIssue_status(char issue_status) {
		this.issue_status = issue_status;
	}
	public String getItem_make() {
		return item_make;
	}
	public void setItem_make(String item_make) {
		this.item_make = item_make;
	}
	public String getItem_category() {
		return item_category;
	}
	public void setItem_category(String item_category) {
		this.item_category = item_category;
	}
	public int getItem_valuation() {
		return item_valuation;
	}
	public void setItem_valuation(int item_valuation) {
		this.item_valuation = item_valuation;
	}
	public List<Issue> getIssue() {
		return issue;
	}
	public void setIssue(List<Issue> issue) {
		this.issue = issue;
	}
	
}
