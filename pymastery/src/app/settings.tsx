// app/settings.tsx
import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useColorScheme } from "nativewind";

export default function SettingsModal() {
  const { top, bottom } = useSafeAreaInsets();
  const { colorScheme } = useColorScheme();

  return (
    <View
      className="flex-1 bg-background-light dark:bg-background-dark"
      style={{ paddingTop: top, paddingBottom: bottom }}
    >
      <View className="px-4 py-4">
        <Text className="text-2xl font-bold text-gray-900 dark:text-gray-50">
          Settings
        </Text>
        <Text className="mt-2 text-gray-600 dark:text-gray-300">
          Theme: {colorScheme}
        </Text>

        {/* Example setting row */}
        <View className="mt-6 rounded-xl border border-gray-200 dark:border-gray-700 p-4">
          <Text className="text-gray-800 dark:text-gray-200">
            Some toggle(s) or preferences go here…
          </Text>
        </View>

        <Pressable
          onPress={() => router.back()}
          className="mt-8 self-start rounded-md bg-gray-900 px-4 py-2 dark:bg-gray-100"
        >
          <Text className="text-gray-50 dark:text-gray-900">Close</Text>
        </Pressable>
      </View>
    </View>
  );
}
