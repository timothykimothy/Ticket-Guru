import { Injectable } from '@angular/core';
import { environment } from '../environments/environment'
import { HttpClient } from '@angular/common/http';
import { Customer } from '../types/types';
import { Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  readonly BACKEND_URL: string = environment.BACKEND_URL;

  constructor(private httpClient: HttpClient) { }

  getCustomersList(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.BACKEND_URL + 'customers');
  }
}
