import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Since Vite uses ES modules by default, we recreate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Resend with your API key
// You must set RESEND_API_KEY in your .env file
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors());
app.use(express.json());

// API Endpoint for the contact form
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    let senderEmail = process.env.RESEND_FROM_EMAIL || 'Mohammad Atifuddin <contact@atifuddin.dev>';
    if (senderEmail.includes('@gmail.com')) {
      senderEmail = 'Mohammad Atifuddin <contact@atifuddin.dev>';
    }

    // 1. Send notification email to Atifuddin (with replyTo set to visitor's email)
    const { data: notificationData, error: notificationError } = await resend.emails.send({
      from: senderEmail,
      to: ['uddinatif34@gmail.com'],
      replyTo: email,
      reply_to: email,
      subject: `New Portfolio Message from ${name}`,
      text: `You received a new contact form message:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #10b981;">New Portfolio Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <hr style="border: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Message:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; border-left: 4px solid #10b981; white-space: pre-wrap;">${message}</div>
        </div>
      `,
    });

    if (notificationError) {
      console.error('[Resend Error]: Failed to send notification email:', notificationError);
      return res.status(500).json({ error: notificationError.message || 'Failed to send message.' });
    }

    console.log(`[Resend Success]: Delivered notification (ID: ${notificationData?.id}) for message from ${name} (${email}) to uddinatif34@gmail.com`);

    // 2. Auto-reply to visitor from your verified domain
    const autoReplyRes = await resend.emails.send({
      from: senderEmail,
      to: [email],
      subject: 'Thank you for reaching out!',
      text: `Hi ${name},\n\nThank you for reaching out through my portfolio. I have received your message and will get back to you as soon as possible.\n\nBest regards,\nMohammad Atifuddin`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #10b981;">Thank you for reaching out!</h2>
          <p>Hi ${name},</p>
          <p>Thank you for reaching out through my portfolio. I have received your message and will get back to you as soon as possible.</p>
          <br/>
          <p>Best regards,<br/><strong>Mohammad Atifuddin</strong></p>
        </div>
      `,
    });

    if (autoReplyRes.error) {
      console.warn('[Resend Auto-Reply Warning]:', autoReplyRes.error.message);
    } else {
      console.log(`[Resend Success]: Auto-reply (ID: ${autoReplyRes.data?.id}) delivered to ${email}`);
    }

    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Server error during contact form submission:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

// Serve static files from the Vite build directory in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
