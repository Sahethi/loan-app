package com.example.loanapp.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Length;

@Entity
public class LoginModel {
	@Id
	@Column(length=6, nullable=false, unique=true)
	@NotNull(message="Username cannot be left blank")
	@Length(min=6,max=10,message="Username must contain 6-10 characters")
	private String username;
	@Column(nullable=false)
	@NotNull(message="Enter your password!")
	private String password;
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
