var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vissnukarthik@mail.com',
    pass: '*********'
  }
});

  var mailOptions = {
  from: 'vissnukarthik@mail.com',
  to: 'vissnukarthik.ec20@gmail.com', 
  subject: 'Sending Email using Node.js',
  text: 'hi how r u ??'
};


transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});