export class ParticipantModel {
    
    firstName: string;
    lastName: string;
    email: string;
    phone: number;
    reference: string;
    capture: string;
    id?: number;

    constructor( firstName: string, lastName: string, email: string, phone: number, reference: string, capture: string, id?: number) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.capture = capture;
        this.reference = reference;
    }
  }