import React from "react";
import { View, Text } from "react-native";
import { Link } from "expo-router";

export function Content() {
  return (
    <View className="flex-1 bg-background-light dark:bg-background-dark">
      <View className="py-12 md:py-24 lg:py-32 xl:py-48">
        <View className="px-4 md:px-6">
          <View className="items-center gap-4 text-center">
            <Text
              accessibilityRole="header"
              className="text-3xl native:text-5xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 dark:text-gray-50"
            >
              Welcome to Project ACME
            </Text>

            <Text className="mx-auto max-w-[700px] text-lg md:text-xl text-gray-600 dark:text-gray-400">
              Discover and collaborate on acme. Explore our services now.
            </Text>

            <View className="mt-4 items-center">
              <Link
                suppressHighlighting
                href="/home"  // into your tabs
                className="flex h-10 items-center justify-center rounded-md bg-gray-900 px-5 text-sm font-medium text-gray-50 web:shadow ios:shadow transition-colors hover:bg-gray-900/90 active:bg-gray-800/90 web:focus-visible:outline-none web:focus-visible:ring-1 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              >
                Explore
              </Link>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
