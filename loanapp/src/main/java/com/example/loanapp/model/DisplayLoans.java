package com.example.loanapp.model;

import java.sql.Date;
import java.time.LocalDate;

public class DisplayLoans {

	private Loan loan;
	private LocalDate card_issue_date;
	
	public DisplayLoans(Loan loan, LocalDate card_issue_date) {
		this.card_issue_date = card_issue_date;
		this.loan = loan;
	}

	public Loan getLoan() {
		return loan;
	}

	public void setLoan(Loan loan) {
		this.loan = loan;
	}

	public LocalDate getCard_issue_date() {
		return card_issue_date;
	}

	public void setCard_issue_date(LocalDate card_issue_date) {
		this.card_issue_date = card_issue_date;
	}
	
}
