package com.example.loanapp.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class AdminUser {
	@Id
	@Column(unique=true,nullable=false)
	private String username;
	@Column(nullable=false)
	private String password;
	
	
	public AdminUser() {
		
	} 
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
}
