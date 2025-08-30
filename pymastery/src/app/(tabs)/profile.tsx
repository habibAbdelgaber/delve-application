import { View, Text } from "react-native";

export default function ProfileTab() {
  return (
    <View className="flex-1 items-center justify-center bg-background-light dark:bg-background-dark">
      <Text className="text-xl font-bold text-primary">👤 Profile Tab</Text>
      <Text className="mt-2 text-gray-600 dark:text-gray-300">
        This is your profile tab screen.
      </Text>
    </View>
  );
}
