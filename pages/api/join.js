import nodemailer from "nodemailer";

// Helper function to validate email
const isValidEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const joinHandler = async (req, res) => {
  const { email } = req.body;

  // Validate the email
  if (!email || !isValidEmail(email)) {
    return res.status(400).json({ success: false, error: "Invalid email address" });
  }

  // Check if environment variables are set
  if (!process.env.GMAIL_USERNAME || !process.env.GMAIL_PASSWORD) {
    return res.status(500).json({ success: false, error: "Email configuration error" });
  }

  // Create a transporter object using the default SMTP transport
  let transporter;
  try {
    transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_PASSWORD,
      },
    });
  } catch (err) {
    console.error('Error creating transporter:', err);
    return res.status(500).json({ success: false, error: "Failed to configure email transporter" });
  }

  // Define email content
  const htmlMail = `
    <div style="border: 1px solid #f0f0f0; border-radius: 10px; padding: 3em; margin: 0 auto;">
      <h2 style="color:#00f;font-weight: bold;">Gracias por acompañarnos en esta aventura:</h2>
      <p style="color:#000;">Hemos añadido tu correo a la lista de espera para el proyecto VERKO. Sólo recibirás las notificaciones necesarias.</p>
      <br></br>
      <table style="font-size: 16px; width: 100%;">
        <tr>
          <td style="width: 50%;"><strong>Email:</strong></td>
          <td>${email}</td>
        </tr>
      </table>
      <hr>
      <p><a href="https://zuyux.com" target="_blank">zuyux.com</a></p>
    </div>
  `;

  const mailOptions = {
    from: "ZUYUX <fabohax@gmail.com>",
    to: [
      'fabohax@gmail.com',
      'iespinozae@uni.pe',
      'jriojasm@uni.pe',
      'arquitecto.camborda@gmail.com',
      'pdroroman@gmail.com',
      email
    ],
    subject: `✨ ${email} joined Verko waitlist`,
    html: htmlMail,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: `${email}, we got your request. Thanks for applying.` });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: "Failed to send email" });
  }
};

export default joinHandler;
