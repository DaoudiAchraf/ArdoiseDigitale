const Joi = require('@hapi/joi');

//client register validation
const clientRegisterValidation = (data) => {
    const schema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        addressWay: Joi.string().required(),
        addressState: Joi.string().required(),
        addressRegion: Joi.string().required(),
        addressComplement: Joi.string(),
        photoClient: Joi.object(),
        refCIN: Joi.number().required(),
        maritalstate: Joi.string(),
        identityCard: Joi.object(),
        phoneNumber: Joi.number().required(),
        creationDay: Joi.date(),
        walletId: Joi.number()
    });

    return schema.validate(data, Joi.schema);
};

//client login validation
const clientLoginValidation = data => {

    const schema = Joi.object ({
        phoneNumber: Joi.number().required(),
        password: Joi.string().min(8)
    });

    return schema.validate(data, Joi.schema);
}

//merchant register validation
const merchantRegisterValidation = (data) => {
    const schema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        numPatent: Joi.number().required(),
        address: Joi.object().required(),
        juridicState: Joi.string().required(),
        refCIN: Joi.number().required(),

        identityCard: Joi.object().required(),
        phoneNumber: Joi.number().required(),
        activityDomain: Joi.string().required(),

        expirationDate: Joi.date(),
        walletId: Joi.string()
    });

    return schema.validate(data, Joi.schema);
};



module.exports.clientRegisterValidation = clientRegisterValidation;
module.exports.merchantRegisterValidation = merchantRegisterValidation;
module.exports.clientLoginValidation = clientLoginValidation;