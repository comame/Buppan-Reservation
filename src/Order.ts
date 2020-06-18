import { Item } from "./Item";

export interface Order {
    items: [{
        item: Item,
        count: number
    }]
}
