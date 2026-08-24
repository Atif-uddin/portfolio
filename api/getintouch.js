import { Resend } from 'resend';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  const rawKey = process.env.RESEND_API_KEY || '';
  const apiKey = rawKey.trim().replace(/^["']|["']$/g, '');

  if (!apiKey) {
    console.error('[Resend Error]: RESEND_API_KEY environment variable is missing.');
    return res.status(500).json({ error: 'RESEND_API_KEY is missing on server.' });
  }

  const resend = new Resend(apiKey);

  try {
    let primaryFrom = process.env.RESEND_FROM_EMAIL || 'Mohammad Atifuddin <contact@atifuddin.dev>';
    if (primaryFrom.includes('@gmail.com')) {
      primaryFrom = 'Mohammad Atifuddin <contact@atifuddin.dev>';
    }

    const candidateFroms = [
      primaryFrom,
      'Mohammad Atifuddin <contact@send.atifuddin.dev>',
      'Portfolio Form <onboarding@resend.dev>'
    ];

    const emailSubject = subject?.trim() ? `[Portfolio] ${subject.trim()}` : `New Portfolio Message from ${name}`;

    let notificationData = null;
    let notificationError = null;
    let successfulFrom = null;

    for (const fromAddress of candidateFroms) {
      try {
        const resEmail = await resend.emails.send({
          from: fromAddress,
          to: ['uddinatif34@gmail.com'],
          replyTo: email,
          reply_to: email,
          subject: emailSubject,
          text: `You received a new get in touch message:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject || 'N/A'}\n\nMessage:\n${message}`,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 24px; color: #1e293b; background-color: #f8fafc; border-radius: 12px; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0;">
              <div style="margin-bottom: 20px; border-bottom: 2px solid #10b981; padding-bottom: 12px;">
                <h2 style="color: #0f172a; margin: 0; font-size: 20px;">New Portfolio Inquiry</h2>
                <p style="color: #64748b; margin: 4px 0 0 0; font-size: 13px;">Received from atifuddin.dev Get In Touch form</p>
              </div>
              
              <div style="background-color: #ffffff; padding: 18px; border-radius: 8px; border: 1px solid #e2e8f0; margin-bottom: 16px;">
                <p style="margin: 0 0 8px 0; font-size: 14px;"><strong>From:</strong> ${name}</p>
                <p style="margin: 0 0 8px 0; font-size: 14px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #10b981; text-decoration: none;">${email}</a></p>
                ${subject ? `<p style="margin: 0; font-size: 14px;"><strong>Subject:</strong> ${subject}</p>` : ''}
              </div>

              <div style="background-color: #ffffff; padding: 18px; border-radius: 8px; border: 1px solid #e2e8f0;">
                <p style="margin: 0 0 8px 0; font-size: 14px; color: #64748b; font-weight: 600; text-transform: uppercase; font-size: 11px; letter-spacing: 0.5px;">Message Content:</p>
                <div style="color: #334155; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</div>
              </div>

              <div style="margin-top: 20px; text-align: center; font-size: 12px; color: #94a3b8;">
                Sent via Mohammad Atifuddin Portfolio • <a href="https://atifuddin.dev" style="color: #94a3b8;">atifuddin.dev</a>
              </div>
            </div>
          `,
        });

        if (!resEmail.error) {
          notificationData = resEmail.data;
          successfulFrom = fromAddress;
          notificationError = null;
          break;
        } else {
          notificationError = resEmail.error;
          console.warn(`[Resend Fallback]: ${fromAddress} failed: ${resEmail.error.message}`);
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

    // 2. Auto-reply confirmation to visitor
    try {
      const autoReplyRes = await resend.emails.send({
        from: successfulFrom,
        to: [email],
        subject: subject?.trim() ? `Received: ${subject.trim()}` : 'Thank you for getting in touch!',
        text: `Hi ${name},\n\nThank you for reaching out through my portfolio. I have received your message regarding "${subject || 'General Inquiry'}" and will get back to you as soon as possible.\n\nBest regards,\nMohammad Atifuddin\nFull Stack Developer • atifuddin.dev`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 24px; color: #1e293b; background-color: #f8fafc; border-radius: 12px; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0;">
            <div style="margin-bottom: 20px; border-bottom: 2px solid #10b981; padding-bottom: 12px;">
              <h2 style="color: #0f172a; margin: 0; font-size: 20px;">Thank you for getting in touch!</h2>
            </div>
            <p style="font-size: 14px; color: #334155; line-height: 1.6;">Hi <strong>${name}</strong>,</p>
            <p style="font-size: 14px; color: #334155; line-height: 1.6;">
              Thank you for reaching out through my portfolio. I have received your message regarding <strong>${subject || 'General Inquiry'}</strong> and will review it and get back to you as soon as possible.
            </p>
            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
            <p style="font-size: 14px; color: #334155; margin: 0;">Best regards,</p>
            <p style="font-size: 14px; color: #0f172a; font-weight: 700; margin: 4px 0 0 0;">Mohammad Atifuddin</p>
            <p style="font-size: 12px; color: #64748b; margin: 2px 0 0 0;">Full Stack Developer • <a href="https://atifuddin.dev" style="color: #10b981; text-decoration: none;">atifuddin.dev</a></p>
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
    console.error('Server error during get in touch submission:', error);
    return res.status(500).json({ error: error.message || 'Internal server error.' });
  }
}
