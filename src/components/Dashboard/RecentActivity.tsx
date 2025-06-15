import React from "react";
import Icon from "@/components/ui/icon";

interface Activity {
  id: string;
  type: "sale" | "order" | "stock";
  title: string;
  description: string;
  time: string;
}

const RecentActivity = () => {
  const activities: Activity[] = [
    {
      id: "1",
      type: "sale",
      title: "Продажа RTX 4070",
      description: "Видеокарта NVIDIA GeForce RTX 4070",
      time: "2 часа назад",
    },
    {
      id: "2",
      type: "order",
      title: "Новый заказ поставщику",
      description: "Заказ процессоров Intel Core i7",
      time: "4 часа назад",
    },
    {
      id: "3",
      type: "stock",
      title: "Низкий остаток",
      description: "SSD Samsung 970 EVO - осталось 3 шт.",
      time: "6 часов назад",
    },
  ];

  const getActivityIcon = (type: Activity["type"]) => {
    switch (type) {
      case "sale":
        return "TrendingUp";
      case "order":
        return "ShoppingCart";
      case "stock":
        return "AlertTriangle";
      default:
        return "Activity";
    }
  };

  const getActivityColor = (type: Activity["type"]) => {
    switch (type) {
      case "sale":
        return "text-green-600 bg-green-100";
      case "order":
        return "text-blue-600 bg-blue-100";
      case "stock":
        return "text-orange-600 bg-orange-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="bg-white border border-[#DADCE0] rounded-[20px] p-6">
      <h3 className="text-[18px] font-yugothic font-bold text-gray-900 mb-4">
        Последняя активность
      </h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${getActivityColor(activity.type)}`}
            >
              <Icon name={getActivityIcon(activity.type)} size={16} />
            </div>
            <div className="flex-1">
              <h4 className="text-[14px] font-yugothic font-medium text-gray-900">
                {activity.title}
              </h4>
              <p className="text-[14px] font-yugothic text-gray-600">
                {activity.description}
              </p>
              <p className="text-[12px] font-yugothic text-gray-500 mt-1">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
