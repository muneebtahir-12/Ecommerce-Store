"use client";
import { createContext, useState } from "react";

export const CounterContext = createContext();

export default function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));
  const resetCount = () => setCount(0);
  return (
    <CounterContext.Provider value={{ count, increment, decrement,resetCount }}>
      {children}
    </CounterContext.Provider>
  );
}
