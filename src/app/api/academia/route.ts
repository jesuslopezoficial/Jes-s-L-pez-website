import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

const body = {
  nombre: formData.get("nombre")?.toString() || "",
  telefono: formData.get("telefono")?.toString() || "",
  email: formData.get("email")?.toString() || "",
  ciudad: formData.get("ciudad")?.toString() || "",
  nivel: formData.get("nivel")?.toString() || "",
  objetivo: formData.get("objetivo")?.toString() || "",
};
    const {
      nombre,
      telefono,
      email,
      ciudad,
      nivel,
      objetivo,
    } = body;

    if (!nombre || !telefono || !email || !ciudad || !nivel) {
      return NextResponse.json(
        { error: "Campos requeridos faltantes" },
        { status: 400 }
      );
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      console.warn("RESEND_API_KEY not configured");
      return NextResponse.json(
        { ok: true, warning: "Email not configured" }
      );
    }

    const htmlBody = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
        </head>

        <body style="font-family:Arial,sans-serif;background:#0a0a0a;color:#ffffff;padding:30px;">

          <div style="max-width:600px;margin:0 auto;background:#111111;border:1px solid #C9A227;border-radius:12px;overflow:hidden;">

            <div style="background:#C9A227;color:#000000;padding:25px;text-align:center;">
              <h1 style="margin:0;">
                🎓 Nuevo Registro
              </h1>

              <p style="margin:8px 0 0;">
                101 BARBER ACADEMY
              </p>
            </div>

            <div style="padding:30px;">

              <p>
                <strong>Masterclass:</strong><br/>
                20 de octubre de 2026
              </p>

              <p>
                <strong>Nombre:</strong><br/>
                ${nombre}
              </p>

              <p>
                <strong>Teléfono / WhatsApp:</strong><br/>
                ${telefono}
              </p>

              <p>
                <strong>Email:</strong><br/>
                ${email}
              </p>

              <p>
                <strong>Ciudad:</strong><br/>
                ${ciudad}
              </p>

              <p>
                <strong>Nivel:</strong><br/>
                ${nivel}
              </p>

              ${
                objetivo
                  ? `
                    <p>
                      <strong>Objetivo:</strong><br/>
                      ${objetivo}
                    </p>
                  `
                  : ""
              }

              <div style="text-align:center;margin-top:30px;">
                <a
                  href="https://wa.me/${telefono.replace(/\D/g, "")}"
                  style="
                    display:inline-block;
                    background:#C9A227;
                    color:#000000;
                    padding:14px 24px;
                    text-decoration:none;
                    font-weight:bold;
                    border-radius:6px;
                  "
                >
                  CONTACTAR POR WHATSAPP
                </a>
              </div>

            </div>

            <div style="padding:20px;text-align:center;color:#888888;font-size:12px;">
              Lead recibido desde 101 Barber Academy
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
        subject: `🎓 101 Barber Academy — ${nombre}`,
        html: htmlBody,
        reply_to: email,
      }),
    });

    if (!resendResponse.ok) {
      const error = await resendResponse.text();

      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "Error sending email" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ok: true,
      message: "Registro recibido",
    });

  } catch (error) {
    console.error("Academia API error:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
