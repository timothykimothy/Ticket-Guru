import { Component, OnInit } from '@angular/core';
import { Customer } from '../../types/types';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  customer: Customer;
  constructor(private sessionService: SessionService) { }

  ngOnInit() {
    this.customer = this.sessionService.getCurrentCustomer();
  }

}
