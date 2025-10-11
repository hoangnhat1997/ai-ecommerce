"use client";
import { apiRequest } from "@/lib/apiClient";
import { useState } from "react";
import { Product } from "@/types/product";
import Image from "next/image";

export default function AIShopPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    const res = await apiRequest(`/ai/recommend`, {
      method: "POST",
      body: JSON.stringify({ query }),
    });
    setResults(res as Product[]);
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">AI Gợi ý sản phẩm</h1>
      <div className="flex space-x-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Nhập yêu cầu (VD: Laptop chơi game dưới 20 triệu)"
          className="flex-grow border rounded p-2"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 rounded"
        >
          Tìm
        </button>
      </div>
      {loading && <p className="mt-4">Đang xử lý...</p>}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {results.map((p) => (
          <div key={p.id} className="border p-3 rounded bg-white">
            <Image
              src={p.imageUrl || ""}
              alt={p.name}
              className="w-full h-40 object-cover"
            />
            <h2 className="text-lg font-medium mt-2">{p.name}</h2>
            <p className="text-blue-600">{p.price}₫</p>
          </div>
        ))}
      </div>
    </div>
  );
}
