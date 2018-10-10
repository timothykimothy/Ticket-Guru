export interface Customer {
	id: number,
	firstName: string,
	lastName: string,
	address: string,
	email: string
}

export interface Seat{
	id: number,
	performanceId: number,
	levelId: number,
	reservationId: number,
	row: number,
	seatNumber: number
}

export interface Reservation {
	id: number,
	customerId: number,
	reservationNumber: string,
	expirationDate: string,
	reservationConfirmed: boolean,
	seats: Seat[]
}

export interface Show {
	description: string,
	id: number,
	name: string,
	url: string,
	venueId: number
}
export interface Performance {
	id: number,
	show: Show,
	showId: number,
	showTime: Date
}