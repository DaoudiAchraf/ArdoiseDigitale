const catalogModel = require ('../models/catalog-model');

/*ADD catalog*/
exports.add= async(req,res,next) => {
    let  catalogId = req.body.catalogId;
    let merchantId = req.body.merchantId;
    let productId = req.body.productId;
    let newcatalog = new catalogModel({
        catalogId,
        productId,
        merchantId
    });

    try{
        const cat = await newcatalog.save();
        res.json(cat);
      } catch (err) {
        res.status(400).send('Failed');
      }
};

  /* GET catalog */

exports.get = function(req, res, next) {
    res.send('Catalog');
  };

  /*UPDATE catalog*/

exports.update= async(req, res) => {
    try{
      const cat = await catalogModel.updateOne( req.params.id, req.body)
      res.status(201).json(cat)
    } catch (err) {
      res.status(400).send('Failed')
    }
  };