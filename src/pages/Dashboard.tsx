import React from "react";
import MainLayout from "@/components/Layout/MainLayout";
import StatsCard from "@/components/Dashboard/StatsCard";
import RecentActivity from "@/components/Dashboard/RecentActivity";

const Dashboard = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Заголовок */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 font-yugothic mb-2">
            Обзор магазина
          </h1>
          <p className="text-[14px] font-yugothic text-gray-600">
            Добро пожаловать в систему управления TechMarket
          </p>
        </div>

        {/* Статистические карточки */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Общая выручка"
            value="2,350,000 ₽"
            icon="DollarSign"
            trend={{ value: "12.5%", isPositive: true }}
          />
          <StatsCard
            title="Продажи за месяц"
            value="187"
            icon="ShoppingCart"
            trend={{ value: "8.2%", isPositive: true }}
          />
          <StatsCard
            title="Товаров в наличии"
            value="1,420"
            icon="Package"
            trend={{ value: "5.1%", isPositive: false }}
          />
          <StatsCard
            title="Активные заказы"
            value="23"
            icon="Truck"
            trend={{ value: "3.4%", isPositive: true }}
          />
        </div>

        {/* Основной контент */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* График продаж */}
          <div className="lg:col-span-2 bg-white border border-[#DADCE0] rounded-[20px] p-6">
            <h3 className="text-[18px] font-yugothic font-bold text-gray-900 mb-4">
              Продажи по месяцам
            </h3>
            <div className="h-64 bg-gray-50 rounded-[12px] flex items-center justify-center">
              <p className="text-[14px] font-yugothic text-gray-500">
                График продаж (интеграция с системой аналитики)
              </p>
            </div>
          </div>

          {/* Последняя активность */}
          <RecentActivity />
        </div>

        {/* Быстрые действия */}
        <div className="bg-white border border-[#DADCE0] rounded-[20px] p-6">
          <h3 className="text-[18px] font-yugothic font-bold text-gray-900 mb-4">
            Быстрые действия
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="p-4 border border-[#DADCE0] rounded-[20px] text-center hover:bg-gray-50 focus:bg-gray-100 focus:outline-none transition-colors">
              <div className="text-[14px] font-yugothic font-medium text-gray-900">
                Добавить товар
              </div>
            </button>
            <button className="p-4 border border-[#DADCE0] rounded-[20px] text-center hover:bg-gray-50 focus:bg-gray-100 focus:outline-none transition-colors">
              <div className="text-[14px] font-yugothic font-medium text-gray-900">
                Создать отчёт
              </div>
            </button>
            <button className="p-4 border border-[#DADCE0] rounded-[20px] text-center hover:bg-gray-50 focus:bg-gray-100 focus:outline-none transition-colors">
              <div className="text-[14px] font-yugothic font-medium text-gray-900">
                Заказ поставщику
              </div>
            </button>
            <button className="p-4 border border-[#DADCE0] rounded-[20px] text-center hover:bg-gray-50 focus:bg-gray-100 focus:outline-none transition-colors">
              <div className="text-[14px] font-yugothic font-medium text-gray-900">
                Уведомления
              </div>
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
