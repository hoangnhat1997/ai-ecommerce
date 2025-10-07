import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
