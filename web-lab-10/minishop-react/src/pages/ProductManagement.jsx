import React, { useState, useEffect } from 'react';
import {
  fetchProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../services/productApi';

export default function ProductManagement() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // State สำหรับ Form
  const [formData, setFormData] = useState({ name: '', price: '', description: '' });
  const [editingId, setEditingId] = useState(null);
  const [formError, setFormError] = useState('');

  // โหลดข้อมูลสินค้าครั้งแรก
  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch (err) {
      setError(err.message || 'เกิดข้อผิดพลาดในการดึงข้อมูลสินค้า');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form Validation ก่อนบันทึก
  const validateForm = () => {
    if (!formData.name.trim()) {
      setFormError('กรุณากรอกชื่อสินค้า');
      return false;
    }
    if (!formData.price || Number(formData.price) <= 0) {
      setFormError('กรุณากรอกราคาที่มากกว่า 0');
      return false;
    }
    setFormError('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const payload = {
      name: formData.name.trim(),
      price: Number(formData.price),
      description: formData.description.trim(),
    };

    try {
      if (editingId) {
        await updateProduct(editingId, payload);
      } else {
        await createProduct(payload);
      }
      resetForm();
      await loadProducts();
    } catch (err) {
      alert('บันทึกข้อมูลไม่สำเร็จ: ' + err.message);
    }
  };

  const handleEdit = (product) => {
    setEditingId(product.id);
    setFormData({
      name: product.name,
      price: product.price,
      description: product.description || '',
    });
    setFormError('');
  };

  const handleDelete = async (id) => {
    if (window.confirm('คุณต้องการลบสินค้านี้ใช่หรือไม่?')) {
      try {
        await deleteProduct(id);
        await loadProducts();
      } catch (err) {
        alert('ลบสินค้าไม่สำเร็จ: ' + err.message);
      }
    }
  };

  const resetForm = () => {
    setEditingId(null);
    setFormData({ name: '', price: '', description: '' });
    setFormError('');
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div className="border-b border-gray-200 pb-4">
        <h1 className="text-3xl font-extrabold text-gray-900">Product Management</h1>
        <p className="text-sm text-gray-500">จัดการข้อมูลสินค้าในระบบ (REST API CRUD)</p>
      </div>

      {/* Form สำหรับ เพิ่ม/แก้ไข สินค้า */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md">
        <h2 className="text-xl font-bold mb-4 text-gray-800">
          {editingId ? '✏️ แก้ไขสินค้า' : '➕ เพิ่มสินค้าใหม่'}
        </h2>

        {formError && (
          <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-xl text-sm font-medium border border-red-100">
            {formError}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">ชื่อสินค้า *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="เช่น Wireless Mouse"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">ราคา (บาท) *</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                placeholder="เช่น 490"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">รายละเอียดสินค้า</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows="2"
              placeholder="คำอธิบายเพิ่มเติม..."
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex gap-2 justify-end">
            {editingId && (
              <button
                type="button"
                onClick={resetForm}
                className="px-5 py-2.5 rounded-xl border border-gray-300 text-gray-600 hover:bg-gray-50 font-semibold"
              >
                ยกเลิก
              </button>
            )}
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              {editingId ? 'บันทึกการแก้ไข (Save Changes)' : 'เพิ่มสินค้า (Add Product)'}
            </button>
          </div>
        </form>
      </div>

      {/* ตารางแสดงสินค้า + Handling States */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-md overflow-hidden">
        <div className="p-4 bg-slate-50 border-b border-gray-100 flex justify-between items-center">
          <h2 className="font-bold text-gray-800">รายการสินค้าทั้งหมด</h2>
          <button
            onClick={loadProducts}
            className="text-xs bg-white border border-gray-200 px-3 py-1.5 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            🔄 รีเฟรชข้อมูล
          </button>
        </div>

        {loading ? (
          <div className="text-center py-12 text-gray-500">
            <div className="inline-block animate-spin text-2xl mb-2">⏳</div>
            <p>กำลังโหลดข้อมูลสินค้าจาก API...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12 text-red-500">
            <p className="font-bold text-lg mb-1">เกิดข้อผิดพลาด!</p>
            <p className="text-sm">{error}</p>
            <button
              onClick={loadProducts}
              className="mt-4 px-4 py-2 bg-red-600 text-white text-sm rounded-xl hover:bg-red-700"
            >
              ลองใหม่อีกครั้ง
            </button>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-12 text-gray-400">
            <p className="text-4xl mb-2">📦</p>
            <p>ยังไม่มีข้อมูลสินค้าในระบบ</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 text-xs font-bold text-gray-600 uppercase border-b border-gray-200">
                  <th className="p-4">ID</th>
                  <th className="p-4">ชื่อสินค้า</th>
                  <th className="p-4">ราคา</th>
                  <th className="p-4">รายละเอียด</th>
                  <th className="p-4 text-center">จัดการ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {products.map((p) => (
                  <tr key={p.id} className="hover:bg-slate-50 transition">
                    <td className="p-4 font-mono text-gray-400">#{p.id}</td>
                    <td className="p-4 font-bold text-gray-900">{p.name}</td>
                    <td className="p-4 font-bold text-emerald-600">฿{Number(p.price).toLocaleString()}</td>
                    <td className="p-4 text-gray-500 max-w-xs truncate">{p.description || '-'}</td>
                    <td className="p-4 text-center space-x-2">
                      <button
                        onClick={() => handleEdit(p)}
                        className="px-3 py-1.5 bg-amber-100 text-amber-800 rounded-lg font-semibold hover:bg-amber-200 text-xs transition"
                      >
                        แก้ไข
                      </button>
                      <button
                        onClick={() => handleDelete(p.id)}
                        className="px-3 py-1.5 bg-red-100 text-red-700 rounded-lg font-semibold hover:bg-red-200 text-xs transition"
                      >
                        ลบ
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}