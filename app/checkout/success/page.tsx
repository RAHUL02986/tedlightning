"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CheckCircle, Package, Truck, Home, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface OrderDetails {
  orderId: string;
  customer: {
    firstName: string;
    lastName: string;
    email: string;
  };
  items: Array<{
    productId: string;
    name: string;
    quantity: number;
    price: number;
  }>;
  total: number;
  status: string;
  estimatedDelivery: string;
}

export default function CheckoutSuccessPage() {
  const searchParams = useSearchParams();
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);

  useEffect(() => {
    // In a real app, you might fetch order details from URL params or API
    // For demo purposes, we'll create mock order details
    const mockOrder: OrderDetails = {
      orderId: `ORD-${Date.now()}`,
      customer: {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
      },
      items: [
        {
          productId: "solar-street-light-100w",
          name: "Solar Street Light 100W",
          quantity: 1,
          price: 299.99,
        },
      ],
      total: 299.99,
      status: "confirmed",
      estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString(),
    };

    setOrderDetails(mockOrder);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-28 lg:pt-32">
          {/* Breadcrumb */}
          <div className="container-main py-4 border-b border-border">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <span>/</span>
              <Link href="/cart" className="hover:text-foreground transition-colors">Cart</Link>
              <span>/</span>
              <Link href="/checkout" className="hover:text-foreground transition-colors">Checkout</Link>
              <span>/</span>
              <span className="text-foreground">Success</span>
            </div>
          </div>

          <section className="container-main py-12 lg:py-16">
            <div className="max-w-2xl mx-auto text-center">
              {/* Success Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>

              {/* Success Message */}
              <h1 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Order Confirmed!
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Thank you for your purchase. Your order has been successfully placed and is being processed.
              </p>

              {/* Order Details */}
              {orderDetails && (
                <div className="bg-muted/30 rounded-xl p-6 border border-border mb-8 text-left">
                  <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
                    Order Details
                  </h2>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Order Number:</span>
                      <span className="font-medium text-foreground">{orderDetails.orderId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Order Date:</span>
                      <span className="font-medium text-foreground">
                        {new Date().toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Amount:</span>
                      <span className="font-medium text-foreground">
                        ${orderDetails.total.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Estimated Delivery:</span>
                      <span className="font-medium text-foreground">
                        {orderDetails.estimatedDelivery}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Order Timeline */}
              <div className="bg-muted/30 rounded-xl p-6 border border-border mb-8">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-6">
                  What's Next?
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Package className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Order Processing</h4>
                      <p className="text-sm text-muted-foreground">
                        We're preparing your order for shipment.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                      <Truck className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div>
                      <h4 className="font-medium text-muted-foreground">Shipping</h4>
                      <p className="text-sm text-muted-foreground">
                        Your order will be shipped within 1-2 business days.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div>
                      <h4 className="font-medium text-muted-foreground">Delivery</h4>
                      <p className="text-sm text-muted-foreground">
                        Estimated delivery: {orderDetails?.estimatedDelivery}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
                <h3 className="font-heading text-lg font-semibold text-blue-900 mb-2">
                  Need Help?
                </h3>
                <p className="text-blue-800 mb-4">
                  If you have any questions about your order, please contact our support team.
                </p>
                <div className="text-sm text-blue-700">
                  <p>Email: support@tedlighting.com</p>
                  <p>Phone: +1 (555) 123-4567</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <ShoppingBag className="h-4 w-4" />
                  Continue Shopping
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
                >
                  <Home className="h-4 w-4" />
                  Back to Home
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
