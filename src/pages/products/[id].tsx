import { GetServerSideProps } from "next";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import { Product } from "@/types/product";
import { useCartStore } from "@/stores/cart";

export default function ProductDetail({ product }: { product: Product }) {
  const addToCart = useCartStore((state) => state.addItem);

  return (
    <Layout>
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
        <div>
          <h1 className="text-3xl font-semibold">{product.name}</h1>
          <p className="text-gray-500 mt-2">{product.category}</p>
          <p className="text-2xl text-blue-600 font-bold mt-4">
            {product.price.toLocaleString("vi-VN")}₫
          </p>
          <button
            onClick={() => addToCart(product)}
            className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(`http://localhost:3000/api/products/${id}`);
  const product = await res.json();

  return {
    props: { product },
  };
};
