import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nombre, email, whatsapp, empresa, tipo, mensaje } = body;

    if (!nombre || !email || !tipo || !mensaje) {
      return NextResponse.json({ error: "Campos requeridos faltantes" }, { status: 400 });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      // Log but don't fail — allows testing without Resend configured
      console.warn("RESEND_API_KEY not configured — email not sent");
      return NextResponse.json({ ok: true, warning: "Email not configured" });
    }

    const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #0a0a0a; color: #f5f5f5; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
    .header { background: linear-gradient(135deg, #C9A227, #9A7A1A); padding: 30px; border-radius: 12px 12px 0 0; text-align: center; }
    .header h1 { color: #000; margin: 0; font-size: 22px; }
    .body { background: #111; padding: 30px; border-radius: 0 0 12px 12px; border: 1px solid #2a2a2a; border-top: none; }
    .field { margin-bottom: 16px; }
    .label { color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; }
    .value { color: #f5f5f5; font-size: 15px; padding: 12px; background: #0a0a0a; border-radius: 8px; border: 1px solid #2a2a2a; }
    .message { white-space: pre-wrap; line-height: 1.6; }
    .footer { text-align: center; margin-top: 24px; color: #6b7280; font-size: 12px; }
    .cta { display: inline-block; margin-top: 16px; padding: 12px 24px; background: #C9A227; color: #000; font-weight: bold; border-radius: 999px; text-decoration: none; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🌟 Nuevo Lead — Jesus López</h1>
    </div>
    <div class="body">
      <div class="field">
        <div class="label">Nombre</div>
        <div class="value">${nombre}</div>
      </div>
      <div class="field">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:${email}" style="color:#C9A227">${email}</a></div>
      </div>
      ${whatsapp ? `<div class="field"><div class="label">WhatsApp</div><div class="value"><a href="https://wa.me/${whatsapp.replace(/\D/g, '')}" style="color:#C9A227">${whatsapp}</a></div></div>` : ""}
      ${empresa ? `<div class="field"><div class="label">Empresa</div><div class="value">${empresa}</div></div>` : ""}
      <div class="field">
        <div class="label">Tipo de Consulta</div>
        <div class="value">${tipo}</div>
      </div>
      <div class="field">
        <div class="label">Mensaje</div>
        <div class="value message">${mensaje}</div>
      </div>
      <div style="text-align:center;margin-top:24px">
        ${whatsapp ? `<a href="https://wa.me/${whatsapp.replace(/\D/g, '')}?text=Hola%20${encodeURIComponent(nombre)}%2C%20soy%20Jesus%20L%C3%B3pez" class="cta">Responder por WhatsApp</a>` : `<a href="mailto:${email}" class="cta">Responder por Email</a>`}
      </div>
    </div>
    <div class="footer">
      Lead recibido desde jesuslopezoficial.com
    </div>
  </div>
</body>
</html>
    `;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Jesus López <noreply@jesuslopezoficial.com>",
        to: ["jesuslopezcruz3004@gmail.com"],
        subject: `🌟 Nuevo lead: ${nombre} — ${tipo}`,
        html: htmlBody,
        reply_to: email,
      }),
    });

    if (!resendResponse.ok) {
      const error = await resendResponse.text();
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Error sending email" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
