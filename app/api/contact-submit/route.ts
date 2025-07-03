import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 })
    }

    // --- IMPORTANT: Replace this with actual email sending logic ---
    // You would typically use an external email service here (e.g., Resend, SendGrid, Nodemailer).
    // This requires setting up API keys as environment variables (e.g., RESEND_API_KEY).

    console.log("Received contact form submission:")
    console.log(`Name: ${name}`)
    console.log(`Email: ${email}`)
    console.log(`Subject: ${subject}`)
    console.log(`Message: ${message}`)
    console.log(`Attempting to send email to: adharikamahajan@gmail.com, harshitaa2809@gmail.com`)

    // Example using a hypothetical email service (e.g., Resend)
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    //
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev', // Replace with your verified sender email
    //   to: ['adharikamahajan@gmail.com', 'harshitaa2809@gmail.com'],
    //   subject: `New Contact Form Submission: ${subject}`,
    //   html: `
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Subject:</strong> ${subject}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   `,
    // });

    // For demonstration, we'll just return success without actual email sending.
    // In a real application, if the email sending fails, you would catch the error
    // and return an appropriate error response.

    return NextResponse.json({ message: "Message sent successfully!" }, { status: 200 })
  } catch (error) {
    console.error("Error processing contact form submission:", error)
    return NextResponse.json({ error: error.message || "Internal server error." }, { status: 500 })
  }
}
