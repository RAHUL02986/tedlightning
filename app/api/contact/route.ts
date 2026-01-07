import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import dbConnect from '../../../lib/mongodb';
import Contact, { IContact } from '../../../lib/models/Contact';
export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();
    const {
      name,
      email,
      phone,
      country,
      businessType,
      application,
      quantity,
      message,
    } = body as Partial<IContact>;

    if (!name || !email || !country || !businessType || !application) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const savedContact = await Contact.create({
      name,
      email,
      phone,
      country,
      businessType,
      application,
      quantity,
      message,
    });

    // 🚀 EMAIL SECTION
    try {
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      // 1️⃣ ADMIN EMAIL (replyTo = user)
      await transporter.sendMail({
        from: `"TED Lighting Website" <${process.env.EMAIL_USER}>`,
        to: 'rahul.codexmatrix@gmail.com',
        replyTo: email,
        subject: `New Contact Inquiry - ${name}`,
        html: `
          <h2>New Contact Inquiry</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${phone || 'N/A'}</p>
          <p><b>Country:</b> ${country}</p>
          <p><b>Business Type:</b> ${businessType}</p>
          <p><b>Application:</b> ${application}</p>
          <p><b>Quantity:</b> ${quantity || 'N/A'}</p>
          <p><b>Message:</b> ${message || 'N/A'}</p>
        `,
      });

      // ⏳ SMALL DELAY (VERY IMPORTANT FOR GMAIL)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // 2️⃣ USER FEEDBACK EMAIL
      await transporter.sendMail({
        from: `"TED Lighting" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: 'We received your inquiry – TED Lighting',
        html: `
          <h2>Thank you for contacting TED Lighting</h2>
          <p>Dear ${name},</p>

          <p>
            We have successfully received your inquiry.
            Our team will get back to you within <b>24–48 hours</b>.
          </p>

          <h4>Your Details</h4>
          <ul>
            <li><b>Business Type:</b> ${businessType}</li>
            <li><b>Application:</b> ${application}</li>
            <li><b>Country:</b> ${country}</li>
            ${quantity ? `<li><b>Quantity:</b> ${quantity}</li>` : ''}
          </ul>

          <p>
            Regards,<br/>
            <b>TED Lighting Team</b>
          </p>
        `,
      });

      console.log('✅ Admin + User emails sent');
    } catch (mailError) {
      console.error('❌ Email failed:', mailError);
    }

    return NextResponse.json(
      { message: 'Contact submitted successfully', id: savedContact._id },
      { status: 201 }
    );
  } catch (error) {
    console.error('❌ API Error:', error);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}
