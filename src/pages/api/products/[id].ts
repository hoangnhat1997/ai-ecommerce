import type { NextApiRequest, NextApiResponse } from "next";
import { mockProducts } from "@/mocks/products";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const product = mockProducts.find((p) => p.id === id);

  if (!product) return res.status(404).json({ message: "Product not found" });
  res.status(200).json(product);
}
