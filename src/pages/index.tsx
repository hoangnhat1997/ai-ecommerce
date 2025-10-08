import Layout from "@/components/layout/Layout";
import ProductList from "@/components/products/ProductList";
import { Product } from "@/types/product";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
  const products = await res.json();

  return { props: { products } };
};

export default function HomePage({ products }: { products: Product[] }) {
  return (
    <Layout>
      <h1 className="text-2xl font-semibold mb-6">Sản phẩm nổi bật</h1>
      <ProductList products={products} />
    </Layout>
  );
}
