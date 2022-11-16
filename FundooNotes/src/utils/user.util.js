const nodemailer = require('nodemailer')
const {google} = require('googleapis')


const CLIENT_ID='383350750956-p6m5bmcp7e8bs2j2bls35o7c5rloo0m4.apps.googleusercontent.com'
const CLIENT_SECRET='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'
const REDIRECT_URI='https://developers.google.com/oauthplayground'
const REFRESH_TOKEN='1//04wlGrXrvcZU3CgYIARAAGAQSNwF-L9IrvW395EXWfio0y_m5dISfVmRYLzvys_HPIpIkrm7rTjUNOdpc5K_flrqODegMiKzS-tQ'

const oAuth2Client =new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URI)
oAuth2Client.setCredentials({refresh_token:REFRESH_TOKEN})


export async function sendMail(email,token){
 try{
   const accessToken=await oAuth2Client.getAccessToken()
   const transport = nodemailer.createTransport({
    service:'gmail',
    auth:{
        type:'OAuth2',
        user:'kundanvkamble358@gmail.com',
        clientId: CLIENT_ID,
        clientSecret:CLIENT_SECRET,
       accessToken:accessToken,
        refreshToken:REFRESH_TOKEN
    }
   })
console.log("email======",email );
   const mailOption={
    
    from:'KUNDAN KAMBLE <kundanvkamble358@gmail.com>',
    to: email,
    subject:'Hello from Gmail using api',
    text:'Hello from Gmail email using api',
    html:`<h1>Hello,<br><br>Click on given link to reset your password!</h1><br><h1>Link:><a href="http://localhost:${process.env.APP_PORT}/api/v1/users/${token}">click here</a></h1>`
   };
   console.log("mailOption====" ,mailOption)

   const result = await transport.sendMail(mailOption);
   return result;


 } catch(error){
    return error;
 }
}

