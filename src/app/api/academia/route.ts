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
        from: "noreply@jesuslopezoficial.com",        to: ["jesuslopezcruz3004@gmail.com"],
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

    const studentEmailHtml = `
<!DOCTYPE html>
<html>
  <body style="margin:0;padding:0;background:#0b0b0b;font-family:Arial,sans-serif;">
    <div style="max-width:600px;margin:0 auto;padding:30px 20px;">
      
      <div style="background:#C9A227;padding:30px;text-align:center;">
        <div style="font-size:42px;">🎓</div>
        <h1 style="margin:10px 0 5px;color:#000;font-size:30px;">
          ¡TU LUGAR ESTÁ RESERVADO!
        </h1>
        <p style="margin:0;color:#000;font-size:18px;">
          101 BARBER ACADEMY
        </p>
      </div>

      <div style="background:#111;border:1px solid #C9A227;padding:35px;color:#fff;">
        <p style="font-size:20px;margin-top:0;">
          Hola <strong>${nombre}</strong>,
        </p>

        <p style="color:#d4d4d4;line-height:1.7;">
          Gracias por registrarte a la Masterclass gratuita de
          <strong style="color:#fff;">101 Barber Academy.</strong>
        </p>

        <p style="color:#d4d4d4;line-height:1.7;">
          Tu registro ha sido recibido correctamente y tu lugar está reservado.
        </p>

        <div style="margin:30px 0;padding:22px;border:1px solid #C9A227;text-align:center;">
          <p style="color:#C9A227;font-weight:bold;margin:0 0 10px;">
            MASTERCLASS GRATUITA
          </p>

          <p style="font-size:22px;font-weight:bold;margin:0;color:#fff;">
            20 DE OCTUBRE DE 2026
          </p>

          <p style="color:#d4d4d4;margin:8px 0 0;">
            EN VIVO
          </p>
        </div>

        <p style="color:#d4d4d4;line-height:1.7;">
          Próximamente recibirás los detalles de acceso y la información necesaria para conectarte a la clase.
        </p>

        <p style="margin-top:30px;color:#fff;">
          Nos vemos en la Masterclass.
        </p>

        <p style="color:#C9A227;font-weight:bold;">
          Jesús López<br />
          101 Barber Academy
        </p>
      </div>

      <div style="padding:20px;text-align:center;color:#777;font-size:12px;">
        Aprende. Practica. Corrige. Domina.
      </div>

    </div>
  </body>
</html>
`;

const studentEmailResponse = await fetch("https://api.resend.com/emails", {
  method: "POST",

  headers: {
    Authorization: `Bearer ${RESEND_API_KEY}`,
    "Content-Type": "application/json",
  },

  body: JSON.stringify({
    from: "101 Barber Academy <noreply@jesuslopezoficial.com>",
    to: [email],
    subject: "🎓 ¡Tu lugar está reservado! — 101 Barber Academy",
    html: studentEmailHtml,
  }),
});

if (!studentEmailResponse.ok) {
  const studentEmailError = await studentEmailResponse.text();
  console.error("Student confirmation email error:", studentEmailError);
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
