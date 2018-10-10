import { Component } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router, private sessionService: SessionService) { }

  isLoggedIn() {
    return this.sessionService.isLoggedIn();
  }
  logout() {
    this.sessionService.logout();
    this.router.navigate(['login']);
  }
}
