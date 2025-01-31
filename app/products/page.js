import Link from "next/link";
import React from "react";

export default async function Products() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const products = await response.json();

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <div className="dark:bg-[#252f5a] p-4 rounded-md shadow cursor-pointer">
              <h2 className="text-lg font-bold">{product.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
