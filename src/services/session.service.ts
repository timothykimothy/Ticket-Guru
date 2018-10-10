import { Injectable } from '@angular/core';
import { Customer } from '../types/types';
import { environment } from '../environments/environment'
import { CanActivate, Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class SessionService implements CanActivate {

	readonly BACKEND_URL: string = environment.BACKEND_URL;
	customer: Customer = null;

	constructor(private router: Router) { }

	//overridden method to determine whether or not a route can be activated
	canActivate(): boolean {
		if (this.isLoggedIn()) {
			return true;
		} else {
			this.router.navigate(['/login']);
			return false;
		}
	}

	login(customer: Customer): void {
		this.customer = customer;
	}

	isLoggedIn(): boolean {
		return (this.customer != null);
	}

	getCurrentCustomer(): Customer {
		return this.customer;
	}

	logout(): void {
		this.customer = null;
	}
}
