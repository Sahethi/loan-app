package com.example.loanapp.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.loanapp.model.Issue;
import com.example.loanapp.model.Item;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import java.util.Optional;

@Repository
public interface IssueRepository extends JpaRepository<Issue, String> {
	@Query("SELECT i.item from Issue i WHERE i.employee.employee_id=?1")
	public List<Item> getEmpItems(String empid);
	
	@Query("SELECT i.issue_id from Issue i WHERE i.employee.employee_id=?1")
	public List<String> getEmpIssues(String empid);
	//"SELECT new DisplayItm(i.item, i.issue_id) from..." 
	// note that dispitm
}
