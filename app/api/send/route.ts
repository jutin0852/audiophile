import { EmailTemplate } from "@/lib/emailTemplate";
import { Resend } from "resend";

let resendClient: Resend | null = null;

function getResend() {
  if (!resendClient) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) throw new Error("Missing RESEND_API_KEY");
    resendClient = new Resend(apiKey);
  }
  return resendClient;
}

export async function POST(req: Request) {
  try {
    const orderData = await req.json();
    console.log(" Received order data:", orderData);

    const resend = getResend();

    const data = await resend.emails.send({
      from: "Audiophile <onboarding@resend.dev>",
      to: orderData.customer.email || "test@example.com",
      subject: `Order Confirmation - #${orderData.orderId}`,
      react: EmailTemplate({ orderData }),
    });

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (err) {
    console.error(" Email send failed:", err);
    return new Response(JSON.stringify({ error: (err as Error).message }), {
      status: 500,
    });
  }
}
