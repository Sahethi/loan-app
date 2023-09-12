package com.example.loanapp.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.loanapp.model.LoginModel;

@Repository
public interface LoginModelRepository extends JpaRepository<LoginModel, String> {

}
