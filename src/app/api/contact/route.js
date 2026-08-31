import nodemailer from 'nodemailer';

const REQUIRED_ENV = ['SMTP_SVR', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASSWORD'];

export async function POST(request) {
    // Sin estas variables nodemailer intenta conectarse a localhost y falla con un
    // ECONNREFUSED poco descriptivo; conviene detectarlo antes.
    const missingEnv = REQUIRED_ENV.filter((key) => !process.env[key]);
    if (missingEnv.length > 0) {
        console.error(`Faltan variables de entorno SMTP: ${missingEnv.join(', ')}`);
        return Response.json(
            { error: 'El servicio de correo no está configurado' },
            { status: 500 }
        );
    }

    let body;
    try {
        body = await request.json();
    } catch {
        return Response.json({ error: 'Cuerpo de la petición inválido' }, { status: 400 });
    }

    const { name, email, phone, message } = body ?? {};

    if (![name, email, phone, message].every((field) => typeof field === 'string' && field.trim())) {
        return Response.json({ error: 'Todos los campos son obligatorios' }, { status: 400 });
    }

    const port = Number(process.env.SMTP_PORT);

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_SVR,
            port,
            // 465 usa TLS implícito; 587 y 25 negocian STARTTLS sobre conexión plana.
            secure: port === 465,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
            // El host resuelve a IPv6 y IPv4. Si el IPv6 no es alcanzable, nodemailer
            // lo intenta igual y recién cae a IPv4 al vencer el timeout: sin estos
            // límites la espera llegaba a ~15s y la función se pasaba del tope de Vercel.
            connectionTimeout: 5000,
            greetingTimeout: 5000,
            socketTimeout: 20000,
        });

        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: process.env.SMTP_USER,
            // Permite responderle directamente a quien completó el formulario.
            replyTo: email,
            subject: `Nuevo contacto del sitio web - ${name}`,
            text: `Nombre: ${name}\nEmail: ${email}\nTelefono: ${phone}\n\nMensaje:\n${message}`,
        });

        return Response.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        return Response.json({ error: 'Error al enviar el correo' }, { status: 500 });
    }
}
