import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, hasAllergies, allergies, people, adults, bambini, postiVuoti,  menuPesce, menuCarne, menuVegetariano } = await req.json();

  // Create a Nodemailer transporter
  let transporter = nodemailer.createTransport({
    // Configure your email service here
    // For example, using Gmail:
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  // Compose email
  let mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'ileniabenenati14@gmail.com',  
    subject: 'Nuova Conferma RSVP',
    text: `
      Referente principale: ${name}
      Numero di Persone: ${people}
      Adulti: ${adults}
      Bambini: ${bambini}
      Posti vuoti: ${postiVuoti}
      Numero menu Pesce: ${menuPesce}
      Numero menu Carne: ${menuCarne}
      Numero menu Vegetariano: ${menuVegetariano}
      Intolleranze presenti: ${hasAllergies ? 'Yes' : 'No'}
      ${hasAllergies ? `Dettagli intolleranze: ${allergies}` : ''}
    `
  };
//   console.log('Mail options:', mailOptions);
  try {
    // Send email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Form submitted successfully' }, { status: 200 });
  } catch (error) {
    // console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to submit form' }, { status: 500 });
  }
}

