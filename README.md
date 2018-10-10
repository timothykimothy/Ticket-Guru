# TicketGuru

## Structure
App Module/Component
* Navbar Component
*	Login Module/Component
* Profile Module/Component
	* Reservation Card Component
* Tickets Module/Component
	* Venue Card Component
* Seats Module/Component
	* Seat Selection Component

Services:
*	Customer Service
*	Performance Service
*	Reservation Service
*	Session Service
*	Venue Service

Potential Improvements:
* Add logic to specify which seats the customer wishes to select. The API currently only takes in numSeats when purchasing tickets. 
* API is too venue-oriented. More flexibility is needed
* Time Sorting responses

*See below for how to run app using angular cli

## This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
