export class EventModel {

    title: string;
    description: string;
    beginDate: Date;
    endDate: Date;
    imagesUrl: string[];
    status: string;
    isActivated: boolean;
    isVisible: boolean;
    id?: number;

    constructor(title: string, description: string, beginDate: Date, endDate: Date, imagesUrl: string[], status: string, isActivated: boolean, isVisible: boolean) {
        this.title = title;
        this.description = description;
        this.beginDate = beginDate;
        this.endDate = endDate;
        this.imagesUrl = imagesUrl;
        this.status = status;
        this.isActivated = isActivated;
        this.isVisible = isVisible;
    }
}
