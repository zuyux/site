import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

function isValidEmail(email: string) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ success: false, error: 'Invalid email address' }, { status: 400 })
    }

    if (!process.env.GMAIL_USERNAME || !process.env.GMAIL_PASSWORD) {
      return NextResponse.json({ success: false, error: 'Email configuration error' }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_PASSWORD,
      },
    })

    const htmlMail = `
      <div style="border: 1px solid #f0f0f0; border-radius: 10px; padding: 3em; margin: 0 auto;">
        <h2 style="color:#00f;font-weight: bold;">Gracias por acompañarnos en esta aventura:</h2>
        <p style="color:#000;">Hemos añadido tu correo a la lista de espera para el proyecto VERKO. Sólo recibirás las notificaciones necesarias.</p>
        <br></br>
        <table style="font-size: 16px; width: 100%;">
          <tr>
            <td style="width: 50%;"><strong>Email:</strong></td>
            <td>${email}</td>
          </tr>
        </table>
        <hr>
        <p><a href="https://zuyux.com" target="_blank">zuyux.com</a></p>
      </div>
    `

    const mailOptions = {
      from: 'ZUYUX <fabohax@gmail.com>',
      to: [
        'fabohax@gmail.com',
        'iespinozae@uni.pe',
        'jriojasm@uni.pe',
        'arquitecto.camborda@gmail.com',
        'pdroroman@gmail.com',
        email,
      ],
      subject: `✨ ${email} joined Verko waitlist`,
      html: htmlMail,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: `${email}, we got your request. Thanks for applying.` })
  } catch (error) {
    console.error('Error in join API:', error)
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 })
  }
}
