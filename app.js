var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vissnukarthik.ec20@bitsathy.ac.in',
    pass: 'A%93969100'
  }
});

  var mailOptions = {
  from: 'vissnukarthik.ec20@bitsathy.ac.in',
  to: 'vissnukarthik.ec20@gmail.com', 
  subject: 'Sending Email using Node.js',
  text: 'hi da enna pandra'
};


transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});