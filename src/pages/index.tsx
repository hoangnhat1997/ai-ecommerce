import Layout from "@/components/layout/Layout";
import ProductList from "@/components/products/ProductList";
import { mockProducts } from "@/mocks/products";

export default function HomePage() {
  return (
    <Layout>
      <h1 className="text-2xl font-semibold mb-6">Sản phẩm nổi bật</h1>
      <ProductList products={mockProducts} />
    </Layout>
  );
}
