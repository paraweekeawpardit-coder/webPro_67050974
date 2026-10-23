const BASE_URL = 'http://localhost:3001/products';

export async function fetchProducts() {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}

export async function createProduct(productData) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(productData),
  });
  if (!res.ok) throw new Error('Failed to create product');
  return res.json();
}

export async function updateProduct(id, productData) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(productData),
  });
  if (!res.ok) throw new Error('Failed to update product');
  return res.json();
}

export async function deleteProduct(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Failed to delete product');
  return res.json();
}