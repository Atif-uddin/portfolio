import { Resend } from 'resend';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[Resend Error]: RESEND_API_KEY environment variable is missing.');
    return res.status(500).json({ error: 'Server misconfiguration: RESEND_API_KEY is missing in Vercel environment variables.' });
  }

  const resend = new Resend(apiKey);

  try {
    let senderEmail = process.env.RESEND_FROM_EMAIL || 'Mohammad Atifuddin <contact@atifuddin.dev>';
    if (senderEmail.includes('@gmail.com')) {
      senderEmail = 'Mohammad Atifuddin <contact@atifuddin.dev>';
    }

    // 1. Send notification email to Atifuddin
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

    // 2. Auto-reply to visitor (Safely wrapped)
    try {
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

      if (autoReplyRes?.error) {
        console.warn('[Resend Auto-Reply Warning]:', autoReplyRes.error.message);
      }
    } catch (autoReplyErr) {
      console.warn('[Resend Auto-Reply Exception]:', autoReplyErr?.message || autoReplyErr);
    }

    return res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Server error during contact form submission:', error);
    return res.status(500).json({ error: 'Internal server error.' });
  }
}
