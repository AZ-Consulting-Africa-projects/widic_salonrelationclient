export class TicketModel {
    id: number
    price: number
    type: string
    isActivated: boolean
    isVisible: boolean

    constructor(id: number, price: number, type: string, isActivated: boolean, isVisible: boolean) {
        this.id = id
        this.price = price
        this.type = type
        this.isActivated = isActivated
        this.isVisible = isVisible
    }
}
