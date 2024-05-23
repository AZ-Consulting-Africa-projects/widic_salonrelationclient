export class PaiementModel {


    amount: number;
    status: string;
    id?: number
    userId?: number;

    constructor(amout: number, status: string,  userId?: number) {
        this.amount = amout;
        this.status = status;
        this.userId = userId;
    }
}
