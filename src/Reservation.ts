import { Item } from "./Item";

export interface Reservation {
    reservationId: number
    items: [{
        item: Item,
        count: number
    }]
}
