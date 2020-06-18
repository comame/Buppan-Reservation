import { Order } from "./Order";

export interface Ticket {
    id: string
    order: Order
    seat: string
}
