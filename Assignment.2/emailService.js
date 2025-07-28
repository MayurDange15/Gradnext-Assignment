require("dotenv").config();
const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

const mailGenerator = new Mailgen({
  theme: "default",
  product: {
    name: "GradNext",
    link: "https://gradnext.com",
  },
});

async function sendInitialEmail(user) {
  const email = {
    body: {
      name: user.name,
      intro: "Thanks for registering for GradNext!",
      action: {
        instructions: "To complete your enrollment, click below:",
        button: {
          color: "#346df1",
          text: "Pay Now",
          link: `https://gradnext.com/pay/${user.id}`,
        },
      },
      outro: "If you have any questions, just reply to this email.",
    },
  };

  const emailBody = mailGenerator.generate(email);
  const plainText = mailGenerator.generatePlaintext(email);

  const message = {
    from: process.env.MAIL_USER,
    to: user.email,
    subject: "Welcome to GradNext – Confirm Your Spot",
    html: emailBody,
    text: plainText,
  };

  return transporter.sendMail(message);
}

async function sendReminderEmail(user) {
  const email = {
    body: {
      name: user.name,
      intro: "Just a reminder – your spot at GradNext is still waiting!",
      action: {
        instructions: "Complete your registration here:",
        button: {
          color: "#FFA500",
          text: "Complete Enrollment",
          link: `https://gradnext.com/pay/${user.id}`,
        },
      },
      outro: "We’re here if you need any help!",
    },
  };

  const emailBody = mailGenerator.generate(email);
  const plainText = mailGenerator.generatePlaintext(email);

  const message = {
    from: process.env.MAIL_USER,
    to: user.email,
    subject: "⏰ Reminder: Finish Your GradNext Enrollment",
    html: emailBody,
    text: plainText,
  };

  return transporter.sendMail(message);
}

async function sendFinalEmail(user) {
  const email = {
    body: {
      name: user.name,
      intro: "This is your final reminder to confirm your spot at GradNext.",
      action: {
        instructions: "Enroll before it’s too late:",
        button: {
          color: "#dc3545",
          text: "Enroll Now",
          link: `https://gradnext.com/pay/${user.id}`,
        },
      },
      outro: "Hope to see you soon. Don’t miss out!",
    },
  };

  const emailBody = mailGenerator.generate(email);
  const plainText = mailGenerator.generatePlaintext(email);

  const message = {
    from: process.env.MAIL_USER,
    to: user.email,
    subject: "⚠️ Final Notice: Secure Your Spot at GradNext",
    html: emailBody,
    text: plainText,
  };

  return transporter.sendMail(message);
}

module.exports = { sendInitialEmail, sendReminderEmail, sendFinalEmail };
