package com.example.loanapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.loanapp.model.AdminUser;
import com.example.loanapp.model.LoginModel;
import com.example.loanapp.repository.AdminRepository;

@Service
public class AdminService {
	
	@Autowired
	AdminRepository adminRepo;
	
	public String getAdmin(AdminUser a) {
		AdminUser user=null;
		String result = null;
		Optional<AdminUser> obj = adminRepo.findById(a.getUsername());
		if(obj.isPresent()) {
			user=obj.get();
		}
		if(user==null) {
			result="Invalid username";
		}
		else {
			if(a.getPassword().equals(user.getPassword())){
				//LOGIN SUCCESSFULL
				result=a.getUsername();
			}
			else {
				result="Incorrect username or password";
			}
		}
		return result;
	}
}