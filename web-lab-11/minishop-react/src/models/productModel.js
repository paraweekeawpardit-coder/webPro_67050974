const products = [
  {
    id: 1,
    name: "Laptop",
    price: 29900,
    description: "โน้ตบุ๊กทรงพลัง เหมาะสำหรับการทำงานและการเล่นเกม"
  },
  {
    id: 2,
    name: "Headphones",
    price: 3500,
    description: "หูฟังตัดเสียงรบกวน คุณภาพเสียงระดับพรีเมียม"
  },
  {
    id: 3,
    name: "Smartphone",
    price: 19900,
    description: "สมาร์ตโฟนกล้องสวย แบตเตอรี่อึดตลอดวัน"
  },
  {
    id: 4,
    name: "Smartwatch",
    price: 5900,
    description: "นาฬิกาอัจฉริยะ ติดตามสุขภาพและการออกกำลังกาย"
  }
];

export function getProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((p) => p.id === Number(id));
}