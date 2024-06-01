"use server"

import {Resend} from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY);
console.log({resend_api:process.env.RESEND_API_KEY})

const sendEmail = async (formData:FormData) => {
     const senderEmail = formData.get('senderEmail') as string;
     const message = formData.get('message') as string 

     try{
     await  resend.emails.send({
             from:'Acme <onboarding@resend.dev>',
             to:['saeid.almahdi@gmail.com'],
             subject:'Message from contact form ',
             reply_to:senderEmail,
             text:message
          })

     } catch(error:unknown){
        console.log("************Resend Error***********",error)
     }
}

export default sendEmail