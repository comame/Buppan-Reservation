import { Item } from "./Item";

export interface Order {
    id: string
    items: [{
        item: Item,
        count: number
    }]
}
