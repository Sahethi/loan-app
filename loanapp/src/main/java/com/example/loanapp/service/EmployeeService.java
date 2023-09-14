package com.example.loanapp.service;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import com.example.loanapp.model.DisplayLoans;
import com.example.loanapp.model.Employee;
import com.example.loanapp.repository.EmployeeCardRepository;
import com.example.loanapp.repository.EmployeeRepository;
import com.example.loanapp.repository.ItemRepository;
import com.example.loanapp.repository.LoanRepository;
import com.example.loanapp.repository.LoginModelRepository;
import com.example.loanapp.model.Item;
import com.example.loanapp.model.Loan;
import com.example.loanapp.model.LoginModel;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {
	@Autowired
	EmployeeRepository emprepo;
	
	@Autowired
	EmployeeCardRepository empCardRepo;
	
	public Employee saveEmployee(Employee u) {
		Employee obj = emprepo.save(u);
		return obj;
	}
	
	@Autowired
	private ItemRepository itemRepo;
	
	public Item saveItem(Item i) {
		Item obj = itemRepo.save(i);
		return obj;
	}
	
	@Autowired
	private LoanRepository loanRepo;
	
	public Loan saveLoan(Loan l) {
		Loan obj = loanRepo.save(l);
		return obj;
	}
	
	@Autowired
	private LoginModelRepository loginRepo;
	
	public LoginModel saveLogin(LoginModel log) {
		LoginModel obj = loginRepo.save(log);
		return obj;
	}
	
	public String chkLogin(LoginModel u) {
		LoginModel user=null;
		String result = null;
		Optional<LoginModel> obj = loginRepo.findById(u.getUsername());
		if(obj.isPresent()) {
			user=obj.get();
		}
		if(user==null) {
			result="Invalid username";
		}
		else {
			if(u.getPassword().equals(user.getPassword())){
				//LOGIN SUCCESSFULL
				result=u.getUsername();
			}
			else {
				result="Incorrect username or password";
			}
		}
		return result;
	}

	public List<Loan> getAllLoanTypes() {
		return loanRepo.findAll();
	}
	
	//***
	//get all items purchased by user u 
	public Optional<Employee> getAllItems(String empId){
		return emprepo.findById(empId);
	}
	
	public List<DisplayLoans> getAllLoans(String empId) {
		// TODO Auto-generated method stub
		List<Loan> l = empCardRepo.getEmpLoans(empId);
		List<Date> d = empCardRepo.getEmpIssueDate(empId);
		List<DisplayLoans> dl= new ArrayList<DisplayLoans>();
		for(int i=0; i<l.size(); i++) {
			dl.add(new DisplayLoans(l.get(i), d.get(i)));
		}
		return dl;
	}
}
