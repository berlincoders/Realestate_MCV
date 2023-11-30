import  nodemailer from 'nodemailer';


const emailRecord = async (data) => {

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

//console.log(data);
const {email,name,token} = data;

// send the email
await transport.sendMail({
  from: 'Real Estate.com',
  to: email,
  subject: 'Confirm your account at Real estate.com',
  text: 'Confirm your account at Real estate.com',
  html: `
      <p> Hi ${name}, </p>

      <p> We just need to verify your email address before you can access RealEstate.com </p>
      <p> Verify your email address with the following link:
      <a href=""> Confirm your account</a> </p>

      <p> If you did not make this request then please ignore this email </p>

        `
})


}

export {
  emailRecord
}
