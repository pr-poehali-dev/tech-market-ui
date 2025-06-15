import React, { useState } from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 right-0 left-64 h-16 bg-white border-b border-[#DADCE0] z-40">
      <div className="flex items-center justify-end h-full px-6">
        {/* Аватар пользователя */}
        <div className="relative">
          <button
            onClick={toggleMenu}
            className="w-12 h-12 rounded-full border border-[#DADCE0] bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 focus:outline-none transition-colors flex items-center justify-center"
          >
            <Icon name="User" size={24} className="text-gray-600" />
          </button>

          {/* Выпадающее меню */}
          {isMenuOpen && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-[#DADCE0] rounded-[20px] shadow-lg py-2">
              <button className="w-full px-4 py-2 text-left text-[14px] font-yugothic text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none">
                Настройки профиля
              </button>
              <button className="w-full px-4 py-2 text-left text-[14px] font-yugothic text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none">
                Сменить пароль
              </button>
              <hr className="my-2 border-[#DADCE0]" />
              <button className="w-full px-4 py-2 text-left text-[14px] font-yugothic text-red-600 hover:bg-red-50 focus:bg-red-50 focus:outline-none">
                Выйти
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
