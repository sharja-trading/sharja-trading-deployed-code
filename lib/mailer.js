import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const mailer = async ({ name, email, phone, message, subject }) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "Green Power Systems <contact@sharjatrading.com>", // must be verified in Resend
      to: "contact@sharjatrading.com",
      reply_to: email, // replies go back to the sender
      subject: subject || `New message from ${name}`,
      html: `
        <h2>📩 New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error("Email sending error:", error);
      throw new Error("Email could not be sent.");
    }

    console.log("Email sent:", data);
    return data;
  } catch (err) {
    console.error("Unexpected error:", err);
    throw new Error("Email could not be sent.");
  }
};
