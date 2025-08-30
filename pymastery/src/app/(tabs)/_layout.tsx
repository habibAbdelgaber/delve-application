// app/(tabs)/_layout.tsx
import { Tabs } from "expo-router";
import { useColorScheme } from "nativewind";
import { Home, User } from "lucide-react-native";

export default function TabsLayout() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: isDark ? "#fbbf24" : "#2563eb", // amber vs blue
        tabBarInactiveTintColor: isDark ? "#9ca3af" : "#6b7280", // gray shades
        tabBarStyle: {
          backgroundColor: isDark ? "#111827" : "#f9fafb", // bg-dark vs bg-light
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => <User color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}
