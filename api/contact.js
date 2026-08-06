import { Resend } from 'resend';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const rawKey = process.env.RESEND_API_KEY || '';
  const apiKey = rawKey.trim().replace(/^["']|["']$/g, '');

  if (!apiKey) {
    console.error('[Resend Error]: RESEND_API_KEY environment variable is missing.');
    return res.status(500).json({ error: 'RESEND_API_KEY environment variable is missing on Vercel.' });
  }

  const resend = new Resend(apiKey);

  try {
    let primaryFrom = process.env.RESEND_FROM_EMAIL || 'Mohammad Atifuddin <contact@atifuddin.dev>';
    if (primaryFrom.includes('@gmail.com')) {
      primaryFrom = 'Mohammad Atifuddin <contact@atifuddin.dev>';
    }

    // Try root domain, send subdomain, and onboarding fallback
    const candidateFroms = [
      primaryFrom,
      'Mohammad Atifuddin <contact@send.atifuddin.dev>',
      'Portfolio Form <onboarding@resend.dev>'
    ];

    let notificationData = null;
    let notificationError = null;
    let successfulFrom = null;

    for (const fromAddress of candidateFroms) {
      try {
        const res = await resend.emails.send({
          from: fromAddress,
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

        if (!res.error) {
          notificationData = res.data;
          successfulFrom = fromAddress;
          notificationError = null;
          break;
        } else {
          notificationError = res.error;
          console.warn(`[Resend Fallback]: ${fromAddress} failed: ${res.error.message}`);
        }
      } catch (err) {
        notificationError = err;
        console.warn(`[Resend Fallback Exception]: ${fromAddress} threw error: ${err.message}`);
      }
    }

    if (!notificationData) {
      console.error('[Resend Final Error]: All sender candidates failed:', notificationError);
      return res.status(500).json({ error: notificationError?.message || 'Failed to deliver notification email.' });
    }

    console.log(`[Resend Success]: Delivered notification (ID: ${notificationData?.id}) using ${successfulFrom} to uddinatif34@gmail.com`);

    // 2. Auto-reply to visitor from the successful sender address
    try {
      const autoReplyRes = await resend.emails.send({
        from: successfulFrom,
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
    return res.status(500).json({ error: error.message || 'Internal server error.' });
  }
}
