import { NextRequest, NextResponse } from "next/server";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

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

    const safeNombre = escapeHtml(nombre);
    const safeEmail = escapeHtml(email);
    const safeWhatsapp = whatsapp ? escapeHtml(whatsapp) : "";
    const safeEmpresa = empresa ? escapeHtml(empresa) : "";
    const safeTipo = escapeHtml(tipo);
    const safeMensaje = escapeHtml(mensaje);
    const whatsappDigits = whatsapp ? whatsapp.replace(/\D/g, "") : "";

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
        <div class="value">${safeNombre}</div>
      </div>
      <div class="field">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:${safeEmail}" style="color:#C9A227">${safeEmail}</a></div>
      </div>
      ${safeWhatsapp ? `<div class="field"><div class="label">WhatsApp</div><div class="value"><a href="https://wa.me/${whatsappDigits}" style="color:#C9A227">${safeWhatsapp}</a></div></div>` : ""}
      ${safeEmpresa ? `<div class="field"><div class="label">Empresa</div><div class="value">${safeEmpresa}</div></div>` : ""}
      <div class="field">
        <div class="label">Tipo de Consulta</div>
        <div class="value">${safeTipo}</div>
      </div>
      <div class="field">
        <div class="label">Mensaje</div>
        <div class="value message">${safeMensaje}</div>
      </div>
      <div style="text-align:center;margin-top:24px">
        ${whatsappDigits ? `<a href="https://wa.me/${whatsappDigits}?text=Hola%20${encodeURIComponent(nombre)}%2C%20soy%20Jesus%20L%C3%B3pez" class="cta">Responder por WhatsApp</a>` : `<a href="mailto:${safeEmail}" class="cta">Responder por Email</a>`}
      </div>
    </div>
    <div class="footer">
      Lead recibido desde jesuslopez.com
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
        from: "Jesus López <noreply@jesuslopez.com>",
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
