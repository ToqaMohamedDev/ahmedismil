"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";

interface Tab {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  className?: string;
}

export default function Tabs({
  tabs,
  defaultValue,
  onValueChange,
  className = "",
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue || tabs[0]?.value);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    if (onValueChange) {
      onValueChange(value);
    }
  };

  return (
    <div className={cn("border-b border-border", className)}>
      <div className="flex space-x-1 space-x-reverse">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => handleTabChange(tab.value)}
            className={cn(
              "relative px-4 py-2 text-sm font-medium transition-colors",
              activeTab === tab.value
                ? "text-primary"
                : "text-muted-foreground hover:text-primary"
            )}
          >
            <span className="flex items-center space-x-2 space-x-reverse">
              {tab.icon && <span>{tab.icon}</span>}
              <span>{tab.label}</span>
            </span>
            {activeTab === tab.value && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

