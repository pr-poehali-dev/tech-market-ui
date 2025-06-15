import React from "react";
import Icon from "@/components/ui/icon";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { id: "products", label: "Товары", icon: "Package", path: "/products" },
    { id: "reports", label: "Отчёты", icon: "FileText", path: "/reports" },
    {
      id: "notifications",
      label: "Уведомления",
      icon: "Bell",
      path: "/notifications",
    },
  ];

  const handleMenuClick = (item: (typeof menuItems)[0]) => {
    navigate(item.path);
  };

  const handleLogout = () => {
    // Здесь будет логика выхода
    console.log("Выход из системы");
  };

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-[#F5F5F5] border-r border-[#DADCE0] z-50">
      <div className="p-6">
        {/* Название магазина */}
        <div className="mb-8">
          <h1 className="text-xl font-bold text-gray-800 font-yugothic">
            TechMarket
          </h1>
        </div>

        {/* Навигационное меню */}
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleMenuClick(item)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left rounded-[20px] border border-[#DADCE0] font-yugothic text-[18px] transition-colors hover:bg-[#E8E8E8] focus:bg-gray-300 focus:outline-none ${
                location.pathname === item.path
                  ? "bg-[#E8E8E8] text-gray-900"
                  : "text-gray-700 bg-white hover:text-gray-900"
              }`}
            >
              <Icon name={item.icon} size={20} />
              {item.label}
            </button>
          ))}

          {/* Кнопка выхода */}
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-left rounded-[20px] border border-[#DADCE0] font-yugothic text-[18px] text-red-600 bg-white transition-colors hover:bg-red-50 focus:bg-red-100 focus:outline-none mt-4"
          >
            <Icon name="LogOut" size={20} />
            Выйти
          </button>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
