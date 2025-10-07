"use client";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/stores/cart";
import { useEffect, useState } from "react";

export default function Header() {
  const totalItems = useCartStore((state) => state.totalItems());
  const [count, setCount] = useState(0);

  // tránh hydration mismatch (Next.js)
  useEffect(() => {
    setCount(totalItems);
  }, [totalItems]);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          AI-Shop
        </Link>

        <nav className="flex items-center space-x-6">
          <Link href="/products" className="hover:text-blue-500">
            Sản phẩm
          </Link>
          <Link href="/profile" className="hover:text-blue-500">
            Tài khoản
          </Link>

          <Link href="/cart" className="relative">
            <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-blue-600 transition" />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {count}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
