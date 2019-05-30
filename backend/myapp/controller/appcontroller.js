var mongoo = require('mongoose');
var suserschm = require('../models/sregistered');
var puserschm = require('../models/pregistered');
var offerschm = require('../models/joffer');
var upldspec = require('../models/jfind');
const multer = require('multer');
var path = require('path');
const jwt = require('jsonwebtoken');

const url = 'mongodb://sdirectdb:sdirectdb@192.168.0.5:27017/sdirectdb';
mongoo.connect(url);


module.exports.screateUser = function (req, res) {
    console.log(req.body);
    var syncuser = new suserschm(req.body);
    syncuser.save((err, data) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json({ "status": 200 });
        }
    })
}

module.exports.pcreateUser = function (req, res) {
    console.log(req.body);
    var syncuser = new puserschm(req.body);
    syncuser.save((err, data) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json({ "status": 200 });
        }
    })
}

module.exports.createOffer = function (req, res) {

    jwt.verify(req.token, 'TopSecret', (err, authdata) => {
        if (err) {
            res.json({ "status": 403, msg: { str1: 'Session Expired or Unauthorized access', str2: '' } });
        }
        else {
            var syncoffer = new offerschm(req.body);
            syncoffer.save((err, data) => {
                if (err) {
                    res.send(err);
                }
                else {
                    puserschm.findOneAndUpdate({ "_id": authdata.UserId }, { "company_details": data._id })
                        .then(data => res.json({ "status": 200 }))
                        .catch((err) => {
                            if (err) {
                                res.send(Err);
                            }
                        });
                    res.json({ "status": 200 });
                }
            })
        }


    });

}


module.exports.sloginUser = function (req, res) {
    console.log(req.body.username, "   ", req.body.psw);
    suserschm.findOne({ "username": req.body.username, "psw": req.body.psw }, (err, data) => {
        if (data == null) {
            res.json({ "status": 404, msg: { str1: 'Incorrect Username or Password.', str2: 'User not found.' } });
        }
        else {

            jwt.sign({ UserId: data._id }, 'TopSecret', { expiresIn: 60 * 60 }, (err, token) => {
                if (err) {
                    res.send(err);
                }
                else {
                    console.log(token);
                    res.json({
                        "status": 200, token: token, msg: {
                            str1: 'Successfully LoggedIn',
                            str2: ''
                        }
                    });
                }
            });
        }
    });

};

module.exports.ploginUser = function (req, res) {
    console.log(req.body.username, "   ", req.body.psw);
    puserschm.findOne({ "username": req.body.username, "psw": req.body.psw }, (err, data) => {
        if (data == null) {
            res.json({ "status": 404, msg: { str1: 'Incorrect Username or Password.', str2: 'company record not found.' } });
        }
        else {

            jwt.sign({ UserId: data._id }, 'TopSecret', { expiresIn: 60 * 60 }, (err, token) => {
                if (err) {
                    res.send(err);
                }
                else {
                    console.log(token);
                    res.json({
                        "status": 200, token: token, msg: {
                            str1: 'Successfully LoggedIn',
                            str2: ''
                        }
                    });
                }
            });
        }
    });

};


module.exports.uploadSpec = function (req, res) {

    jwt.verify(req.token, 'TopSecret', (err, authdata) => {
        if (err) {
            res.json({ "status": 403, msg: { str1: 'Session Expired or Unauthorized access', str2: '' } });
        }
        else {
            req.body.user_id = authdata.UserId;
            var addspc = new upldspec(req.body);
            addspc.save((err, data) => {
                if (err) {
                    res.send(err);
                }
                else {
                    console.log(data, "jcvjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj");
                    suserschm.findOneAndUpdate({ "_id": authdata.UserId }, { "user_details": data._id })
                        .then(data => res.json({ "status": 200 }))
                        .catch((err) => {
                            if (err) {
                                res.send(Err);
                            }
                        });

                }
            })
        }

    });

}


const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './public/uploads');
    },
    filename: function (req, file, callback) {
        let filename = file.originalname.split('.')[0] + '-' + Date.now() + path.extname(file.originalname);
        console.log(filename, "sdffd");

        callback(null, filename);
    }
});
// Multer function
var upload = multer({ storage: storage }).single('Resume');




module.exports.addFile = function (req, res, next) {
    console.log("hello");
    upload(req, res, (err) => {
        if (err) {
            console.log(err);
            res.json({ data: null });
        }
        else {
            console.log(req.file.filename);
            res.json({ "status": 200, filename: req.file.filename });
        }
    });
}


module.exports.getJobPosts = function (req, res, next) {
    offerschm.find({}).then(docs => {
        console.log(docs);
        res.json({ "status": 200, data: docs })
    })
        .catch((err) => {
            res.json({ "status": 404 });
            rs.end(err);
        })
}

module.exports.getEmpPosts = function (req, res, next) {
    upldspec.find({}).then(docs => {
        console.log(docs);
        res.json({ "status": 200, data: docs })
    })
        .catch((err) => {
            res.json({ "status": 404 });
            rs.end(err);
        })
}



module.exports.hireEmp = function (req, res, next) {

    jwt.verify(req.token, 'TopSecret', (err, authdata) => {
        if (err) {
            res.json({ "status": 403, msg: { str1: 'Session Expired or Unauthorized access', str2: '' } });
        }
        else {
            console.log(authdata,"fddgfdgfdg",req.body);
            suserschm.findOneAndUpdate({ "user_details": req.body.resume_id }, { $push: { 'offers': authdata.UserId } })
            .then((data)=>{
                res.json({status:200});
            })
            .catch((err) => {
                res.json({ "status": 404 });
                rs.end(err);
            })
        }
    });
}


module.exports.getCallLetters = function (req, res, next) {

    jwt.verify(req.token, 'TopSecret', (err, authdata) => {
        if (err) {
            res.json({ "status": 403, msg: { str1: 'Session Expired or Unauthorized access', str2: '' } });
        }
        else {
            suserschm.findOne({"_id" : authdata.UserId })
            .populate('offers')
            .then((docs)=>{
                console.log(docs);
                res.json({status:200,data:docs});

            })
            .catch((err) => {
                res.json({ "status": 404 });
                rs.end(err);
            })
        }

    })

}


module.exports.searchSkill = function (req, res, next) {

    console.log(req.body, "sdadsdsd");

    // console.log("conso", condition);
    offerschm.find({"jtitle": { $regex: req.body.Search, $options: 'i m' }})
        .then((docs) => {
            if (docs.length !== 0) {

                res.json({ "status": 200, data: docs });
            }
            else {
                res.json({ "status": 404 });
            }
        })
        .catch(err => {
            res.send(err);
        });

}



module.exports.forgotPass = async function (req) {
    let token = await passToken.generateToken(req.body.email);

    let account = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'sdd.sdei@gmail.com',
            pass: 'SDEI#2017chdSDD'
        }
    });


    const mailOptions = {
        from: 'sdd.sdei@gmail.com', // sender address
        to: req.body.email, // list of receivers
        subject: 'Reset Password', // Subject line
        html: `<h3>Your password reset token is valid for two hours only! Don't share it with anyone.<h3>
            <br/><a href="http://localhost:4200/forgotpassword?token=${token}" target="_blank">Change Password<a>`
    };

    let info = await transporter.sendMail(mailOptions);
    if (info) {
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    }
} 
 


module.exports.resetPass =function (req,res) {
    jwt.verify(req.token,'TopSecret',(err,authdata)=>{
        if(err)
        {
            res.json({"status":403,msg: {str1:'Session Expired or Unauthorized access', str2: ''}});
        }
        else
        {

            Users.findOneAndUpdate({email:authdata.email},{Password:req.body.password},(err,data)=>{
                if(err)
                {
                    res.json({"status":403,msg: {str1:'Failed', str2: ''}});
                }
                else
                {
                    res.json({"status":200,msg: {str1:'Password Updated SuccessFully  ', str2: ''}});
                }
            })
        }
    })
    
}

