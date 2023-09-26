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
		
}










