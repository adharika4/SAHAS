import clientPromise from "@/lib/mongodb"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db("Sahas") // 👈 You are using 'Sahas' as DB name in Compass
    const contacts = db.collection("Contact")

    const result = await contacts.insertOne({
      name,
      email,
      subject,
      message,
      timestamp: new Date()
    })

    console.log("Saved to MongoDB with ID:", result.insertedId)

    return NextResponse.json({ message: "Message saved to MongoDB!" }, { status: 200 })
  } catch (error: any) {
    console.error("Error saving contact form:", error)
    return NextResponse.json({ error: error.message || "Internal server error." }, { status: 500 })
  }
}
