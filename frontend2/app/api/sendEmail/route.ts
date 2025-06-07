// app/api/sendEmail/route.ts

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface EmailRequestBody {
  name: string;
  company: string;
  message: string;
  email: string;
  subject: string;
}

export async function POST(req: Request) {
  try {
    const { name, company, message, email, subject }: EmailRequestBody =
      await req.json();

    console.log(process.env.EMAIL_USER, process.env.EMAIL_PASS);
    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      logger: true, // Enable logging
      debug: true, // Enable debug output
    });

    // Set up email data
    const mailOptions = {
      from: process.env.EMAIL_USER, // sender address
      to: "sarlamibest@gmail.com", // list of receivers
      subject: `Message from ${name}`, // Subject line
      // react: `Email from ${name} who works at ${company} about: ${message}. Product reference: ${ref}.  Email: ${email}. Phone: ${phoneNumber}`,
      html: `
  <div style="font-family: Arial, sans-serif; background: #f4f6f8; padding: 20px;">
    <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1); padding: 30px;">
      <h2 style="text-align: center; color: #333;">New Contact Message</h2>
      
      <div style="margin-bottom: 15px;">
        <strong style="color: #555;">Full Name:</strong>
        <div style="background: #f1f1f1; padding: 10px; border-radius: 6px;">${name}</div>
      </div>

      <div style="margin-bottom: 15px;">
        <strong style="color: #555;">Company:</strong>
        <div style="background: #f1f1f1; padding: 10px; border-radius: 6px;">${company}</div>
      </div>

      <div style="margin-bottom: 15px;">
        <strong style="color: #555;">Email Address:</strong>
        <div style="background: #f1f1f1; padding: 10px; border-radius: 6px;">${email}</div>
      </div>

      <div style="margin-bottom: 15px;">
        <strong style="color: #555;">Subject:</strong>
        <div style="background: #f1f1f1; padding: 10px; border-radius: 6px;">${subject}</div>
      </div>

      <div style="margin-bottom: 15px;">
        <strong style="color: #555;">Message:</strong>
        <div style="background: #f9f9f9; border-left: 4px solid #007bff; padding: 15px; border-radius: 5px;">${message}</div>
      </div>
    </div>
  </div>
`,
    };

    // Send mail
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        error: "Error sending email",
        //@ts-expect-error error of type
        details: error.message,
      },
      { status: 500 }
    );
  }
}
