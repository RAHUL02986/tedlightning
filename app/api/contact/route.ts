import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import dbConnect from '@/lib/mongodb';
import Contact from '@/lib/models/Contact';

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();
    const { name, email, phone, country, businessType, application, quantity, message } = body;

    // Validate required fields
    if (!name || !email || !country || !businessType || !application) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Save to database
    const contact = new Contact({
      name,
      email,
      phone,
      country,
      businessType,
      application,
      quantity,
      message
    });

    const savedContact = await contact.save();

    // Send email using nodemailer
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'horace@tedlighting.com', // Company email
      subject: `New Contact Inquiry from ${name}`,
      html: '<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">' +
        '<h2 style="color: #333;">New Contact Inquiry</h2>' +
        '<div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">' +
        '<p><strong>Name:</strong> ' + name + '</p>' +
        '<p><strong>Email:</strong> ' + email + '</p>' +
        '<p><strong>Phone:</strong> ' + (phone || 'Not provided') + '</p>' +
        '<p><strong>Country:</strong> ' + country + '</p>' +
        '<p><strong>Business Type:</strong> ' + businessType + '</p>' +
        '<p><strong>Application:</strong> ' + application + '</p>' +
        '<p><strong>Estimated Quantity:</strong> ' + (quantity || 'Not specified') + '</p>' +
        '<p><strong>Message:</strong></p>' +
        '<p style="background-color: white; padding: 10px; border-radius: 4px;">' + (message || 'No message provided') + '</p>' +
        '</div>' +
        '<p style="color: #666; font-size: 12px; margin-top: 20px;">' +
        'This inquiry was submitted on ' + new Date().toLocaleString() +
        '</p>' +
        '</div>'
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      {
        message: 'Contact inquiry submitted successfully',
        contactId: savedContact._id
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Contact submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact inquiry' },
      { status: 500 }
    );
  }
}
