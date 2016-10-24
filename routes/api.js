require('dotenv').config();
var express = require('express');
var router = express.Router();
var sendgrid  = require('sendgrid')(process.env.SENDGRID);

router.post('/sendEmail', function(req,res,next) {
  console.log("HIT THE SEND EMAIL ROUTE", req.body);

  var payload   = {
    to      : process.env.EMAIL,
    from    : req.body.email,
    subject : 'Email From Portfolio Website',
    text    : 'From: ' + req.body.name + '\n' + req.body.message
  }

  sendgrid.send(payload, function(err, json) {
    if (err) {
      console.error('sendgrid error in sendEmail router',err);
      res.status(503).json({error: err, error_message: "Form fields not filled out correctly"});
    } else {
      console.log(json);
      res.status(200).json(json);
    }
  });

});

module.exports = router;
