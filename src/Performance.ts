import { Item } from "./Item";
import { Ticket } from "./Ticket";

export interface Performance {
    id: string
    name: string
    items: Item[]
    tickets: Ticket[]
}
