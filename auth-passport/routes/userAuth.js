const router = require ('express').Router();
const utils = require("../lib/utils");
const User = require("../models/user");

//LOGIN
router.post("/", async (req, res) => {
 // console.log(req.body); 
    User
      .findOne({ userName: req.body.userName })
      .then((m) => {
        if (!m) {
          res.status(401).json({ success: false, msg: "could not find user" });
        }
        else
        {
          const isValid = utils.validPassword(req.body.password, m.hash, m.salt);
          if (isValid) {
            const user =  {
              _id: m._id,
              username:m._doc.userName,
              role:m._doc.role,
            }
            const tokenObject = utils.issueJWT(user);

  

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
        }
       
      })
      .catch((err) => {
       console.log(err);
      });
  });

  module.exports = router;