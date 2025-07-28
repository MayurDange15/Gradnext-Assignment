const { Resend } = require("resend");
require("dotenv").config();
const resend = new Resend(process.env.RESEND_API_KEY);
// const resend = new Resend("re_iL4yizTV_84xcuwX14mCCTwAP5csSEacZ");

async function sendInitialEmail(user) {
  return resend.emails.send({
    from: "GradNext <ubtxccerijbznmbsev@xfavaj.com>",
    to: user.email,
    subject: "Welcome to GradNext! Confirm Your Spot",
    html: `<p>Hi ${user.name},</p>
           <p>Thanks for registering! Click below to confirm your participation.</p>
           <p><a href="http://localhost:5173/pay/${user.id}">Pay Now</a></p>`,
  });
}

async function sendReminderEmail(user) {
  return resend.emails.send({
    from: "GradNext <ubtxccerijbznmbsev@xfavaj.com>",
    to: user.email,
    subject: "Reminder: Your GradNext Spot is Waiting!",
    html: `<p>Hi ${user.name},</p>
           <p>This is a friendly reminder to complete your payment and reserve your spot.</p>
           <p><a href="http://localhost:5173/pay/${user.id}">Pay Now</a></p>`,
  });
}

async function sendFinalEmail(user) {
  return resend.emails.send({
    from: "GradNext <ubtxccerijbznmbsev@xfavaj.com>",
    to: user.email,
    subject: "Final Notice: GradNext Registration Closing Soon",
    html: `<p>Hi ${user.name},</p>
           <p>This is your final reminder. Complete payment now or lose your spot.</p>
           <p><a href="http://localhost:5173/pay/${user.id}">Pay Now</a></p>`,
  });
}

module.exports = { sendInitialEmail, sendReminderEmail, sendFinalEmail };
