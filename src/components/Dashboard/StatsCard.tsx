import React from "react";
import Icon from "@/components/ui/icon";

interface StatsCardProps {
  title: string;
  value: string;
  icon: string;
  trend?: {
    value: string;
    isPositive: boolean;
  };
}

const StatsCard = ({ title, value, icon, trend }: StatsCardProps) => {
  return (
    <div className="bg-white border border-[#DADCE0] rounded-[20px] p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
          <Icon name={icon} size={24} className="text-blue-600" />
        </div>
        {trend && (
          <div
            className={`text-sm font-medium ${trend.isPositive ? "text-green-600" : "text-red-600"}`}
          >
            {trend.isPositive ? "+" : ""}
            {trend.value}
          </div>
        )}
      </div>
      <h3 className="text-[14px] font-yugothic text-gray-600 mb-1">{title}</h3>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  );
};

export default StatsCard;
