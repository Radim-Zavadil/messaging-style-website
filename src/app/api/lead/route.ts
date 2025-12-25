import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      )
    }

    const lead = await prisma.lead.create({
      data: {
        name,
        email,
        message,
      },
    })

    return NextResponse.json({ success: true, lead })
  } catch (error) {
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    )
  }
}
