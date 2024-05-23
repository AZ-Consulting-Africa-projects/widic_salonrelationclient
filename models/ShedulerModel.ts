export class ShedulerModel {

    dayRang: number;
    providerId: number;
    date: string;
    beginTime: string;
    endTime: string;
    eventId: number;
    id: number;

    constructor(dayRang: number, providerId: number, date: string, beginTime: string, endTime: string, eventId: number, id: number) {
        this.dayRang = dayRang;
        this.providerId = providerId;
        this.date = date;
        this.beginTime = beginTime;
        this.endTime = endTime;
        this.eventId = eventId;
        this.id = id;
    }
}
