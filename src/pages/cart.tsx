import Layout from "@/components/layout/Layout";
import { useCartStore } from "@/stores/cart";

export default function CartPage() {
  const { items, removeItem, clearCart } = useCartStore();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Layout>
      <h1 className="text-2xl font-semibold mb-6">Giỏ hàng</h1>
      {items.length === 0 ? (
        <p>Giỏ hàng trống.</p>
      ) : (
        <>
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border p-4 rounded-lg bg-white"
              >
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    {item.quantity} × {item.price.toLocaleString("vi-VN")}₫
                  </p>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-600 hover:underline"
                >
                  Xóa
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-between items-center">
            <p className="text-lg font-semibold">
              Tổng cộng: {total.toLocaleString("vi-VN")}₫
            </p>
            <div className="space-x-4">
              <button
                onClick={clearCart}
                className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
              >
                Xóa giỏ hàng
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Thanh toán
              </button>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
}
