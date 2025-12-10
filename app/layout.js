"use client";

import "./globals.css";
import WishlistProvider from "./context/WishlistContext";
import { CartProvider } from "./context/CartContext"; // make sure you import CartProvider

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <WishlistProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </WishlistProvider>
      </body>
    </html>
  );
}
