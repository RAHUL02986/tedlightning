import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../lib/mongodb";
import Subscription from "../../../lib/models/Subscription";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    // 1️⃣ Connect MongoDB
    await dbConnect();

    // 2️⃣ Read request body
    const { name, email } = await req.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // 3️⃣ Check duplicate email
    const existing = await Subscription.findOne({ email });
    if (existing) {
      return NextResponse.json(
        { error: "Email already subscribed" },
        { status: 409 }
      );
    }

    // 4️⃣ Save to database
    await Subscription.create({ name, email });

    // 5️⃣ Gmail SMTP Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Optional but recommended
    await transporter.verify();

    // 6️⃣ Send confirmation email
    await transporter.sendMail({
      from: `"Newsletter" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Subscription Successful 🎉",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6">
          <h2>Hello ${name},</h2>
          <p>Thank you for subscribing to our newsletter.</p>
          <p>You’ll now receive updates, news, and offers.</p>
          <br/>
          <p>Best regards,<br/><b>Team CodexMatrix</b></p>
        </div>
      `,
    });

    // 7️⃣ Success response
    return NextResponse.json(
      { success: true, message: "Subscription successful" },
      { status: 201 }
    );

  } catch (error: any) {
    console.error("SUBSCRIBE API ERROR:", error);

    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
