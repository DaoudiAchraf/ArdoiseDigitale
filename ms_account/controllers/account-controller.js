const clientModel = require ('../models/client');
const merchantModel = require ('../models/merchant');

/* GET client */

exports.get = function(req, res, next) {
    res.send('Client');
  };

/*ADD account*/
exports.add= async(req,res) => {
  const clt = new clientModel ({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    addressWay: req.body.addressWay,
    addressState: req.body.addressState,
    addressRegion: req.body.addressRegion,
    addressComplement: req.body.addressComplement,
    photoClient: req.body.photoClient,
    refCIN: req.body.refCIN,
    maritalstate: req.body.maritalstate,
    identityCard: req.body.identityCard,
    phoneNumber: req.body.phoneNumber,
    creationDay: req.body.creationDay,
    walletId: req.body.walletId
});
try {
    const savedClient = await clt.save();
    res.send(savedClient); 
} catch (err) {
    res.status(400).send(err);
}
};
  /*UPDATE client*/

exports.update= async(req, res) => {
    try{
      const clt = await clientModel.updateOne({" _id":ObjectID(req.params.id)}, {$set: req.body})
      res.status(201).json(clt)
    } catch (err) {
      res.status(400).send('Failed')
    }
  };

  /*DELETE client*/

  exports.delete = async (req,res)=>{
    try {
        const clt = clientModel.deleteOne( req.params.id )
        res.status(200).send('Account deleted')
    } catch (err) {
        res.status(400).send('Failed')
    }
        
};

/* GET merchant */

exports.get = function(req, res, next) {
    res.send('Merchant');
};

/*UPDATE merchant*/

exports.update= async(req, res) => {
    try{
      const m = await merchantModel.updateOne( req.params.id, req.body)
      res.status(201).json(m)
    } catch (err) {
      res.status(400).send('Failed')
    }
};

/*DELETE merchant*/

  exports.delete = async (req,res)=>{
    try {
        const m = merchantModel.deleteOne( req.params.id )
        res.status(200).send('Account deleted')
    } catch (err) {
        res.status(400).send('Failed')
    }
        
};

/*DISACTIVE user*/

exports.desactive = async(req, res) => {
  try{
    const a = merchantModel.updateOne({_id :req.params.id }, { $set: { account: "desactivated" } });
    res.status(200).json(req.body);
    } catch(err){
      res.status(500).json(err);
    }
};
