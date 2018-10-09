import { Injectable } from '@angular/core';
import { Customer } from '../types/types';
import { environment } from '../environments/environment'
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService implements CanActivate{

  readonly BACKEND_URL: string = environment.BACKEND_URL;
  customer: Customer = null;

  constructor() {}

  //overridden method to determine whether or not a route can be activated
  canActivate(): boolean {
    return this.isLoggedIn();
  }

  login(customer: Customer): void{
    this.customer = customer;
  }

  isLoggedIn(): boolean{
    return (this.customer != null);
  }

  getCurrentCustomer(): Customer { 
    return this.customer;
  }

  logout(): void{
    this.customer = null;
  }
}
