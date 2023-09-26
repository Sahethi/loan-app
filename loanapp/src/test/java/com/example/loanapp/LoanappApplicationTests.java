package com.example.loanapp;

import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentMatchers;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.scheduling.annotation.Async;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultMatcher;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import com.example.loanapp.controller.EmployeeController;
import com.example.loanapp.model.DisplayLoans;
import com.example.loanapp.model.DisplayUserItems;
import com.example.loanapp.model.Employee;
import com.example.loanapp.model.EmployeeCard;
import com.example.loanapp.model.Issue;
import com.example.loanapp.model.Item;
import com.example.loanapp.model.Loan;
import com.example.loanapp.model.LoginModel;
import com.example.loanapp.repository.EmployeeCardRepository;
import com.example.loanapp.repository.IssueRepository;
import com.example.loanapp.service.EmployeeService;
import com.fasterxml.jackson.databind.ObjectMapper;

//@SpringBootTest
//@Async
@WebMvcTest(controllers=LoanappApplicationTests.class)
class LoanappApplicationTests {
	
	@Autowired
	private MockMvc mvc;

	@MockBean
	private EmployeeService employeeService;
	
	@MockBean
	private IssueRepository issueRepo;
	
	@MockBean
	private EmployeeCardRepository empCardRepo;
	
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
		
		ObjectMapper mapper = new ObjectMapper();

		Mockito.when(employeeService.saveEmployee(ArgumentMatchers.any())).thenReturn(employee);
		
		String jsonn = mapper.writeValueAsString(employee);
		mvc.perform(MockMvcRequestBuilders.post("/saveEmployee")
				.contentType(MediaType.APPLICATION_JSON)
				.characterEncoding("utf-8")
				.content(jsonn)
				.accept(MediaType.APPLICATION_JSON)).andExpect(status().isOk());
	}
		
<<<<<<< HEAD
=======
		//items
		
		@Test
		public void saveItemTest() throws Exception {
			Item item = new Item();
			item.setItem_id("ietm05");
			item.setItem_description("table");
			item.setIssue_status('a');
			item.setItem_make("wooden");
			item.setItem_category("furniture");
			item.setItem_valuation(5000);

		
			ObjectMapper mapper = new ObjectMapper();

			Mockito.when(employeeService.saveItem(ArgumentMatchers.any())).thenReturn(item);

			String jsonn = mapper.writeValueAsString(item);
			mvc.perform(MockMvcRequestBuilders.post("/saveItem").contentType(MediaType.APPLICATION_JSON)
					.characterEncoding("utf-8").content(jsonn).accept(MediaType.APPLICATION_JSON)).andReturn();
		
	}
		
		// save loans
		@Test
		public void saveLoanTest() throws Exception {
			
			Loan loan = new Loan();
			loan.setLoan_id("loan06");
			loan.setLoan_type("furniture");
			loan.setDuration_in_years(2);
		
			ObjectMapper mapper = new ObjectMapper();

			Mockito.when(employeeService.saveLoan(ArgumentMatchers.any())).thenReturn(loan);

			String jsonn = mapper.writeValueAsString(loan);
			mvc.perform(MockMvcRequestBuilders.post("/saveItem").contentType(MediaType.APPLICATION_JSON)
					.characterEncoding("utf-8").content(jsonn).accept(MediaType.APPLICATION_JSON)).andReturn();
		
	}
		
		// save login model
		@Test
		public void saveLoginModelTest() throws Exception {
			
			LoginModel loginModel = new LoginModel();
			loginModel.setUsername("xyzname");
			loginModel.setPassword("123xyz");
		
			ObjectMapper mapper = new ObjectMapper();

			Mockito.when(employeeService.saveLogin(ArgumentMatchers.any())).thenReturn(loginModel);

			String jsonn = mapper.writeValueAsString(loginModel);
			mvc.perform(MockMvcRequestBuilders.post("/saveLogin").contentType(MediaType.APPLICATION_JSON)
					.characterEncoding("utf-8").content(jsonn).accept(MediaType.APPLICATION_JSON)).andReturn();
		
	}

		// check login test
		@Test
		public void chkLoginTest() throws Exception {
			
			LoginModel loginModel = new LoginModel();
			loginModel.setUsername("xyzname");
			loginModel.setPassword("123xyz");
			
			String str="";
			
			ObjectMapper mapper = new ObjectMapper();

			Mockito.when(employeeService.chkLogin(ArgumentMatchers.any())).thenReturn(str);

			String jsonn = mapper.writeValueAsString(str);
			mvc.perform(MockMvcRequestBuilders.post("/chkAuthh").contentType(MediaType.APPLICATION_JSON)
					.characterEncoding("utf-8").content(jsonn).accept(MediaType.APPLICATION_JSON)).andReturn();
		
	}
		
		// get employee by id
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
			ObjectMapper mapper = new ObjectMapper();

			Mockito.when(employeeService.getEmployee(ArgumentMatchers.any())).thenReturn(opEmp);

			String jsonn = mapper.writeValueAsString(employee);
			mvc.perform(MockMvcRequestBuilders.post("/employees/{empId}", 123456).contentType(MediaType.APPLICATION_JSON)
					.characterEncoding("utf-8").content(jsonn).accept(MediaType.APPLICATION_JSON)).andReturn();
		
	}
		
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
			ObjectMapper mapper = new ObjectMapper();

			Mockito.when(employeeService.getItems()).thenReturn(listItem);

			String jsonn = mapper.writeValueAsString(listItem);
			mvc.perform(MockMvcRequestBuilders.post("/items", 123456).contentType(MediaType.APPLICATION_JSON)
					.characterEncoding("utf-8").content(jsonn).accept(MediaType.APPLICATION_JSON)).andReturn();
		
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
			
			ObjectMapper mapper = new ObjectMapper();

			Mockito.when(employeeService.getAllLoanTypes()).thenReturn(loanList);

			String jsonn = mapper.writeValueAsString(loanList);
			mvc.perform(MockMvcRequestBuilders.post("/fetchAlLoanTypes", 123456).contentType(MediaType.APPLICATION_JSON)
					.characterEncoding("utf-8").content(jsonn).accept(MediaType.APPLICATION_JSON)).andReturn();
		
	}
		
		// get all items list by employee
		@Test
		public void getEmpItemsTest() throws Exception {
			
			Issue issue = new Issue();
			
			Employee employee= new Employee();
			employee.setEmployee_id("123");
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
			
			List<Item> itm = new ArrayList<>();
			itm = issueRepo.getEmpItems("123");
			List<String> issue_id = new ArrayList<>();
			issue_id = issueRepo.getEmpIssues("123");
			ObjectMapper mapper = new ObjectMapper();
			
			List<DisplayUserItems> ret=new ArrayList<DisplayUserItems>();
			for(int l=0;l<itm.size();l++) {
				ret.add(new DisplayUserItems(issue_id.get(l),itm.get(l)));
			}

			Mockito.when(employeeService.getEmpItems(ArgumentMatchers.any())).thenReturn(ret);

			String jsonn = mapper.writeValueAsString(ret);
			mvc.perform(MockMvcRequestBuilders.post("/items/{empId}", 123).contentType(MediaType.APPLICATION_JSON)
					.characterEncoding("utf-8").content(jsonn).accept(MediaType.APPLICATION_JSON)).andReturn();
		
	}
		
		@Test
		public void getAllLoansTest() throws Exception {
			
			Loan loan = new Loan();
			loan.setLoan_id("loan06");
			loan.setLoan_type("furniture");
			loan.setDuration_in_years(2);
			
			EmployeeCard empCard= new EmployeeCard();
			empCard.setCard_id("card01");
			
			empCard.setCard_issue_date(LocalDate.parse("2016-02-01"));
			
			
			List<Loan> ln = new ArrayList<>();
			ln = empCardRepo.getEmpLoans("123");
			List<LocalDate> issue_id_date = new ArrayList<>();
			issue_id_date = empCardRepo.getEmpIssueDate("123");
			ObjectMapper mapper = new ObjectMapper();
			
			List<DisplayLoans> retl=new ArrayList<DisplayLoans>();
			for(int l=0;l<ln.size();l++) {
				retl.add(new DisplayLoans(ln.get(l),issue_id_date.get(l)));
			}

			Mockito.when(employeeService.getAllLoans(ArgumentMatchers.any())).thenReturn(retl);

			String jsonn = mapper.writeValueAsString(retl);
			mvc.perform(MockMvcRequestBuilders.post("/loans/{empId}", 123).contentType(MediaType.APPLICATION_JSON)
					.characterEncoding("utf-8").content(jsonn).accept(MediaType.APPLICATION_JSON)).andReturn();
		
	}
	
	

>>>>>>> 5e2d42ab2852cd4996cde01a34e7177e672ce991
}










