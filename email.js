import nodemailer from "nodemailer";

var transporter = nodemailer.createTransport({
  host: "digital-abundance.hr",
  port: 465,
  secure: true,
  auth: {
    user: "trokut@digital-abundance.hr",
    pass: "trokut123",
  },
});

var mailOptions = {
  from: "trokut@digital-abundance.hr",
  to: "antun91@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
