import sgMail from "@sendgrid/mail";

export default async function handler(req, res) {
  if (req.method === "POST") {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Replace http:// and https:// in the message to prevent auto-linking
message = message.replace(/http:\/\/|https:\/\//g, "http(s)://");

    const { name, email, subject, message } = req.body;

    const msg = {
      to: "oliver.n.winfeild+benjamiz@gmail.com",
      from: email,
      subject: `New Message From ${name}: ${subject}`,
      text: message,
      html: `<strong>${message}</strong>`,
    };

    try {
      await sgMail.send(msg);
      res.status(200).send("Email sent successfully.");
    } catch (error) {
      console.error(error);
      res.status(500).send("An error occurred while sending the email.");
    }
  } else {
    res.status(405).send("Method not allowed");
  }
}
