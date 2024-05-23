import internal from "stream";

export class ProviderModel {

    fonction: string;
    providerType: string;
    userId: number;
    id?: number;
    constructor(fonction: string, providerType: string, userId: number) {
        this.fonction = fonction;
        this.providerType = providerType;
        this.userId = userId;
    }
}
