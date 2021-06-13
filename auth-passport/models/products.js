const mongoose = require ('mongoose');

const productSchema = new mongoose.Schema ({
    

    firstName:{
        type: String
    },
    lastName:{
        type: String
    },
    numPatent: {
        type: Number
    },
    address: {
        type: Object
    },
    juridicState: {
        type: String
    },
    cin:{
        refCIN: {type:Number},
        expirationDate: {type: String},
        photo: {type:String}
    },
    phoneNumber: {
        type: Number
    },
    activityDomain: {
        type: String
    },

    walletId: {
        type: String,
    },
    availability:{
        type: {
        monday: {from: Date ,to :Date} ,
        tuesday: { from: Date ,to :Date},
        wednesday: { from: Date ,to :Date },
        thursday: { from: Date ,to :Date },
        friday: { from: Date ,to :Date },
        saturday: { from: Date ,to :Date },
        sunday: { from: Date ,to :Date },
        },
        default:null
    },
    merchantImage:{
        type: String
    },
    storeImage:{
        type: String
    }
    

});

module.exports  = mongoose.model('product', productSchema);
