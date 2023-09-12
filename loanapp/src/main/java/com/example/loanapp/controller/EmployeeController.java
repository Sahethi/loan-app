package com.example.loanapp.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

//import com.example.loan.management.userin.UserInfo;
import com.example.loanapp.model.Employee;
import com.example.loanapp.service.EmployeeService;
import com.example.loanapp.model.Item;
import com.example.loanapp.model.Loan;
import com.example.loanapp.model.LoginModel;
@RestController
@CrossOrigin("http://localhost:3000")
public class EmployeeController {
		@Autowired
		EmployeeService empService;
		
		@GetMapping("/testing")
		public String test() {
			return "Welcome to loan management app";
		}

		@PostMapping("/saveEmployee")
		/*public Employee saveEmployee(@RequestBody Employee u) {
			Employee obj = empService.saveEmployee(u);
			return obj;
		}*/
		public ResponseEntity<Employee> saveEmployee(@Valid @RequestBody Employee u) {
		    //UserInfo obj=userservice.saveUser(u);
			//return "useful";
			return new ResponseEntity<Employee>(empService.saveEmployee(u),HttpStatus.CREATED);}		
		

		@PostMapping("/saveItem")
		public Item saveItem(@RequestBody Item i) {
			Item obj = empService.saveItem(i);
			return obj;
		}

		@PostMapping("/saveLoan")
		public Loan saveLoan(@RequestBody Loan l) {
			Loan obj = empService.saveLoan(l);
			return obj;
		}
		
		@PostMapping("/saveLogin")
		/*public LoginModel saveLogin(@RequestBody LoginModel log) {
			LoginModel obj = empService.saveLogin(log);
			return obj;
		}*/
		public ResponseEntity<LoginModel>saveUser(@Valid @RequestBody LoginModel u) {
		    //UserInfo obj=userservice.saveUser(u);
			//return "useful";
			return new ResponseEntity<LoginModel>(empService.saveLogin(u),HttpStatus.CREATED);}		
		@PostMapping("/loginAuth")
		public String validateUser(@RequestBody LoginModel u) {
			return empService.chkLogin(u);
		}
}

