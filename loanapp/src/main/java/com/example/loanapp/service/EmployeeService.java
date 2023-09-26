package com.example.loanapp.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;

import com.example.loanapp.exception.NoDataFoundException;
import com.example.loanapp.exception.ResourceNotFoundException;
import com.example.loanapp.model.DisplayLoans;
import com.example.loanapp.model.Employee;
import com.example.loanapp.model.EmployeeCard;
import com.example.loanapp.repository.EmployeeCardRepository;
import com.example.loanapp.repository.EmployeeRepository;
import com.example.loanapp.repository.ItemRepository;
import com.example.loanapp.repository.LoanRepository;
import com.example.loanapp.repository.IssueRepository;
import com.example.loanapp.repository.LoginModelRepository;
import com.example.loanapp.repository.aditemrepo.AditemRepo;
import com.example.loanapp.model.Item;
import com.example.loanapp.model.Loan;
import com.example.loanapp.model.LoanModel;
import com.example.loanapp.model.Issue;
import com.example.loanapp.model.DisplayUserItems;
import com.example.loanapp.model.LoginModel;
import com.example.loanapp.model.adminitems.AdminItems;

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
	EmployeeRepository empRepo;
	
	@Autowired
	EmployeeCardRepository empCardRepo;
	
	@Autowired
	private ItemRepository itemRepo;
	
	@Autowired
	private LoginModelRepository loginRepo;
	
	@Autowired
	IssueRepository issuerepo;
	
	//save employee
	public Employee saveEmployee(Employee u) {
		Employee obj = empRepo.save(u);
		return obj;
	}

	@Transactional
	public String savedata(LoanModel u) throws ResourceNotFoundException{
		
		Employee emp = null;
		Optional<Employee> opt = empRepo.findById(u.getEmployee_id());
	 
		if(opt == null) 
			throw new ResourceNotFoundException("Resource Not Found");
		else {
			if(opt.isPresent()) 
				emp=opt.get();
			
			String loanid=loanRepo.findbylt(u.getItem_category());
			Loan loan=loanRepo.findById(loanid).get();
			
			EmployeeCard ecd = new EmployeeCard();
			LocalDateTime idVal = LocalDateTime.now();
			String idVal2 = idVal.toString();
			
			idVal2 = idVal2.replace(":","").replace("-","").replace("T","").replace(".","");
			
			LocalDate localDate = LocalDate.now();
			
			ecd.setCard_issue_date(localDate);
			ecd.setCard_id(idVal2);
			ecd.setEmployee(emp);
			ecd.setLoan(loan);
			
			EmployeeCard ec = empCardRepo.save(ecd);
			
			System.out.println(localDate);
			
			String itm=itemRepo.findbymake(u.getItem_category(),u.getItem_make());
			Item ita=itemRepo.findById(itm).get();
			
			Issue is = new Issue();
			is.setIssue_id(idVal2);
			is.setEmployee(emp);
			is.setItem(ita);
			is.setIssue_date(localDate);
			is.setReturn_date(localDate);
			
			Issue isi = issuerepo.save(is);

			return ita+"hello"+itemRepo.findById(itm).get();
		}
		
	}
	
	@Autowired
	private AditemRepo aditemRepo;
	
	// save item
	public Item saveItem(Item i) {
		Item obj = itemRepo.save(i);
		return obj;
	}

	public AdminItems adminsave(AdminItems i) {
		AdminItems obj = aditemRepo.save(i);
		return obj;
	}
	
	@Autowired
	private LoanRepository loanRepo;
		
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
	public String chkLogin(LoginModel u) throws ResourceNotFoundException{
		LoginModel user=null;
		String result = null;
		Optional<LoginModel> obj = loginRepo.findById(u.getUsername());
		if(obj==null)
			throw new ResourceNotFoundException("Resource Not Found");
		else {
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
	}
	
	// get employee
	public Optional<Employee> getEmployee(String username) throws ResourceNotFoundException {
		Optional<Employee> currentEmployee = empRepo.findById(username);
		if(currentEmployee == null)
			throw new ResourceNotFoundException("Resource Not Found");
		else
			return currentEmployee;
	}
	
	// get all loans
	public List<Loan> getAllLoanTypes() throws NoDataFoundException{
		List<Loan> loanList = new ArrayList<>();
		loanList = loanRepo.findAll();

		if(loanList.size() == 0)
			throw  new NoDataFoundException("No Data Found");
		else
			return loanList;
	}
	
	//get items
	public List<Item> getItems() throws NoDataFoundException{
		List<Item> itemList = new ArrayList<>();
		itemList = itemRepo.findAll();
		if(itemList.size() == 0)
			throw new NoDataFoundException("No Data Found");
		else
			return itemList;
	}
	
	public List<AdminItems> getAdminItems() throws NoDataFoundException{
	    List<AdminItems> adminItemsList = new ArrayList<>();
	    adminItemsList = aditemRepo.findAll();
		if(adminItemsList.size() == 0)
			throw new NoDataFoundException("No Data Found");
		else
			return adminItemsList;
	}
	
	public Item fetchitems(String item_id) throws ResourceNotFoundException{
		Item currentItem = itemRepo.findById(item_id).get();
		
		if(currentItem == null)
			throw new ResourceNotFoundException("Resource Not Found");
		else 
			return currentItem;
	}
	
	public void deleteitem(String item_id) {
		itemRepo.deleteById(item_id);
	}
	
	//get all items purchased by user u
	public List<DisplayUserItems> getEmpItems(String empId) throws NoDataFoundException{
		
		List<Item> i = issuerepo.getEmpItems(empId);
		List<String> issue_ids = issuerepo.getEmpIssues(empId);
		List<DisplayUserItems> ret=new ArrayList<DisplayUserItems>();
		
		for(int l=0;l<i.size();l++) {
			ret.add(new DisplayUserItems(issue_ids.get(l),i.get(l)));
		}
		
		if(ret.size() == 0)
			throw new NoDataFoundException("No Data Found");
		else
			return ret;
	}
	
	public List<DisplayLoans> getAllLoans(String empId) throws NoDataFoundException{
		List<Loan> l = empCardRepo.getEmpLoans(empId);
		List<LocalDate> d = empCardRepo.getEmpIssueDate(empId);
		List<DisplayLoans> dl= new ArrayList<DisplayLoans>();
		
		for(int i=0; i<l.size(); i++) {
			dl.add(new DisplayLoans(l.get(i), d.get(i)));
		}
		
		if(dl.size() == 0)
			throw new NoDataFoundException("No Data Found");
		else
			return dl;
	}
	
	public Loan fetchLoan(String loanID) throws ResourceNotFoundException{
		Loan currentLoan = loanRepo.findById(loanID).get();
		
		if(currentLoan == null)
			throw new ResourceNotFoundException("Resource Not Found");
		else
			return currentLoan;
	}
	
	public void deleteLoan(String loanID) {
		loanRepo.deleteById(loanID);
	}
	
	public List<Employee> fetchAllEmployees() throws NoDataFoundException{
		List<Employee> employeeList = new ArrayList<>();
		employeeList = empRepo.findAll();

		if(employeeList.size() == 0)
			throw new NoDataFoundException("No Data Found");
		else
			return employeeList;
	}
	
	public Employee fetchEmployee(String username) throws ResourceNotFoundException {
		Employee currentEmp = empRepo.findById(username).get();
		
		if(currentEmp == null)
			throw new ResourceNotFoundException("Resource Not Found");
		else 
			return currentEmp; 
	}
	
	public void deleteEmployee(String empID) {
		empRepo.deleteById(empID);
	}
}
