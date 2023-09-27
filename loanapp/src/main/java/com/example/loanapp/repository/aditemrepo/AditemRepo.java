package com.example.loanapp.repository.aditemrepo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.loanapp.model.adminitems.AdminItems;

@Repository
public interface AditemRepo extends JpaRepository<AdminItems,String>{

}
