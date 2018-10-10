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
export interface Venue {
	id: number,
	name: string,
	description: string,
	address: string,
	url: string
}
export interface VenueShows {
	id: number,
	name: string,
	description: string,
	address: string,
	url: string,
	shows: Show[]
}
export interface Level {
	id: number,
	venueId: number,
	name: string,
	price: number,
	numRows: number,
	seatsPerRow: number,
	seatsAvailable: number
}
export interface PerformanceLevels {
	id: number,
	show: Show,
	showId: number,
	showTime: Date
	seatsAvailable: number,
	levels: Level[]
}
export interface SeatSelection {
	name: string,
	price: number,
	seatsAvailable: number,
	seatsSelected: number
}
export interface SeatRequest {
	level: {
		id: number
	},
	numSeats: number
}