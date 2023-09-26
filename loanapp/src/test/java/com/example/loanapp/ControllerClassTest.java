package com.example.loanapp;

import static org.junit.jupiter.api.Assertions.assertEquals;


import org.springframework.boot.test.context.SpringBootTest;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentMatchers;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.servlet.MockMvc;
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
import com.example.loanapp.model.adminitems.AdminItems;
import com.example.loanapp.repository.EmployeeCardRepository;
import com.example.loanapp.repository.IssueRepository;
import com.example.loanapp.service.EmployeeService;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.ArgumentMatchers;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
//import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
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
import com.example.loanapp.repository.EmployeeCardRepository;
import com.example.loanapp.repository.IssueRepository;
import com.example.loanapp.service.EmployeeService;
import com.fasterxml.jackson.databind.ObjectMapper;

//@SpringBootTest
//@RunWith(SpringRunner.class)
@WebMvcTest(controllers=EmployeeController.class)
public class ControllerClassTest {
	
	@Autowired
	private MockMvc mvc;

	@MockBean
	private EmployeeService employeeService;
	
	@MockBean
	private IssueRepository issueRepo;
	
	@MockBean
	private EmployeeCardRepository empCardRepo;
	
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
				.accept(MediaType.APPLICATION_JSON))
				.andExpect(status().isCreated());
		
	}
		
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

		
			ObjectMapper mapper = new ObjectMapper();

			Mockito.when(employeeService.saveItem(ArgumentMatchers.any())).thenReturn(item);

			String jsonn = mapper.writeValueAsString(item);
			mvc.perform(MockMvcRequestBuilders.post("/saveItem")
					.contentType(MediaType.APPLICATION_JSON)
					.characterEncoding("utf-8")
					.content(jsonn)
					.accept(MediaType.APPLICATION_JSON))
					.andExpect(status().isOk());
		
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
			mvc.perform(MockMvcRequestBuilders.post("/saveItem")
					.contentType(MediaType.APPLICATION_JSON)
					.characterEncoding("utf-8")
					.content(jsonn)
					.accept(MediaType.APPLICATION_JSON))
					.andExpect(status().isOk());	
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
			mvc.perform(MockMvcRequestBuilders.post("/saveLogin")
					.contentType(MediaType.APPLICATION_JSON)
					.characterEncoding("utf-8")
					.content(jsonn)
					.accept(MediaType.APPLICATION_JSON))
					.andExpect(status().isOk());
		
	}
	

		 //validate user 
		@Test
		public void validateUserTest() throws Exception {
			
			LoginModel loginModel = new LoginModel();
			loginModel.setUsername("xyzname");
			loginModel.setPassword("123xyz");
		
			ObjectMapper mapper = new ObjectMapper();

			Mockito.when(employeeService.chkLogin(ArgumentMatchers.any())).thenReturn("");

			String jsonn = mapper.writeValueAsString(loginModel);
			mvc.perform(MockMvcRequestBuilders.post("/loginAuth")
					.contentType(MediaType.APPLICATION_JSON)
					.characterEncoding("utf-8")
					.content(jsonn)
					.accept(MediaType.APPLICATION_JSON))
					.andExpect(status().isOk());
			
		
	}
		
		// admin save		
		@Test
		public void adminsaveTest() throws Exception {
			
			AdminItems adminItems = new AdminItems();
			adminItems.setItem_id("items01");
			adminItems.setItem_description("chair");
			adminItems.setItem_make("wooden");
			adminItems.setItem_value("4000");
			adminItems.setIssue_status("Available");
			adminItems.setItem_category("furniture");
			
			ObjectMapper mapper = new ObjectMapper();

			Mockito.when(employeeService.adminsave(ArgumentMatchers.any())).thenReturn(adminItems);

			String jsonn = mapper.writeValueAsString(adminItems);
			mvc.perform(MockMvcRequestBuilders.post("/adminItems")
					.contentType(MediaType.APPLICATION_JSON)
					.characterEncoding("utf-8")
					.content(jsonn)
					.accept(MediaType.APPLICATION_JSON))
					.andExpect(status().isOk());		
		
	}

		// get employees by id
		@Test
		public void getEmpTest() throws Exception {
			
			Employee employee = new Employee();						
			Optional<Employee> opEmp= Optional.of(employee);
			Mockito.when(employeeService.getEmployee(ArgumentMatchers.any())).thenReturn(opEmp);

			mvc.perform(MockMvcRequestBuilders.get("/employees/{empId}", "123456")
					.contentType(MediaType.APPLICATION_JSON)
					.characterEncoding("utf-8")
					.accept(MediaType.APPLICATION_JSON))
					.andExpect(status().isOk());		
		
	}		
		
		//get employee items
		@Test
		public void getEmpItemsTest() throws Exception {
			
			List<DisplayUserItems> lt= new ArrayList<>();
			
			Mockito.when(employeeService.getEmpItems(ArgumentMatchers.any())).thenReturn(lt);

			mvc.perform(MockMvcRequestBuilders.get("/items/{empId}","ietm05")
					.contentType(MediaType.APPLICATION_JSON)
					.characterEncoding("utf-8")
					.accept(MediaType.APPLICATION_JSON))
					.andExpect(status().isOk());		
		
	}
		
		// get items
		@Test
		public void getItemsTest() throws Exception {
			
			List<Item> lt= new ArrayList<>();
			
			Mockito.when(employeeService.getItems()).thenReturn(lt);

			mvc.perform(MockMvcRequestBuilders.get("/items")
					.contentType(MediaType.APPLICATION_JSON)
					.characterEncoding("utf-8")
					.accept(MediaType.APPLICATION_JSON))
					.andExpect(status().isOk());		
		
	}
		
		
		// get employee loans
		@Test
		public void getEmpLoansTest() throws Exception {
			
			List<DisplayLoans> lt= new ArrayList<>();
			
			Mockito.when(employeeService.getAllLoans("123456")).thenReturn(lt);

			mvc.perform(MockMvcRequestBuilders.get("/loans/{empId", "123456")
					.contentType(MediaType.APPLICATION_JSON)
					.characterEncoding("utf-8")
					.accept(MediaType.APPLICATION_JSON))
					.andExpect(status().isOk());		
		
	}

		
		//save data to apply loans
		@Test
		public void updateLoanTest() throws Exception {
			
			Item item = new Item();
			item.setItem_id("ietm05");
			item.setItem_description("table");
			item.setIssue_status('a');
			item.setItem_make("wooden");
			item.setItem_category("furniture");
			item.setItem_valuation(5000);
			
			ObjectMapper mapper = new ObjectMapper();

			Mockito.when(employeeService.fetchitems(ArgumentMatchers.any())).thenReturn(item);

			String jsonn = mapper.writeValueAsString(item);
			mvc.perform(MockMvcRequestBuilders.put("/updateItem/{item_id}", "item01")
					.contentType(MediaType.APPLICATION_JSON)
					.characterEncoding("utf-8")
					.content(jsonn)
					.accept(MediaType.APPLICATION_JSON))
					.andExpect(status().isOk());		
		
	}	
		
		// get admin items
		@Test
		public void getAdminItemsTest() throws Exception {
			
			List<AdminItems> lt= new ArrayList<>();
			
			Mockito.when(employeeService.getAdminItems()).thenReturn(lt);

			mvc.perform(MockMvcRequestBuilders.get("/displayAdminItems")
					.contentType(MediaType.APPLICATION_JSON)
					.characterEncoding("utf-8")
					.accept(MediaType.APPLICATION_JSON))
					.andExpect(status().isOk());		
		
	}
		
		// fetch items
		@Test
		public void fetchitemsTest() throws Exception {
			
			Item item= new Item();
			
			Mockito.when(employeeService.fetchitems("item03")).thenReturn(item);

			mvc.perform(MockMvcRequestBuilders.get("/fetchitems/{item_id}","item03")
					.contentType(MediaType.APPLICATION_JSON)
					.characterEncoding("utf-8")
					.accept(MediaType.APPLICATION_JSON))
					.andExpect(status().isOk());		
		
	}
		// fetch all loan types 
		@Test
		public void getAllLoanTypes() throws Exception {
			
			List<Loan> lt = new ArrayList<>();
			
			Mockito.when(employeeService.getAllLoanTypes()).thenReturn(lt);

			mvc.perform(MockMvcRequestBuilders.get("/fetchAllLoanTypes")
					.contentType(MediaType.APPLICATION_JSON)
					.characterEncoding("utf-8")
					.accept(MediaType.APPLICATION_JSON))
					.andExpect(status().isOk());		
		
	}
		
		//update loan 
		@Test
		public void updateLoan2Test() throws Exception {
			
			Loan loan = new Loan();
			loan.setLoan_id("loan06");
			loan.setLoan_type("furniture");
			loan.setDuration_in_years(2);
			
			ObjectMapper mapper = new ObjectMapper();

			Mockito.when(employeeService.fetchLoan(ArgumentMatchers.any())).thenReturn(loan);

			String jsonn = mapper.writeValueAsString(loan);
			mvc.perform(MockMvcRequestBuilders.put("/updateLoan/{loanID}", "loan01")
					.contentType(MediaType.APPLICATION_JSON)
					.characterEncoding("utf-8")
					.content(jsonn)
					.accept(MediaType.APPLICATION_JSON))
					.andExpect(status().isOk());		
		
	}
		
		
		// fetch loans
		@Test
		public void fetchLoansTest() throws Exception {
			
			Loan loan = new Loan();
			
			Mockito.when(employeeService.fetchLoan("loan03")).thenReturn(loan);

			mvc.perform(MockMvcRequestBuilders.get("/fetchLoan/{loanID}", "loan03")
					.contentType(MediaType.APPLICATION_JSON)
					.characterEncoding("utf-8")
					.accept(MediaType.APPLICATION_JSON))
					.andExpect(status().isOk());		
		
	}
		
		//delete loan
//		@Test
//		public void deleteLoansTest() throws Exception {
//			
//			List<Loan> lt = new ArrayList<>();
//			
//			Mockito.when(employeeService.deleteLoan("loan03")).thenReturn(lt);
//
//			mvc.perform(MockMvcRequestBuilders.get("/deleteLoan/{loanID}", "loan03")
//					.contentType(MediaType.APPLICATION_JSON)
//					.characterEncoding("utf-8")
//					.accept(MediaType.APPLICATION_JSON))
//					.andExpect(status().isOk());		
//		
//	}
		
		//fetch all employees
		@Test
		public void fetchAllEmployeesTest() throws Exception {
			
			List<Employee> lt = new ArrayList<>();
			
			Mockito.when(employeeService.fetchAllEmployees()).thenReturn(lt);

			mvc.perform(MockMvcRequestBuilders.get("/fetchAllEmployees")
					.contentType(MediaType.APPLICATION_JSON)
					.characterEncoding("utf-8")
					.accept(MediaType.APPLICATION_JSON))
					.andExpect(status().isOk());		
		
	}		
		
		// update employees
		@Test
		public void updateEmployeeTest() throws Exception {
			
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

			Mockito.when(employeeService.fetchEmployee(ArgumentMatchers.any())).thenReturn(employee);

			String jsonn = mapper.writeValueAsString(employee);
			mvc.perform(MockMvcRequestBuilders.put("/updateEmployee/{employeeID}", "123456")
					.contentType(MediaType.APPLICATION_JSON)
					.characterEncoding("utf-8")
					.content(jsonn)
					.accept(MediaType.APPLICATION_JSON))
					.andExpect(status().isOk());		
		
	}
		
	
		
		
}
