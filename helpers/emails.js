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
    const { name,email,token} = data
    // Send the email
    await transport.sendMail({
        from: 'RealEstate.com',
        to: data.email,
        subject: 'Comfirm your account in RealEstate.com',
        text: 'Comfirm your account in RealEstate.com',
        html: `

              <p> Hi ${data.name},

                We just need to verify your email address before you can access RealEstate.com.

                Verify your email address with the following link:
                <a href=""> confirm your account </a> </p>

                <p> If you did not make this request then please ignore this email> </p>

                <p> Thanks! The RealEstate.com team </p>
              `
    })

}


export {
  emailRecord
}
