import { View, Text } from "react-native";

export default function HomeTab() {
  return (
    <View className="flex-1 items-center justify-center bg-background-light dark:bg-background-dark">
      <Text className="text-xl font-bold text-primary">🏠 Home Tab</Text>
      <Text className="mt-2 text-gray-600 dark:text-gray-300">
        This is your first tab screen.
      </Text>
    </View>
  );
}
