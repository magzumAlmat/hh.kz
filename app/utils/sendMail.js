const nodemailer = require('nodemailer');

// Создаем транспорт для отправки писем через Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'olzhaszholayev@gmail.com', // Замените на свой адрес электронной почты Gmail
    pass: 'hhcopsreyklsjuzh' // Замените на свой пароль от электронной почты Gmail
  }
});

// Определяем функцию для отправки сообщения
// function sendEmail(code) {
//   const mailOptions = {
//     from: 'olzhaszholayev@gmail.com', 
//     to: 'almat.magzum@gmail.com', 
//     subject: 'Тестовое сообщение',
//     text: 'Привет, это тестовое сообщение!'+code 
//   };


function sendEmail(to,subject,text) {
    const mailOptions = {
      from: 'olzhaszholayev@gmail.com', 
      to: to, 
      subject: subject,
      text: text
    };
  // Отправляем письмо
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email отправлен: ' + info.response);
    }
  });
}

// Вызываем функцию для отправки сообщения
module.exports=sendEmail;