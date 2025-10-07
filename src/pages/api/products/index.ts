import type { NextApiRequest, NextApiResponse } from "next";
import { mockProducts } from "@/mocks/products";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(mockProducts);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
