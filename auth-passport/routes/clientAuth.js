const router = require("express").Router();
const client = require("../models/client");
const {
  clientRegisterValidation,
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

//------------------------------------Upload images-------------------------------------------
const multer = require("multer");

const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
  "image/pdf": "pdf",
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      new Date().getTime().toString() + "." + MIME_TYPE_MAP[file.mimetype]
    );
  },
});

//REGISTER
router.post(
  "/register",
  multer({ storage: storage }).single("photo"),
  async (req, res) => {
    ///client validation
    const { error } = clientRegisterValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //client exists?
    const cinExist = await client.findOne({ refCIN: req.body.refCIN });
    if (cinExist) return res.status(400).send("client exists");

    //generating password
    var password = generator.generate({
      length: 10,
      numbers: true,
    });

    //generating a username
    const numberDictionary = NumberDictionary.generate({ min: 100, max: 999 });
    const userName = uniqueNamesGenerator({
      dictionaries: [req.body.firstName, req.body.firstName, numberDictionary],
      separator: "",
      style: "capital",
    });

    const saltHash = utils.genPassword(password);

    const salt = saltHash.salt;
    const hash = saltHash.hash;

    //client creation
    /*const clt = new client({
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
    walletId: req.body.walletId,
    userName: userName,
    password: password,
    hash: hash,
    salt: salt,
  });*/
    const user = new User({
      userName: userName,
      password: password,
      role: "Client",
      hash: hash,
      salt: salt,
    });

    try {
      const savedUser = await user.save();
      const clt = new client({
        user: savedUser._id,
        ...req.body,
        address: JSON.parse(req.body.address),
        cin: {
          refCIN: req.body.refCIN,
          expirationDate: req.body.expirationDate,
          photo: req.file.filename,
        },
      });
      const savedClient = await clt.save();
      res.send(savedClient);
    } catch (err) {
      res.status(400).send(err);
    }
  }
);

//LOGOUT
router.post("/logout", (req, res) => {
  req.logout();
  res.send("it works");
});

//LOGIN
/*router.post("/login", async (req, res, next) => {
  client
    .findOne({ userName: req.body.userName })
    .then((clt) => {
      if (!clt) {
        res.status(401).json({ success: false, msg: "could not find user" });
      }

      // Function defined at bottom of app.js
      const isValid = utils.validPassword(
        req.body.password,
        clt.hash,
        clt.salt
      );

      if (isValid) {
        const tokenObject = utils.issueJWT(clt);
        res
          .status(200)
          .json({
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
});*/

module.exports = router;
