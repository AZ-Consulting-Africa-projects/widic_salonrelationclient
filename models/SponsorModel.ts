import { boolean } from "joi";

export class SponsorModel {

    firstName: string;
    lastName: string;
    organisationName: string;
    logoUrl: string;
    captureUrl: string;
    email: string;
    phone: number;
    reference: string;
    presentation: string;
    domaine: string;
    id?: number;
    isVisible?: boolean;
    isActivated?: boolean;

    constructor(
        firstName: string,
        lastName: string,
        organisationName: string,
        logoUrl: string,
        captureUrl: string,
        email: string,
        phone: number,
        reference: string,
        presentation: string,
        domaine: string,
        id?: number,
        isVisible?: boolean,
        isActivated?: boolean,
    ) {
        this.captureUrl = captureUrl;
        this.firstName = firstName;
        this.lastName = lastName;
        this.organisationName = organisationName;
        this.logoUrl = logoUrl;
        this.email = email;
        this.phone = phone;
        this.reference = reference;
        this.presentation = presentation;
        this.domaine = domaine;
        this.id = id;
        this.isVisible = isVisible;
        this.isActivated = isActivated;
    }
}
