export class UserModel {

    firstName: string;
    lastName: string;
    email: string;
    profilUrl: string;
    phone: number;
    role: string;
    isVisible?: boolean;
    isActivated?: boolean;
    id?: string;
    password?: string;

    constructor( firstName: string, lastName: string, email: string, profilUrl: string, phone: number, role: string, password?: string) {
        
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.profilUrl = profilUrl;
        this.phone = phone;
        this.role = role;
    }
}
