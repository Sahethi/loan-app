package com.example.loanapp;

import static org.assertj.core.api.Assertions.assertThat;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.lang.reflect.Array;
import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.Ignore;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.ArgumentMatchers;
import org.mockito.InjectMocks;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.loanapp.controller.EmployeeController;
import com.example.loanapp.model.DisplayLoans;
import com.example.loanapp.model.DisplayUserItems;
import com.example.loanapp.model.Employee;
import com.example.loanapp.model.EmployeeCard;
import com.example.loanapp.model.Issue;
import com.example.loanapp.model.Item;
import com.example.loanapp.model.Loan;
import com.example.loanapp.model.LoginModel;
import com.example.loanapp.model.adminitems.AdminItems;
import com.example.loanapp.repository.AdminRepository;
import com.example.loanapp.repository.EmployeeCardRepository;
import com.example.loanapp.repository.EmployeeRepository;
import com.example.loanapp.repository.IssueRepository;
import com.example.loanapp.repository.ItemRepository;
import com.example.loanapp.repository.LoanRepository;
import com.example.loanapp.repository.LoginModelRepository;
import com.example.loanapp.repository.aditemrepo.AditemRepo;
import com.example.loanapp.service.EmployeeService;
import com.fasterxml.jackson.databind.ObjectMapper;

@SpringBootTest
@RunWith(SpringRunner.class)
//@WebMvcTest(controllers=ServiceClassTest.class)
//@CrossOrigin("http://localhost:3000")
public class ServiceClassTest {
	
	
	
	@Autowired
	private EmployeeService employeeService;
	
	@MockBean
	private EmployeeRepository employeeRepo;
	
	@MockBean 
	private ItemRepository itemRepo;
	
	@MockBean
	private LoanRepository loanRepo;
	
	@MockBean
	private LoginModelRepository loginModelRepo;
	
	@MockBean
	private IssueRepository issueRepo;
	
	@MockBean
	private EmployeeCardRepository empCardRepo;
	
	@MockBean
	private AdminRepository adminRepo;
	
	@MockBean
	private AditemRepo adItemRepo;
	
	// save employee
	@Test
	public void saveEmployeeTest() throws Exception {
		Employee employee = new Employee();
		employee.setEmployee_id("123456");
		employee.setFirst_name("abcname");
		employee.setEmail_id("xyz@gmail.com");
		employee.setPassword("346gabcdabh");
		employee.setHome_add("c-8");
		employee.setDob(Date.valueOf("2011-03-12"));
		employee.setGender('f');
		employee.setPhone_num("1234567890");
		employee.setDesignation("sde");
		employee.setDept("software");
		employee.setDoj(Date.valueOf("2023-11-04"));
		
		Mockito.when(employeeRepo.save(ArgumentMatchers.any())).thenReturn(employee);	
		
		Employee actualOut = employeeService.saveEmployee(employee);
		
		assertThat(actualOut).isEqualTo(employee);
	}
	
	// fetch all employees

	
	@Test
	public void fetchAllEmployeesTest() throws Exception {
		Employee employee = new Employee();
		employee.setEmployee_id("123456");
		employee.setFirst_name("abcname");
		employee.setEmail_id("xyz@gmail.com");
		employee.setPassword("346gabcdabh");
		employee.setHome_add("c-8");
		employee.setDob(Date.valueOf("2011-03-12"));
		employee.setGender('f');
		employee.setPhone_num("1234567890");
		employee.setDesignation("sde");
		employee.setDept("software");
		employee.setDoj(Date.valueOf("2023-11-04"));
		
		List<Employee> lt = new ArrayList<>();
		lt.add(employee);
		
		Mockito.when(employeeRepo.findAll()).thenReturn(lt);	
		
		List<Employee> actualOut = employeeService.fetchAllEmployees();
		
		assertThat(actualOut).isEqualTo(lt);
	}
	
	
	// fetch employee
	@Test
	public void fetchEmployeeTest() throws Exception {
		Employee employee = new Employee();
		employee.setEmployee_id("123456");
		employee.setFirst_name("abcname");
		employee.setEmail_id("xyz@gmail.com");
		employee.setPassword("346gabcdabh");
		employee.setHome_add("c-8");
		employee.setDob(Date.valueOf("2011-03-12"));
		employee.setGender('f');
		employee.setPhone_num("1234567890");
		employee.setDesignation("sde");
		employee.setDept("software");
		employee.setDoj(Date.valueOf("2023-11-04"));

		String str = employee.toString();
		Optional<Employee> opEmp=Optional.of(employee);
		Mockito.when(employeeRepo.findById(ArgumentMatchers.any())).thenReturn(opEmp);	
		
		Employee actualOut = employeeService.fetchEmployee(str);
		
		assertThat(actualOut).isEqualTo(employee);
	}
	
//	EmployeeService svt = new EmployeeService();
//	EmployeeService spy= Mockito.spy(svt);
//	// delete employee
//	@Test
//	public void deleteEmployeeTest() throws Exception {
//		Employee employee = new Employee();
//		employee.setEmployee_id("123456");
//		employee.setFirst_name("abcname");
//		employee.setEmail_id("xyz@gmail.com");
//		employee.setPassword("346gabcdabh");
//		employee.setHome_add("c-8");
//		employee.setDob(Date.valueOf("2011-03-12"));
//		employee.setGender('f');
//		employee.setPhone_num("1234567890");
//		employee.setDesignation("sde");
//		employee.setDept("software");
//		employee.setDoj(Date.valueOf("2023-11-04"));
//		
//		
//		Mockito.when(employeeRepo.deleteById(ArgumentMatchers.any())).thenReturn("");
//		
//		Employee actualOut = employeeService.fetchEmployee("123456");
//		
//		assertThat(actualOut).isEqualTo(employee);
//	}
		
	
	// save items	
	@Test
	public void saveItemTest() throws Exception {
		Item item = new Item();
		item.setItem_id("ietm05");
		item.setItem_description("table");
		item.setIssue_status('a');
		item.setItem_make("wooden");
		item.setItem_category("furniture");
		item.setItem_valuation(5000);

		Mockito.when(employeeService.saveItem(ArgumentMatchers.any())).thenReturn(item);
			
		Item actualOut = employeeService.saveItem(item);
			
		assertThat(actualOut).isEqualTo(item);

		
	}
	
		// save admin
		@Test
		public void saveAdminTest() throws Exception {
			
			AdminItems adminItems = new AdminItems();
			adminItems.setItem_id("items01");
			adminItems.setItem_description("chair");
			adminItems.setItem_make("wooden");
			adminItems.setItem_value("4000");
			adminItems.setIssue_status("Available");
			adminItems.setItem_category("furniture");

			Mockito.when(adItemRepo.save(ArgumentMatchers.any())).thenReturn(adminItems);
			
			AdminItems actualOut = employeeService.adminsave(adminItems);
			
			assertThat(actualOut).isEqualTo(adminItems);
			
	}
	
		// save loans
		@Test
		public void saveLoanTest() throws Exception {
			
			Loan loan = new Loan();
			loan.setLoan_id("loan06");
			loan.setLoan_type("furniture");
			loan.setDuration_in_years(2);

			Mockito.when(loanRepo.save(ArgumentMatchers.any())).thenReturn(loan);
			
			Loan actualOut = employeeService.saveLoan(loan);
			
			assertThat(actualOut).isEqualTo(loan);

			
	}
		
		// save login model
		@Test
		public void saveLoginModelTest() throws Exception {
			
			LoginModel loginModel = new LoginModel();
			loginModel.setUsername("xyzname");
			loginModel.setPassword("123xyz");

			Mockito.when(loginModelRepo.save(ArgumentMatchers.any())).thenReturn(loginModel);
			
			LoginModel actualOut = employeeService.saveLogin(loginModel);
			
			assertThat(actualOut).isEqualTo(loginModel);
					
	}


		// check login
		@Test
		public void chkLoginTest() throws Exception {
			
			LoginModel loginModel = new LoginModel();
			loginModel.setUsername("xyzname");
			loginModel.setPassword("123xyz");
			
			Optional<LoginModel> opLoginModel = Optional.of(loginModel);
			
			Mockito.when(loginModelRepo.findById(ArgumentMatchers.any())).thenReturn(opLoginModel);
			
			String actualOut = employeeService.chkLogin(loginModel);
			
			assertThat(actualOut).isEqualTo(loginModel.getUsername());
		
	}

		// get employee by username
		@Test
		public void getEmployeeTest() throws Exception {
			
			Employee employee = new Employee();
			employee.setEmployee_id("123456");
			employee.setFirst_name("abcname");
			employee.setEmail_id("xyz@gmail.com");
			employee.setPassword("346gh");
			employee.setHome_add("c-8");
			employee.setDob(Date.valueOf("2011-03-12"));
			employee.setGender('f');
			employee.setPhone_num("1234567890");
			employee.setDesignation("sde");
			employee.setDept("software");
			employee.setDoj(Date.valueOf("2023-11-04"));
			
			Optional<Employee> opEmp = Optional.of(employee); 

			Mockito.when(employeeService.getEmployee(ArgumentMatchers.any())).thenReturn(opEmp);
			
			Optional<Employee> actualOut = employeeService.getEmployee(employee.getFirst_name());
			
			assertThat(actualOut).isEqualTo(opEmp);

		
	}

		// get all loans list
		@Test
		public void getAllLoanTypesTest() throws Exception {
					
			Loan loan = new Loan();
			loan.setLoan_id("loan06");
			loan.setLoan_type("furniture");
			loan.setDuration_in_years(2);
					
			List<Loan> loanList = new ArrayList<>();
			loanList.add(loan);
					
			Mockito.when(employeeService.getAllLoanTypes()).thenReturn(loanList);

			List<Loan> actualOut = employeeService.getAllLoanTypes();
					
			assertThat(actualOut).isEqualTo(loanList);
					
				
	}

		// get items
		@Test
		public void getItemsTest() throws Exception {
			Item item = new Item();
			item.setItem_id("ietm05");
			item.setItem_description("table");
			item.setIssue_status('a');
			item.setItem_make("wooden");
			item.setItem_category("furniture");
			item.setItem_valuation(5000);
	
			
			List<Item> listItem = new ArrayList<>();
			listItem.add(item);

			Mockito.when(employeeService.getItems()).thenReturn(listItem);
			
			List<Item> actualOut = employeeService.getItems();
			
			assertThat(actualOut).isEqualTo(listItem);
		
	}

		// get all admin items
		@Test
		public void getAdminItemsTest() throws Exception {
			AdminItems adminItems = new AdminItems();
			adminItems.setItem_id("items01");
			adminItems.setItem_description("chair");
			adminItems.setItem_make("wooden");
			adminItems.setItem_value("4000");
			adminItems.setIssue_status("Available");
			adminItems.setItem_category("furniture");
	
			List<AdminItems> adList = new ArrayList<>();
			adList.add(adminItems);

			Mockito.when(adItemRepo.findAll()).thenReturn(adList);
			
			List<AdminItems> actualOut = employeeService.getAdminItems();
			
			assertThat(actualOut).isEqualTo(adList);			
		}
		
		
		// fetch items
		@Test
		public void fetchItemsTest() throws Exception {
			Item item = new Item();
			item.setItem_id("ietm05");
			item.setItem_description("table");
			item.setIssue_status('a');
			item.setItem_make("wooden");
			item.setItem_category("furniture");
			item.setItem_valuation(5000);
			
			Optional<Item> opItem = Optional.of(item);
			Mockito.when(itemRepo.findById(item.getItem_id())).thenReturn(opItem);
			
			Item actualOut = employeeService.fetchitems(item.getItem_id());
			
			assertThat(actualOut).isEqualTo(item);			
		}
		
		// delete items
//		@Test
//		public void deleteItemsTest() throws Exception {
//			Item item = new Item();
//			item.setItem_id("ietm05");
//			item.setItem_description("table");
//			item.setIssue_status('a');
//			item.setItem_make("wooden");
//			item.setItem_category("furniture");
//			item.setItem_valuation(5000);
//	
//			
//			List<Item> listItem = new ArrayList<>();
//			listItem.add(item);
//
//			Mockito.when(employeeService.getItems()).thenReturn(listItem);
//			
//			Item actualOut = employeeService.saveItem(item);
//			
//			assertThat(actualOut).isEqualTo(item);			
//		}
		
		
		// get all items list by employee
		@Test
		public void getEmpItemsTest() throws Exception {
			
			List<Item> itm = new ArrayList<>();
			itm = issueRepo.getEmpItems("123");
			List<String> issue_id = new ArrayList<>();
			issue_id = issueRepo.getEmpIssues("123");
			
			List<DisplayUserItems> ret=new ArrayList<DisplayUserItems>();
			for(int l=0;l<itm.size();l++) {
				ret.add(new DisplayUserItems(issue_id.get(l),itm.get(l)));
			}

			Mockito.when(issueRepo.getEmpItems(ArgumentMatchers.any())).thenReturn(itm);
			Mockito.when(issueRepo.getEmpIssues(ArgumentMatchers.any())).thenReturn(issue_id);

			List<DisplayUserItems> actualOut = employeeService.getEmpItems("123");
			
			assertThat(actualOut).isEqualTo(ret);	
	}
	
		// display loans
		@Test
		public void displayLoansTest() throws Exception {
			
			List<Loan> l = new ArrayList<>();
			l = empCardRepo.getEmpLoans("123");
			List<Date> d = new ArrayList<>();
			d = empCardRepo.getEmpIssueDate("123");
			
			List<DisplayLoans> ret=new ArrayList<DisplayLoans>();
			for(int i=0;i<l.size();i++) {
				ret.add(new DisplayLoans(l.get(i),d.get(i)));
			}
		
			List<DisplayLoans> actualOut = employeeService.getAllLoans("123");
			
			assertThat(actualOut).isEqualTo(ret);			
		}
		
		//fetch loans
		@Test
		public void fetchLoansTest() throws Exception {
			
			Loan loan = new Loan();
			loan.setLoan_id("loan06");
			loan.setLoan_type("furniture");
			loan.setDuration_in_years(2);
			
			Optional<Loan> opLoan = Optional.of(loan);
			Mockito.when(loanRepo.findById(loan.getLoan_id())).thenReturn(opLoan);
			
			Loan actualOut = employeeService.fetchLoan(loan.getLoan_id());
			
			assertThat(actualOut).isEqualTo(loan);			
		}
		
//		//delete loans
//		@Test
//		public void deleteLoansTest() throws Exception {
//			Item item = new Item();
//			item.setItem_id("ietm05");
//			item.setItem_description("table");
//			item.setIssue_status('a');
//			item.setItem_make("wooden");
//			item.setItem_category("furniture");
//			item.setItem_valuation(5000);
//	
//			
//			List<Item> listItem = new ArrayList<>();
//			listItem.add(item);
//
//			Mockito.when(employeeService.getItems()).thenReturn(listItem);
//			
//			Item actualOut = employeeService.saveItem(item);
//			
//			assertThat(actualOut).isEqualTo(item);			
//		}

		@Test
		public void getAllLoansTest() throws Exception {
			Loan loan = new Loan();
			loan.setLoan_id("loan06");
			loan.setLoan_type("furniture");
			loan.setDuration_in_years(2);
			
			List<Loan> lt = new ArrayList<>();
			lt.add(loan);

			Mockito.when(loanRepo.findAll()).thenReturn(lt);

			List<Loan> actualOut = employeeService.getAllLoanTypes();
			
			assertThat(actualOut).isEqualTo(lt);	
			
		
	}
		
		
		

	
}

//
//
//Loan loan = new Loan();
//loan.setLoan_id("loan06");
//loan.setLoan_type("furniture");
//loan.setDuration_in_years(2);
//
//EmployeeCard empCard= new EmployeeCard();
//empCard.setCard_id("card01");
//empCard.setCard_issue_date(LocalDate.parse("2016-02-01"));
//
//
//List<Loan> ln = new ArrayList<>();
//ln = empCardRepo.getEmpLoans("123");
//List<Date> issue_id_date = new ArrayList<>();
//issue_id_date = empCardRepo.getEmpIssueDate("123");
//
//List<DisplayLoans> retl=new ArrayList<DisplayLoans>();
//for(int l=0;l<ln.size();l++) {
//	retl.add(new DisplayLoans(ln.get(l),issue_id_date.get(l)));
//}


