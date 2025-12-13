"use client";

import "./globals.css";
import WishlistProvider from "./context/WishlistContext";
import { CartProvider } from "./context/CartContext";
import CounterProvider from "./context/CounterContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <WishlistProvider>
          <CartProvider>
            <CounterProvider>

              {children} 

            </CounterProvider>
          </CartProvider>
        </WishlistProvider>
      </body>
    </html>
  );
}
