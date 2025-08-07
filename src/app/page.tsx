"use client";

import { useState } from "react";

export default function Home() {
  const [categoryCount, setCategoryCount] = useState<number | null>(null);
  const [productCount, setProductCount] = useState<number | null>(null);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setError("");
    setCategoryCount(null);
    setProductCount(null);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const { error: message } = await response.json();
        setError(message ?? "Upload failed");
        return;
      }

      const data: { categories: number; products: number } = await response.json();
      setCategoryCount(data.categories);
      setProductCount(data.products);
    } catch {
      setError("Upload failed");
    }
  };

  return (
    <main className="container mx-auto p-8 max-w-2xl">
      <h1 className="text-2xl font-bold mb-6">VTEX Product Migration</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium" htmlFor="category">
            Category sitemap
          </label>
          <input
            type="file"
            id="category"
            name="category"
            accept=".xml"
            required
            className="block w-full"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium" htmlFor="product">
            Product sitemap
          </label>
          <input
            type="file"
            id="product"
            name="product"
            accept=".xml"
            required
            className="block w-full"
          />
        </div>
        <button
          type="submit"
          className="rounded bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
        >
          Upload
        </button>
      </form>
      {error && <p className="text-red-600 mt-4">{error}</p>}
      {categoryCount !== null && productCount !== null && (
        <div className="mt-4">
          <p className="text-green-600">Files uploaded successfully</p>
          <p>
            Found {categoryCount} categories and {productCount} product URLs
          </p>
        </div>
      )}
    </main>
  );
}
