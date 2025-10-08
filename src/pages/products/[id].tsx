import { GetServerSideProps } from "next";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import { Product } from "@/types/product";
import { useCartStore } from "@/stores/cart";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${query.id}`
  );
  const product = await res.json();

  return { props: { product } };
};

export default function ProductDetailPage({ product }: { product: Product }) {
  const addToCart = useCartStore((state) => state.addItem);
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      router.push("/login");
      return;
    }
    addToCart(product);
  };

  return (
    <Layout>
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <Image
            src={product.imageUrl || ""}
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
            onClick={handleAddToCart}
            className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </Layout>
  );
}
