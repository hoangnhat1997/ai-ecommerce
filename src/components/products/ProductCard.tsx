import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="border rounded-lg shadow-sm hover:shadow-lg transition bg-white group overflow-hidden"
    >
      <div className="relative w-full aspect-[4/3]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4">
        <h2 className="font-medium text-lg line-clamp-1 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h2>
        <p className="text-gray-500 text-sm mt-1">{product.category}</p>
        <p className="text-blue-600 font-semibold mt-2">
          {product.price.toLocaleString("vi-VN")}₫
        </p>
      </div>
    </Link>
  );
}
