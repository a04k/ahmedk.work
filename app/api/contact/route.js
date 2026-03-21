import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import config from '@/config/config';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Extract raw email address from config ('mailto:contact@ahmedk.dev' -> 'contact@ahmedk.dev')
    const toEmail = config.links.email.replace('mailto:', '');

    // Send email using Resend to your real inbox since contact@ is just a forwarder
    // Note: Resend requires 'from' to be a verified domain address. The sender's email is shown
    // in the display name and set as reply_to so you can reply directly to them from Gmail.
    const data = await resend.emails.send({
      from: `"${name} (${email})" <onboarding@resend.dev>`,
      to: ['63ahmedkhaled@gmail.com'],
      reply_to: email,
      subject: `New message from ${name} — ahmedk.dev`,
      html: `
        <!DOCTYPE html>
        <html>
        <body style="margin:0;padding:0;background:#0f0f0f;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f0f0f;padding:40px 20px;">
            <tr>
              <td align="center">
                <table width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;background:#1a1a1a;border-radius:16px;overflow:hidden;border:1px solid #2a2a2a;">
                  <tr>
                    <td style="padding:32px 36px 24px;border-bottom:1px solid #2a2a2a;">
                      <p style="margin:0 0 6px 0;font-size:12px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#666;">ahmedk.dev — contact form</p>
                      <h1 style="margin:0;font-size:22px;font-weight:600;color:#fff;">New message from ${name}</h1>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:24px 36px;border-bottom:1px solid #2a2a2a;">
                      <p style="margin:0 0 8px 0;font-size:13px;font-weight:600;color:#e0e0e0;">${name}</p>
                      <a href="mailto:${email}" style="font-size:13px;color:#888;text-decoration:none;">${email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:24px 36px 32px;">
                      <p style="margin:0 0 12px 0;font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#555;">Message</p>
                      <p style="margin:0;font-size:15px;line-height:1.7;color:#bbb;white-space:pre-wrap;">${message}</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:16px 36px;background:#141414;border-top:1px solid #2a2a2a;">
                      <p style="margin:0;font-size:12px;color:#444;">Reply to this email to respond directly to ${name}.</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });


    if (data.error) {
      return NextResponse.json({ error: data.error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'An error occurred while sending the email. Check your Resend API Key.' },
      { status: 500 }
    );
  }
}
