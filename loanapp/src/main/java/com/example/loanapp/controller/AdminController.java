package com.example.loanapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.loanapp.model.AdminUser;
import com.example.loanapp.model.LoginModel;
import com.example.loanapp.service.AdminService;

@CrossOrigin("http://localhost:3000")
@RestController
public class AdminController {
	
	@Autowired 
	AdminService adminService;
	
//	admin Get
	@PostMapping("/adminlogin")
	public String getAdmin(@RequestBody AdminUser a ) {
		return adminService.getAdmin(a);
}
	

}