package com.example.loanapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.loanapp.model.AdminUser;

@Repository
public interface AdminRepository extends JpaRepository<AdminUser, String>{
	
}
