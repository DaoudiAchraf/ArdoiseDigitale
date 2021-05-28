const router = require("express").Router();
const merchant = require("../models/merchant");
const {
  merchantRegisterValidation,
  clientLoginValidation,
} = require("../middlwares/validation");
const generator = require("generate-password");
const {
  uniqueNamesGenerator,
  Config,
  names,
  NumberDictionary,
} = require("unique-names-generator");
const utils = require("../lib/utils");

//MERCHANT REGISTER
router.post("/register", async (req, res) => {
  //merchant validation
  const { error } = merchantRegisterValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //merchant exists?
  const cinExist = await merchant.findOne({ refCIN: req.body.refCIN });
  if (cinExist) return res.status(400).send("merchant exists");

  //generating password
  var password = generator.generate({
    length: 10,
    numbers: true,
  });

  //generating a username
  const numberDictionary = NumberDictionary.generate({ min: 100, max: 999 });
  const userName = uniqueNamesGenerator({
    dictionaries: [
      req.body.mandataireFN,
      req.body.mandataireFN,
      numberDictionary,
    ],
    separator: "",
    style: "capital",
  });

  const saltHash = utils.genPassword(password);

  const salt = saltHash.salt;
  const hash = saltHash.hash;

  //merchant creation
  const m = new merchant({
    comName: req.body.comName,
    numPatent: req.body.numPatent,
    userName: userName,
    addressWay: req.body.addressWay,
    addressState: req.body.addressState,
    addressRegion: req.body.addressRegion,
    addressComplement: req.body.addressComplement,
    juridicState: req.body.juridicState,
    refCIN: req.body.refCIN,
    mandataireFN: req.body.mandataireFN,
    mandataireLN: req.body.mandataireLN,
    activityDomain: req.body.activityDomain,
    mandatairephoneNumber: req.body.mandatairephoneNumber,
    creationDay: req.body.creationDay,
    expirationDay: req.body.expirationDay,
    walletId: req.body.walletId,
    userName: userName,
    password: password,
    hash: hash,
    salt: salt,
  });
  try {
    const savedMerchant = await m.save();
    res.send(savedMerchant);
  } catch (err) {
    res.status(400).send(err);
  }
});

//LOGOUT
router.post("/logout", (req, res) => {
  req.logout();
  res.send("it works");
  res.redirect("/login");
});

//LOGIN
router.post("/login", async (req, res) => {
  merchant
    .findOne({ userName: req.body.userName })
    .then((m) => {
      if (!m) {
        res.status(401).json({ success: false, msg: "could not find user" });
      }

      // Function defined at bottom of app.js
      const isValid = utils.validPassword(req.body.password, m.hash, m.salt);

      if (isValid) {
        const tokenObject = utils.issueJWT(m);
        res.status(200).json({
          success: true,
          token: tokenObject.token,
          expiresIn: tokenObject.expires,
        });
      } else {
        res
          .status(401)
          .json({ success: false, msg: "you entered the wrong password" });
      }
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
