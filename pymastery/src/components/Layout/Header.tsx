import React from "react";
import { View, Pressable, Text } from "react-native";
import { Link } from "expo-router";
import { Settings } from "lucide-react-native";
import { Theme } from "../Theme/Theme";

export function Header() {
  return (
    <View className="bg-background-light dark:bg-background-dark">
      <View className="px-4 lg:px-6 h-14 flex-row items-center justify-between">
        <Link
          href="/"
          className="font-bold text-lg text-gray-900 dark:text-gray-50"
          accessibilityRole="link"
          accessibilityLabel="Go to ACME home"
        >
          ACME
        </Link>

        <View className="flex-row gap-4 sm:gap-6 items-center">
          <Link
            href="/"
            className="text-md font-medium text-gray-700 dark:text-gray-200 hover:underline web:underline-offset-4"
            accessibilityRole="link"
            accessibilityLabel="About"
          >
            About
          </Link>
          <Link
            href="/"
            className="text-md font-medium text-gray-700 dark:text-gray-200 hover:underline web:underline-offset-4"
            accessibilityRole="link"
            accessibilityLabel="Product"
          >
            Product
          </Link>
          <Link
            href="/"
            className="text-md font-medium text-gray-700 dark:text-gray-200 hover:underline web:underline-offset-4"
            accessibilityRole="link"
            accessibilityLabel="Pricing"
          >
            Pricing
          </Link>
          <Link
            href="/profile"
            className="text-md font-medium text-gray-700 dark:text-gray-200 hover:underline web:underline-offset-4"
            accessibilityRole="link"
            accessibilityLabel="Profile"
          >
            Profile
          </Link>

          {/* Settings modal button */}
          <Link href="/settings" asChild>
            <Pressable
              className="rounded-md p-2 web:hover:opacity-80"
              accessibilityRole="button"
              accessibilityLabel="Open settings"
              hitSlop={8}
            >
              <Settings size={20} color="#6b7280" />
            </Pressable>
          </Link>

          {/* Theme toggle (sun icon) */}
          <Theme />
        </View>
      </View>
    </View>
  );
}
