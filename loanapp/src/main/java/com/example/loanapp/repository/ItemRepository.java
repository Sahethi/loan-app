package com.example.loanapp.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.example.loanapp.model.Item;

@Repository
public interface ItemRepository extends JpaRepository<Item, String> {
	@Query("SELECT it.item_id FROM Item it WHERE it.item_category=?1 AND it.item_make=?2")
	public String findbymake(String Item_category,String Item_make);

}