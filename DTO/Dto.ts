import Joi from "joi";
export class Dto {


    static sponsorDto() {
        const schema = Joi.object({
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            captureUrl: Joi.string().required(),
            organisationName: Joi.string().required(),
            logoUrl: Joi.string().required(),
            email: Joi.string().email().required(),
            phone: Joi.number().required(),
            reference: Joi.string().required(),
            presentation: Joi.string().required(),
            domaine: Joi.string().required(),
            id: Joi.number().optional(),
            isVisible: Joi.boolean().optional(),
            isActivated: Joi.boolean().optional(),
        });

        return schema;
    }

    static ParticipantDto() {
        const schema = Joi.object({
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            email: Joi.string().email().required(),
            phone: Joi.number().required().integer(),
            reference: Joi.string().required(),
            capture: Joi.string().required(),
            id: Joi.number().optional(),
        });

        return schema;
    }
    static EventDto() {
        const schema = Joi.object({
            title: Joi.string().required(),
            description: Joi.string().required(),
            beginDate: Joi.string().required(),
            endDate: Joi.string().required(),
            imagesUrl: Joi.string().required(),
            status: Joi.string().required(),
            isActivated: Joi.string().required(),
            isVisible: Joi.string().required(),
            id: Joi.string().required(),
        });

        return schema;
    }


    static userDto() {
        const shema = Joi.object({
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            role: Joi.string().required(),
            email: Joi.string().email().required(),
            phone: Joi.number().required().integer(),
            profilUrl: Joi.string().optional(),
            password: Joi.string().optional(),
        });
        return shema;
    }

    static loginDto() {
        const schema = Joi.object({
            phone: Joi.number().required(),
            password: Joi.string().required(),
        });
        return schema;
    }



    static paiementDto() {
        const schema = Joi.object({
            amount: Joi.number().required(),
            status: Joi.string().required(),
            userId: Joi.number().required(),
        })
        return schema;
    }


    static providerDto() {
        // Suggested code may be subject to a license. Learn more: ~LicenseLog:414713133.
        const schema = Joi.object({
            fonction: Joi.string().required(),
            providerType: Joi.string().required(),
            userId: Joi.number().required(),
        });

        return schema;
    }
}


