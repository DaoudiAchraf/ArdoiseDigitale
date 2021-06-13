const router = require ('express').Router();
const multer = require('multer');
const totp = require('otplib').totp;
totp.options= {step: 150}

const MIME_TYPE_MAP = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg',
    'image/pdf': 'pdf'
};


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // const isValid = MIME_TYPE_MAP[file.mimetype];
        // let error = new Error('Invalid mime type');
        // if (isValid) {
        //     error = null;
        // }
        cb(null, "./images");
    },
    filename: (req, file, cb) => {
        // console.log( file/directory/to/autocomplete/toapp.js/stepone/ste
            verify(5635)//chech if this code is ol or not if it is ok god dam validate
        cb(null, new Date().getTime().toString() + '_' + file.originalname);
    }

});




router.post('/generate', multer({ storage: storage }).single("image") ,(req, res) => {


    console.log(

        req.body
    );


    // const {id,phoneNumber} = req.body;
    
    // const token= totp.generate(id);

   
    // console.log(token);
       
    // res.json({token:token});

});
router.post('/verify', (req, res) => {

    console.log(req.body);

    const {id,code} = req.body;

    const isValid = totp.check(code, id);
    
    console.log(isValid);

    res.json({isValid:isValid});
   // console.log({isValid:true});
});

module.exports = router;