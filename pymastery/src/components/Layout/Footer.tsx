import React, { useMemo } from "react";
import { View, Text } from "react-native";

export function Footer() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <View className="shrink-0 bg-gray-50 dark:bg-gray-800 native:hidden border-t border-gray-200 dark:border-gray-700">
      <View className="py-6 px-4 md:px-6">
        <Text className="text-center text-gray-700 dark:text-gray-300">
          All Rights Reserved — ©{year} pymastery.com
        </Text>
      </View>
    </View>
  );
}
