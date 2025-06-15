import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Icon from "@/components/ui/icon";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  supplier: string;
}

const mockProducts: Product[] = [
  {
    id: "001",
    name: "Ноутбук Lenovo ThinkPad",
    category: "Электроника",
    price: 85000,
    stock: 15,
    supplier: "Tech Supply Co",
  },
  {
    id: "002",
    name: "Офисное кресло",
    category: "Мебель",
    price: 12000,
    stock: 8,
    supplier: "Office Furniture Ltd",
  },
  {
    id: "003",
    name: "Принтер HP LaserJet",
    category: "Электроника",
    price: 25000,
    stock: 5,
    supplier: "Print Solutions",
  },
];

const mockOrders = [
  {
    id: "ORD001",
    supplier: "Tech Supply Co",
    date: "2024-06-15",
    items: 20,
    status: "В обработке",
  },
  {
    id: "ORD002",
    supplier: "Office Furniture Ltd",
    date: "2024-06-14",
    items: 5,
    status: "Доставлен",
  },
  {
    id: "ORD003",
    supplier: "Print Solutions",
    date: "2024-06-13",
    items: 10,
    status: "Ожидает",
  },
];

const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const filteredProducts = mockProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleSelectItem = (id: string) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] p-6">
      <div className="max-w-7xl mx-auto">
        <h1
          className="text-2xl font-bold mb-6"
          style={{ fontFamily: "Yu Gothic UI", fontSize: "18pt" }}
        >
          Управление товарами
        </h1>

        <Tabs defaultValue="catalog" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6 bg-white border border-[#DADCE0]">
            <TabsTrigger
              value="catalog"
              className="text-[14pt]"
              style={{ fontFamily: "Yu Gothic UI" }}
            >
              Каталог товаров
            </TabsTrigger>
            <TabsTrigger
              value="inventory"
              className="text-[14pt]"
              style={{ fontFamily: "Yu Gothic UI" }}
            >
              Складской учёт
            </TabsTrigger>
            <TabsTrigger
              value="orders"
              className="text-[14pt]"
              style={{ fontFamily: "Yu Gothic UI" }}
            >
              Заказы поставщикам
            </TabsTrigger>
          </TabsList>

          {/* Панель действий */}
          <div className="flex justify-between items-center mb-6 p-4 bg-white border border-[#DADCE0] rounded-lg">
            <div className="flex gap-3">
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white"
                style={{
                  borderRadius: "20px",
                  fontSize: "14pt",
                  fontFamily: "Yu Gothic UI",
                }}
              >
                <Icon name="Plus" size={16} className="mr-2" />
                Добавить товар
              </Button>
              <Button
                variant="outline"
                disabled={selectedItems.length === 0}
                className="border-[#DADCE0] hover:bg-gray-50"
                style={{
                  borderRadius: "20px",
                  fontSize: "14pt",
                  fontFamily: "Yu Gothic UI",
                }}
              >
                <Icon name="Trash2" size={16} className="mr-2" />
                Удалить
              </Button>
              <Button
                variant="outline"
                disabled={selectedItems.length !== 1}
                className="border-[#DADCE0] hover:bg-gray-50"
                style={{
                  borderRadius: "20px",
                  fontSize: "14pt",
                  fontFamily: "Yu Gothic UI",
                }}
              >
                <Icon name="Edit" size={16} className="mr-2" />
                Редактировать
              </Button>
            </div>

            <div className="relative w-80">
              <Icon
                name="Search"
                size={16}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <Input
                placeholder="Поиск товаров..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-[#DADCE0]"
                style={{ fontSize: "14pt", fontFamily: "Yu Gothic UI" }}
              />
            </div>
          </div>

          <TabsContent
            value="catalog"
            className="bg-white border border-[#DADCE0] rounded-lg p-6"
          >
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedItems(filteredProducts.map((p) => p.id));
                        } else {
                          setSelectedItems([]);
                        }
                      }}
                    />
                  </TableHead>
                  <TableHead
                    style={{ fontSize: "14pt", fontFamily: "Yu Gothic UI" }}
                  >
                    ID
                  </TableHead>
                  <TableHead
                    style={{ fontSize: "14pt", fontFamily: "Yu Gothic UI" }}
                  >
                    Название
                  </TableHead>
                  <TableHead
                    style={{ fontSize: "14pt", fontFamily: "Yu Gothic UI" }}
                  >
                    Категория
                  </TableHead>
                  <TableHead
                    style={{ fontSize: "14pt", fontFamily: "Yu Gothic UI" }}
                  >
                    Цена
                  </TableHead>
                  <TableHead
                    style={{ fontSize: "14pt", fontFamily: "Yu Gothic UI" }}
                  >
                    Остаток
                  </TableHead>
                  <TableHead
                    style={{ fontSize: "14pt", fontFamily: "Yu Gothic UI" }}
                  >
                    Поставщик
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <input
                        type="checkbox"
                        checked={selectedItems.includes(product.id)}
                        onChange={() => handleSelectItem(product.id)}
                      />
                    </TableCell>
                    <TableCell
                      style={{ fontSize: "14pt", fontFamily: "Yu Gothic UI" }}
                    >
                      {product.id}
                    </TableCell>
                    <TableCell
                      style={{ fontSize: "14pt", fontFamily: "Yu Gothic UI" }}
                    >
                      {product.name}
                    </TableCell>
                    <TableCell
                      style={{ fontSize: "14pt", fontFamily: "Yu Gothic UI" }}
                    >
                      {product.category}
                    </TableCell>
                    <TableCell
                      style={{ fontSize: "14pt", fontFamily: "Yu Gothic UI" }}
                    >
                      {product.price.toLocaleString()} ₽
                    </TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-sm ${
                          product.stock > 10
                            ? "bg-green-100 text-green-800"
                            : product.stock > 5
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                        }`}
                        style={{ fontSize: "14pt", fontFamily: "Yu Gothic UI" }}
                      >
                        {product.stock}
                      </span>
                    </TableCell>
                    <TableCell
                      style={{ fontSize: "14pt", fontFamily: "Yu Gothic UI" }}
                    >
                      {product.supplier}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>

          <TabsContent
            value="inventory"
            className="bg-white border border-[#DADCE0] rounded-lg p-6"
          >
            <div className="text-center py-12">
              <Icon
                name="Package"
                size={48}
                className="mx-auto mb-4 text-gray-400"
              />
              <h3
                className="text-lg font-medium mb-2"
                style={{ fontSize: "14pt", fontFamily: "Yu Gothic UI" }}
              >
                Складской учёт
              </h3>
              <p
                className="text-gray-500"
                style={{ fontSize: "14pt", fontFamily: "Yu Gothic UI" }}
              >
                Управление остатками и движением товаров на складе
              </p>
            </div>
          </TabsContent>

          <TabsContent
            value="orders"
            className="bg-white border border-[#DADCE0] rounded-lg p-6"
          >
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead
                    style={{ fontSize: "14pt", fontFamily: "Yu Gothic UI" }}
                  >
                    ID заказа
                  </TableHead>
                  <TableHead
                    style={{ fontSize: "14pt", fontFamily: "Yu Gothic UI" }}
                  >
                    Поставщик
                  </TableHead>
                  <TableHead
                    style={{ fontSize: "14pt", fontFamily: "Yu Gothic UI" }}
                  >
                    Дата
                  </TableHead>
                  <TableHead
                    style={{ fontSize: "14pt", fontFamily: "Yu Gothic UI" }}
                  >
                    Позиций
                  </TableHead>
                  <TableHead
                    style={{ fontSize: "14pt", fontFamily: "Yu Gothic UI" }}
                  >
                    Статус
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell
                      style={{ fontSize: "14pt", fontFamily: "Yu Gothic UI" }}
                    >
                      {order.id}
                    </TableCell>
                    <TableCell
                      style={{ fontSize: "14pt", fontFamily: "Yu Gothic UI" }}
                    >
                      {order.supplier}
                    </TableCell>
                    <TableCell
                      style={{ fontSize: "14pt", fontFamily: "Yu Gothic UI" }}
                    >
                      {order.date}
                    </TableCell>
                    <TableCell
                      style={{ fontSize: "14pt", fontFamily: "Yu Gothic UI" }}
                    >
                      {order.items}
                    </TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-sm ${
                          order.status === "Доставлен"
                            ? "bg-green-100 text-green-800"
                            : order.status === "В обработке"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-yellow-100 text-yellow-800"
                        }`}
                        style={{ fontSize: "14pt", fontFamily: "Yu Gothic UI" }}
                      >
                        {order.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Products;
