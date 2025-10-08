"use client";
import { useState } from "react";
import { apiRequest } from "@/lib/apiClient";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "", name: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await apiRequest("/auth/register", {
        method: "POST",
        body: JSON.stringify(form),
      });
      router.push("/login");
    } catch (err) {
      setError("Đăng ký thất bại, thử lại sau");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto bg-white p-6 rounded-2xl shadow"
    >
      <h2 className="text-xl font-semibold mb-4 text-center">Đăng ký</h2>
      {error && <p className="text-red-500 mb-2 text-sm">{error}</p>}
      <input
        type="text"
        placeholder="Tên hiển thị"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full border p-2 rounded mb-3"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full border p-2 rounded mb-3"
        required
      />
      <input
        type="password"
        placeholder="Mật khẩu"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        className="w-full border p-2 rounded mb-4"
        required
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
      >
        {loading ? "Đang đăng ký..." : "Đăng ký"}
      </button>
    </form>
  );
}
