"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useCart } from "@/contexts/CartContext";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function CartPage() {
  const { state, updateQuantity, removeFromCart, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleQuantityChange = async (productId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setIsProcessing(true);
    try {
      await updateQuantity(productId, newQuantity);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleRemoveItem = async (productId: string) => {
    setIsProcessing(true);
    try {
      await removeFromCart(productId);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleClearCart = async () => {
    if (confirm("Are you sure you want to clear your cart?")) {
      setIsProcessing(true);
      try {
        await clearCart();
      } finally {
        setIsProcessing(false);
      }
    }
  };

  if (state.isLoading) {
    return (
      <>
        <Header />
        <div className="min-h-screen pt-28 lg:pt-32 flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            <p className="mt-2 text-muted-foreground">Loading cart...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

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
              <span className="text-foreground">Cart</span>
            </div>
          </div>

          <section className="container-main py-12 lg:py-16">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h1 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
                  Shopping Cart
                </h1>
                {state.items.length > 0 && (
                  <button
                    onClick={handleClearCart}
                    disabled={isProcessing}
                    className="text-sm text-muted-foreground hover:text-destructive transition-colors disabled:opacity-50"
                  >
                    Clear Cart
                  </button>
                )}
              </div>

              {state.items.length === 0 ? (
                <div className="text-center py-16">
                  <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                    Your cart is empty
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Add some products to get started with your order.
                  </p>
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Continue Shopping
                  </Link>
                </div>
              ) : (
                <div className="space-y-8">
                  {/* Cart Items */}
                  <div className="space-y-4">
                    {state.items.map((item) => (
                      <div key={item.productId} className="flex items-center gap-6 p-6 bg-muted/30 rounded-xl border border-border">
                        {/* Product Image */}
                        <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                          {item.image && (
                            <Image
                              src={item.image}
                              alt={item.name || "Product"}
                              fill
                              className="object-cover"
                            />
                          )}
                        </div>

                        {/* Product Info */}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-foreground truncate">
                            {item.name || "Product"}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            ${item.price.toFixed(2)} each
                          </p>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => handleQuantityChange(item.productId, item.quantity - 1)}
                            disabled={isProcessing || item.quantity <= 1}
                            className="p-2 rounded-lg border border-border hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-12 text-center font-medium">{item.quantity}</span>
                          <button
                            onClick={() => handleQuantityChange(item.productId, item.quantity + 1)}
                            disabled={isProcessing}
                            className="p-2 rounded-lg border border-border hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>

                        {/* Subtotal */}
                        <div className="text-right min-w-[100px]">
                          <p className="font-semibold text-foreground">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => handleRemoveItem(item.productId)}
                          disabled={isProcessing}
                          className="p-2 text-muted-foreground hover:text-destructive transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Cart Summary */}
                  <div className="bg-muted/30 rounded-xl p-6 border border-border">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-lg font-semibold text-foreground">Total Items:</span>
                      <span className="text-lg font-semibold text-foreground">{state.items.length}</span>
                    </div>
                    <div className="flex items-center justify-between text-xl font-bold text-foreground">
                      <span>Total:</span>
                      <span>${state.total.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-between">
                    <Link
                      href="/products"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Continue Shopping
                    </Link>
                    <Link
                      href="/checkout"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      Proceed to Checkout
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
