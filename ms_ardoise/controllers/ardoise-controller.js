const ardoiseModel = require ('../models/ardoise');
var ObjectID = require('mongodb').ObjectID;

/* GET ardoise */

exports.get = async(req, res) => {
  try{
    const a = await ardoiseModel.findOne(req.params.id) 
    res.status(200).json(a);
  } catch (err) {
    res.status(400).send('Failed')
  }

};
/*DELETE ardoise*/

exports.delete = async (req,res)=>{
   try {
        const a = ardoiseModel.deleteOne( req.params.id )
        res.status(200).send('Ardoise closed')
    } catch (err) {
        res.status(400).send('Failed')
    }
        
};

/*ADD ardoise*/
exports.add= async(req,res,next) => {
    let  clientId = req.body.clientId;
    let merchantId = req.body.merchantId;
    let commandId = req.body.commandId;
    let state = req.body.state;
    let creationDay = req.body.creationDay;
    let closingDay = req.body.closingDay;
    let newardoise = new ardoiseModel({
        clientId,
        merchantId,
        commandId,
        state,
        creationDay,
        closingDay
    });

    try{
        const a = await newardoise.save();
        res.json(a);
      } catch (err) {
        res.status(400).send('Failed');
      }
};

/*CLOSE ardoise*/

exports.close = async(req, res) => {
  try{
    const a = await ardoiseModel.updateOne((req.params._id), { $set: { state: 'closed' }});
    res.status(200).json(a);
    } catch(err){
      res.status(500).json(err);
    }
};

/*ADD to FAV*/

exports.addToBookmarks = async(req, res) => {
    try{
      const a = await ardoiseModel.updateOne(req.params.id, { $set: { bookmarked: true } });
      res.status(200).json(a);
      } catch(err){
        res.status(500).json(err);
      }
  };
  
exports.removeFromBookmarks = async(req, res) => {
  try{
    const a = await ardoiseModel.updateOne(req.params.id, { $set: { bookmarked: false } });
    res.status(200).json(a);
    } catch(err){
      res.status(500).json(err);
    }
  };