import React from "react";

export default async function Product({ params }) {
  const { productId } = await params;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${productId}`);
  const product = await response.json();

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p className="text-sm text-gray-500">{product.body}</p>
    </div>
  );
}
