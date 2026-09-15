import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Consultation } from "@/models/Consultation";

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();

    const { name, phone, email, address, propertyType, monthlyBill, message } =
      body;

    if (!name || !phone || !email || !address || !propertyType || !monthlyBill) {
      return NextResponse.json(
        { error: "All required fields must be filled" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const consultation = await Consultation.create({
      name,
      phone,
      email,
      address,
      propertyType,
      monthlyBill,
      message: message || "",
      status: "new",
    });

    return NextResponse.json(
      { message: "Consultation request submitted", id: consultation._id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Consultation creation error:", error);
    return NextResponse.json(
      { error: "Failed to submit request. Please try again." },
      { status: 500 }
    );
  }
}
