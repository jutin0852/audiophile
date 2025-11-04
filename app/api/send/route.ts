import { EmailTemplate } from "@/lib/emailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const orderData = await req.json();
    console.log("Received orderData:", orderData);

    const data = await resend.emails.send({
      from: "Audiophile <onboarding@resend.dev>",
      to: orderData.customer.email || "test@example.com",
      subject: `Order Confirmation - #${orderData.orderId}`,
      react: EmailTemplate({ orderData }),
    });

    console.log("Email sent:", data);
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error(" Email send failed:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
