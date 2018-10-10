import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../../types/types';
import { CustomerService } from '../../services/customer.service';
import { SessionService } from '../../services/session.service';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	selectedCustomer: Customer;
	customersList: Customer[];

	constructor(private router: Router, private customerService: CustomerService, private sessionService: SessionService) { }

	ngOnInit() {
		this.customerService.getCustomersList().subscribe((customerList) => {
			this.customersList = customerList;
			this.selectedCustomer = this.customersList[0];
		})
	}

	login() {
		this.sessionService.login(this.selectedCustomer);
		this.router.navigate(['/profile']);
	}
}
