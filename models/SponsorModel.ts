export class SponsorModel {

    userId: number;
    organisationName: string;
    description: string;
    logoUrl: string;
    id?: number;

    constructor(userId: number, organisationName: string, description: string, logoUrl: string) {
        this.userId = userId;
        this.organisationName = organisationName;
        this.description = description;
        this.logoUrl = logoUrl;
    }
}
