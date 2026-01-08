// app/layout.tsx
import React from "react";
import I18nProvider from "../src/i18n/I18nProvider";
import { CartProvider } from "../src/contexts/CartContext";
import { AuthProvider } from "../src/contexts/AuthContext";
import "../app/globals.css";

export const metadata = {
  title: "TedLighting | B2B Solar Street Light Manufacturer & OEM Supplier",
  description:
    "Professional B2B solar street light manufacturer. OEM/ODM services, bulk pricing, government project expertise. Trusted by distributors & contractors in 160+ countries.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <I18nProvider>
          <AuthProvider>
            <CartProvider>
              {children}
            </CartProvider>
          </AuthProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
