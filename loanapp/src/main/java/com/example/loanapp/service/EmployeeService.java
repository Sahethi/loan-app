package com.example.loanapp.service;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import com.example.loanapp.model.DisplayLoans;
import com.example.loanapp.model.Employee;
import com.example.loanapp.repository.EmployeeCardRepository;
import com.example.loanapp.repository.EmployeeRepository;
import com.example.loanapp.repository.ItemRepository;
import com.example.loanapp.repository.LoanRepository;
import com.example.loanapp.repository.IssueRepository;
import com.example.loanapp.repository.LoginModelRepository;
import com.example.loanapp.model.Item;
import com.example.loanapp.model.Loan;
import com.example.loanapp.model.Issue;
import com.example.loanapp.model.DisplayUserItems;
import com.example.loanapp.model.LoginModel;

import java.sql.Date;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.ArrayList;
import java.util.Optional;

@Service
public class EmployeeService {
	@Autowired
	EmployeeRepository emprepo;
	
	@Autowired
	EmployeeCardRepository empCardRepo;
	
	@Autowired
	private ItemRepository itemRepo;
	
	@Autowired
	private LoanRepository loanRepo;
	
	@Autowired
	private LoginModelRepository loginRepo;
	
	@Autowired
	IssueRepository issuerepo;
	
	//save employee
	public Employee saveEmployee(Employee u) {
		Employee obj = emprepo.save(u);
		return obj;
	}

	@Transactional
	public String savedata(LoanModel u) {
		String result="";
		Employee emp=null;
		Optional<Employee>opt=emprepo.findById(u.getEmployee_id());
		if(opt.isPresent()) emp=opt.get();
		String loanid=loanRepo.findbylt(u.getItem_category());
		Loan loan=loanRepo.findById(loanid).get();
		EmployeeCard ecd=new EmployeeCard();
		LocalDateTime idVal = LocalDateTime.now();
		String idVal2 = idVal.toString();
		idVal2 = idVal2.replace(":","");
		idVal2 = idVal2.replace("-","");
		idVal2 = idVal2.replace("T","");
		idVal2 = idVal2.replace(".","");
		LocalDate dt=LocalDate.now();
		ecd.setCard_issue_date(dt);
		ecd.setCard_id(idVal2);
		ecd.setEmployee(emp);
		ecd.setLoan(loan);
		EmployeeCard ec=empCardRepo.save(ecd);
		System.out.println(dt);
		String itm=itemRepo.findbymake(u.getItem_category(),u.getItem_make());
		Item ita=itemRepo.findById(itm).get();
		Issue is=new Issue();
		is.setIssue_id(idVal2);
		is.setEmployee(emp);
		is.setItem(ita);
		is.setIssue_date(dt);
		is.setReturn_date(dt);
		Issue isi=issueRepo.save(is);
		
		
		return ita+"hello"+itemRepo.findById(itm).get();
	}
	
	
	@Autowired
	private ItemRepository itemRepo;
	
	// save item
	public Item saveItem(Item i) {
		Item obj = itemRepo.save(i);
		return obj;
	}
		
	// save loan
	public Loan saveLoan(Loan l) {
		Loan obj = loanRepo.save(l);
		return obj;
	}
	
	// save login
	public LoginModel saveLogin(LoginModel log) {
		LoginModel obj = loginRepo.save(log);
		return obj;
	}
	
	// check login
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
	
	// get employee
	public Optional<Employee> getEmployee(String username) {
		return emprepo.findById(username);
	}
	
	// get all loans
	public List<Loan> getAllLoanTypes() {
		return loanRepo.findAll();
	}
	
	//get items
	public List<Item> getItems(){
		return itemRepo.findAll();
	}
	
	
	//get all items purchased by user u
	
	public List<DisplayUserItems> getEmpItems(String empId){
		List<Item> i = issuerepo.getEmpItems(empId);
		List<String> issue_ids = issuerepo.getEmpIssues(empId);
		List<DisplayUserItems> ret=new ArrayList<DisplayUserItems>();
		for(int l=0;l<i.size();l++) {
			ret.add(new DisplayUserItems(issue_ids.get(l),i.get(l)));
		}
		return ret;
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
	
	public Loan fetchLoan(String loanID) {
		return loanRepo.findById(loanID).get();
	}
	
	public void deleteLoan(String loanID) {
		loanRepo.deleteById(loanID);
	}
}
