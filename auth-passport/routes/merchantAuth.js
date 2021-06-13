const router = require("express").Router();
const merchant = require("../models/merchant");
const User = require("../models/user");
const jwtHelper = require("../config/jwtHelper");

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
//------------------------------------------------------------------------------------------

//MERCHANT REGISTER
router.post(
  "/register",
  multer({ storage: storage }).single("photo"),
  async (req, res) => {
    //console.log("file",req.file);

    // merchant validation
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
      dictionaries: [req.body.firstName, req.body.firstName, numberDictionary],
      separator: "",
      style: "capital",
    });

    const saltHash = utils.genPassword(password);

    const salt = saltHash.salt;
    const hash = saltHash.hash;

    //merchant creation
    // const m = new merchant({
    //   ...req.body,
    //   walletId: req.body.walletId,
    //   userName: userName,
    //   password: password,
    //   hash: hash,
    //   salt: salt,
    // });

    const user = new User({
      userName: userName,
      password: password,
      role: "pendingMerchant",
      hash: hash,
      salt: salt,
    });

    try {
      const savedUser = await user.save();
      console.log(savedUser);
      const m = new merchant({
        user: savedUser._id,
        ...req.body,
        address: JSON.parse(req.body.address),
        cin: {
          refCIN: req.body.refCIN,
          expirationDate: req.body.expirationDate,
          photo: req.file.filename,
        },
      });
      const savedMerchant = await m.save();
      console.log("-------marchant", savedMerchant);

      // res.json(savedMerchant);
    } catch (err) {
      res.status(400).send(err);
    }
  }
);

//LOGOUT
router.post("/logout", (req, res) => {
  req.logout();
  res.send("it works");
  res.redirect("/login");
});

// //LOGIN
// router.post("/login", async (req, res) => {
//   merchant
//     .findOne({ userName: req.body.userName })
//     .then((m) => {
//       if (!m) {
//         res.status(401).json({ success: false, msg: "could not find user" });
//       }

//       // Function defined at bottom of app.js
//       const isValid = utils.validPassword(req.body.password, m.hash, m.salt);

//       if (isValid) {
//         const tokenObject = utils.issueJWT(m);
//         res.status(200).json({
//           success: true,
//           token: tokenObject.token,
//           expiresIn: tokenObject.expires,
//         });
//       } else {
//         res
//           .status(401)
//           .json({ success: false, msg: "you entered the wrong password" });
//       }
//     })
//     .catch((err) => {
//       next(err);
//     });
// });

router.patch("/profile", jwtHelper.verifyJwtToken, async (req, res) => {
  //console.log(req._id);
  const { availability } = req.body;
  const updated = await merchant.updateOne(
    { user: req._id },
    { $set: { availability: availability } }
  );

  console.log("updated:");
  console.log(updated);

  // console.log(req._id);
  // console.log(req.body);
});

module.exports = router;
