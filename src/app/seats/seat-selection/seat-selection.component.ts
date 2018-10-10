import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Level } from 'src/types/types';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { SessionService } from 'src/services/session.service';

@Component({
  selector: 'app-seat-selection',
  templateUrl: './seat-selection.component.html',
  styleUrls: ['./seat-selection.component.css', './../../app.component.css']
})
export class SeatSelectionComponent implements OnInit {

  @Input() level: Level;
  @Output() addToCartEvent = new EventEmitter<number>();
  ticketsForm: FormGroup;

  constructor( private formBuilder: FormBuilder, private sessionService: SessionService) { }
 
  ngOnInit() {
    this.ticketsForm = this.formBuilder.group({
      numTickets: [0, [Validators.required, Validators.min(1)]]
    });
  }

  addToCart() {
    if( this.ticketsForm.valid) {
      this.addToCartEvent.emit(this.ticketsForm.get('numTickets').value);
    }
  }
}
