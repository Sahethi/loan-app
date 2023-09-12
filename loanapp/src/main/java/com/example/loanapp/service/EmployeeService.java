package com.example.loanapp.service;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.loanapp.model.Employee;
import com.example.loanapp.repository.EmployeeRepository;
import com.example.loanapp.repository.ItemRepository;
import com.example.loanapp.repository.LoanRepository;
import com.example.loanapp.repository.LoginModelRepository;
import com.example.loanapp.model.Item;
import com.example.loanapp.model.Loan;
import com.example.loanapp.model.LoginModel;
import java.util.Optional;

@Service
public class EmployeeService {
	@Autowired
	EmployeeRepository emprepo;
	
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
			System.out.println("jhhhghvvhj"+user);
		}
		if(user==null) {
			result="Invalid username";
		}
		else {
			if(u.getPassword().equals(user.getPassword())){
				result="Login successful";
			}
			else {
				result="Incorrect username or password";
			}
		}
		return result;
	}
}
