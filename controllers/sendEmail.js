const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "damon.lindgren49@ethereal.email",
      pass: "WBYnXb5VQu3QsuGfSe",
    },
  });

  let info = await transporter.sendMail({
    from: '"CJ" <cj@gmail.com>',
    to: "shit@exmaple.com",
    subject: "hello",
    text: "shit",
    html: "<h2>Umaaaa</h2>",
  });
  res.send(info);
};

module.exports = sendEmail;
