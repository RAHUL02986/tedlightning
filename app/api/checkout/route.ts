import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../lib/mongodb";
import Order from "../../../lib/models/Order";

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();
    console.log("🟢 Checkout body:", body);

    const {
      customer,
      payment,
      items,
      total,
    } = body;

    /* ---------------- VALIDATION ---------------- */

    if (
      !customer?.firstName ||
      !customer?.lastName ||
      !customer?.email ||
      !customer?.phone ||
      !customer?.address ||
      !customer?.city ||
      !customer?.state ||
      !customer?.zipCode ||
      !customer?.country
    ) {
      return NextResponse.json(
        { error: "Incomplete customer details" },
        { status: 400 }
      );
    }

    if (
      !payment?.cardNumber ||
      !payment?.expiryDate ||
      !payment?.cardName
    ) {
      return NextResponse.json(
        { error: "Incomplete payment details" },
        { status: 400 }
      );
    }

    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: "Cart items are invalid" },
        { status: 400 }
      );
    }

    if (typeof total !== "number" || total <= 0) {
      return NextResponse.json(
        { error: "Invalid order total" },
        { status: 400 }
      );
    }

    /* ---------------- ORDER CREATION ---------------- */

    const orderId = `ORD-${Date.now()}-${Math.random()
      .toString(36)
      .slice(2, 8)}`;

    const order = new Order({
      orderId,

      customer,

      payment: {
        cardName: payment.cardName,
        expiryDate: payment.expiryDate,
        cardNumber: payment.cardNumber,
      },

      items,
      total,

      status: "confirmed",

      estimatedDelivery: new Date(
        Date.now() + 7 * 24 * 60 * 60 * 1000
      ),
    });

    await order.save();

    console.log("✅ Order saved:", orderId);

    return NextResponse.json(
      {
        success: true,
        message: "Order placed successfully",
        orderId,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("❌ Checkout API Error:", error);

    return NextResponse.json(
      { error: error.message || "Checkout failed" },
      { status: 500 }
    );
  }
}
