"use client";
import { createContext, useState, useEffect } from "react";

export const WishlistContext = createContext();

export default function WishlistProvider({ children }) {
    const [wishlist, setWishlist] = useState([]);

    // ▶ Save in LocalStorage
    useEffect(() => {
        const storedWishlist = localStorage.getItem("wishlist");
        if (storedWishlist) setWishlist(JSON.parse(storedWishlist));
    }, []);

    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }, [wishlist]);

    const addToWishlist = (product) => {
        setWishlist((prev) => {
            if (prev.find((item) => item.id === product.id)) return prev;
            return [...prev, product];
        });
    };

    const removeWishlistItem = (id) => {
        setWishlist((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <WishlistContext.Provider value={{ wishlist, addToWishlist, removeWishlistItem }}>
            {children}
        </WishlistContext.Provider>
    );
}
