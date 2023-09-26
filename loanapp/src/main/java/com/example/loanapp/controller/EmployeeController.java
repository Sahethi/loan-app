package com.example.loanapp.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.validation.Valid;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.example.loanapp.exception.NoDataFoundException;
import com.example.loanapp.exception.ResourceNotFoundException;
import com.example.loanapp.model.AdminUser;
import com.example.loanapp.model.DisplayLoans;
//import com.example.loan.management.userin.UserInfo;
import com.example.loanapp.model.Employee;
import com.example.loanapp.model.Issue;
import com.example.loanapp.service.EmployeeService;
import com.example.loanapp.model.Item;
import com.example.loanapp.model.Loan;
import com.example.loanapp.model.LoanModel;
import com.example.loanapp.model.LoginModel;
import com.example.loanapp.model.adminitems.AdminItems;
import com.example.loanapp.model.DisplayUserItems;
@RestController
@CrossOrigin("http://localhost:3000")
public class EmployeeController {
		@Autowired
		EmployeeService empService;
		
		@GetMapping("/testing")
		public String test() {
			return "Welcome to loan management app";
		}
		
		@GetMapping("/fetchAllLoanTypes")
		public List<Loan> getAllLoanTypes() throws NoDataFoundException{
			return empService.getAllLoanTypes();
		}
		
//		save Employee
		@PostMapping("/saveEmployee")		
		public ResponseEntity<Employee> saveEmployee(@Valid @RequestBody Employee u) {

			return new ResponseEntity<Employee>(empService.saveEmployee(u),HttpStatus.CREATED);
		}		
		
		// save item
		@PostMapping("/saveItem")
		public Item saveItem(@RequestBody Item i) {
			Item obj = empService.saveItem(i);
			return obj;
		}
		
		//save loans
		@PostMapping("/saveLoan")
		public Loan saveLoan(@RequestBody Loan l) {
			Loan obj = empService.saveLoan(l);
			return obj; 
		}
		
		// save login
		@PostMapping("/saveLogin")
		public LoginModel saveLogin(@RequestBody LoginModel log) {
			LoginModel obj = empService.saveLogin(log);
			return obj;
		}
		
		//save user
		public ResponseEntity<LoginModel>saveUser(@Valid @RequestBody LoginModel u) {

			return new ResponseEntity<LoginModel>(empService.saveLogin(u),HttpStatus.CREATED);}		
		
		@PostMapping("/loginAuth")
		public String validateUser(@RequestBody LoginModel u) {
			return empService.chkLogin(u);
		}
		@PostMapping("/adminItems")
		public AdminItems adminsave(@RequestBody AdminItems u) {
			return empService.adminsave(u);
		}
		
		@GetMapping("/employees/{empId}")
		public Optional<Employee> getEmp(@PathVariable("empId") String empId){
			return empService.getEmployee(empId);
		}
		
		//item details page
		@GetMapping("/items/{empId}") 
		public ResponseEntity<Object> getEmpItems(@PathVariable("empId") String empId){
			List<DisplayUserItems> i = empService.getEmpItems(empId);
			if(i == null) 
				return new ResponseEntity<>("Invalid Issue Id",HttpStatus.NOT_FOUND);
			else
				return new ResponseEntity<>(i,HttpStatus.OK);
		}
		
		//items
		@GetMapping("/items")
		public ResponseEntity<Object> getItems() throws NoDataFoundException{
			List<Item> i = empService.getItems();
			if(i == null) 
				return new ResponseEntity<>("Invalid Issue Id",HttpStatus.NOT_FOUND);
			else
				return new ResponseEntity<>(i,HttpStatus.OK);
		}
		
		//loan details page
		@GetMapping("/loans/{empId}")
		public List<DisplayLoans> getEmpLoans(@PathVariable("empId") String empId) throws NoDataFoundException{
			return empService.getAllLoans(empId);
		}

		@PostMapping("/forapplyloans")
		public String savedata(@RequestBody LoanModel u)
		{
		     return empService.savedata(u);
			
		}

		@GetMapping("/displayAdminItems")
		public List<AdminItems>getAdminItems() throws NoDataFoundException{
			List<AdminItems>i = empService.getAdminItems();
            return i;
		}
		
		@GetMapping("/fetchitems/{item_id}")
		public Item fetchitems(@PathVariable("item_id") String item_id){
			return empService.fetchitems(item_id);
		}
		@PutMapping("/updateItem/{item_id}")
		public ResponseEntity<Item> updateLoan(@PathVariable("item_id") String item_id, @Valid @RequestBody Item l){
			Item itemObj = empService.fetchitems(item_id);
			if(itemObj != null) {
				itemObj.setItem_id(l.getItem_id());
				itemObj.setItem_category(l.getItem_category());
				itemObj.setItem_description(l.getItem_description());
				itemObj.setIssue_status(l.getIssue_status());
				itemObj.setItem_make(l.getItem_make());
				itemObj.setItem_valuation(l.getItem_valuation());}
				return new ResponseEntity<>(empService.saveItem(itemObj),HttpStatus.OK);
		}
		
		@GetMapping("/fetchLoan/{loanID}")
		public Loan fetchLoan(@PathVariable("loanID") String loanID){
			return empService.fetchLoan(loanID);
		}
		
		@PutMapping("/updateLoan/{loanID}")
		public ResponseEntity<Loan> updateLoan(@PathVariable("loanID") String loan_id, @Valid @RequestBody Loan l){
			Loan loanObj = empService.fetchLoan(loan_id);
			if(loanObj != null) {
				loanObj.setLoan_type(l.getLoan_type());
				loanObj.setDuration_in_years(l.getDuration_in_years());
				return new ResponseEntity<>(empService.saveLoan(loanObj),HttpStatus.OK);

			}
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

		@GetMapping("/deleteitem/{item_id}")
		public void deleteitem(@PathVariable("item_id") String item_id) {
			empService.deleteitem(item_id);
		}

		@GetMapping("/deleteLoan/{loanID}")
		public void deleteLoan(@PathVariable("loanID") String loan_id) {
			empService.deleteLoan(loan_id);
		}
		
		@GetMapping("/fetchAllEmployees")
		public List<Employee> fetchAllEmployees() throws NoDataFoundException{
			return empService.fetchAllEmployees();
		}
		
		@PutMapping("/updateEmployee/{employeeID}")
		public ResponseEntity<Employee> updateEmployee(@PathVariable("employeeID") String emp_id, @Valid @RequestBody Employee e) throws ResourceNotFoundException{
			Employee empObj = empService.fetchEmployee(emp_id);
			if(empObj != null) {
				empObj.setFirst_name(e.getFirst_name());
				empObj.setLast_name(e.getLast_name());
				empObj.setEmail_id(e.getEmail_id());
				empObj.setPassword(e.getPassword());
				empObj.setHome_add(e.getHome_add());
				empObj.setDob(e.getDob());
				empObj.setGender(e.getGender());
				empObj.setPhone_num(e.getPhone_num());
				empObj.setDesignation(e.getDesignation());
				empObj.setDept(e.getDept());
				empObj.setDoj(e.getDoj());
				return new ResponseEntity<>(empService.saveEmployee(empObj),HttpStatus.OK);
			}
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);	
		}
		
		@GetMapping("/deleteEmployee/{empID}")
		public void deleteEmployee(@PathVariable("empID") String emp_id) {
			empService.deleteEmployee(emp_id);
		}

		

}

