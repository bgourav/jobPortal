var express = require('express');
var appcontrol = require('../controller/appcontroller');
var router = express.Router();


/* GET users listing. */
router.post('/sregister',appcontrol.screateUser);
router.post('/pregister',appcontrol.pcreateUser);
router.post('/slogin', appcontrol.sloginUser);
router.post('/plogin', appcontrol.ploginUser);
router.post('/offerjobs', verifyToken,appcontrol.createOffer);
router.post('/specupload', verifyToken,appcontrol.uploadSpec);
router.post('/fileupload',appcontrol.addFile);
router.get('/offerPost',appcontrol.getJobPosts);
router.get('/empPost',appcontrol.getEmpPosts);
router.post('/hire',verifyToken,appcontrol.hireEmp);
router.get('/getinvi',verifyToken,appcontrol.getCallLetters);
router.post('/searching',appcontrol.searchSkill);
router.post('/passChangeReq',appcontrol.forgotPass);
router.post('/resetpass',verifyToken,appcontrol.resetPass);




function verifyToken(req,res,next)
{
    const bearerHeader = req.headers['authorization'];
    console.log(bearerHeader);
    if(typeof bearerHeader !== undefined)
    {
        
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token=bearerToken;
        console.log(req.token);
        next();
    }
    else{
        res.json({"status":403,msg: {str1:'Session Expired or Unauthorized access', str2: ''}})
    }
}


module.exports = router;