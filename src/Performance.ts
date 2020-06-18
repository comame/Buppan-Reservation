import { Item } from "./Item";
import { Ticket } from "./Ticket";

export interface Performance {
    name: string
    items: Item[]
    tickets: Ticket[]
}
