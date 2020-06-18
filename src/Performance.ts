import { Item } from "./Item";
import { Ticket } from "./Ticket";

export interface Performance {
    perfomanceId: string
    name: string
    items: Item[]
    tickets: Ticket[]
}
