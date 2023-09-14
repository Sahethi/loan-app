package com.example.loanapp.model;
import com.example.loanapp.model.Item;


public class DisplayUserItems {
	private String issue_id;
	private Item item;
	
	public DisplayUserItems(String issue_id, Item item){
		this.issue_id=issue_id;
		this.item=item;
	}

	public String getIssue_id() {
		return issue_id;
	}

	public void setIssue_id(String issue_id) {
		this.issue_id = issue_id;
	}

	public Item getItem() {
		return item;
	}

	public void setItem(Item item) {
		this.item = item;
	}
	
}
