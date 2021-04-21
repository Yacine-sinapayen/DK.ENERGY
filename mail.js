// const nodemailer = require ('nodemailer');
// const mailGun = require ('nodemailer-mailgun-transport')

// const auth = {
//     auth:{
//         api_key:'',
//         domain:''
//     }
// };

// const transporter = nodemailer.createTransport(mailGun(auth));

// //step 4
// const sendMail = (email, subject, text, cb) => {
//     const mailOptions = {
//         from: email,
//         to: 'dk.energy.recrutement@gmail.com',
//         subject,
//         text
//     };
    
//     transporter.sendMail(mailOptions, function(error, data){
//         if(error){
//            return cb(error, null);
//         }
//             return cb(null, data);    
//     });
// }

// module.exports = sendMail;

