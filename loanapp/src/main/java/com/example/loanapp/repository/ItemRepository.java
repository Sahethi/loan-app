package com.example.loanapp.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.loanapp.model.Item;

@Repository
public interface ItemRepository extends JpaRepository<Item, String> {

}
