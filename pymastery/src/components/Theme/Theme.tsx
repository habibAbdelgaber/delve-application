// src/components/ThemeToggle.tsx
import { Pressable, View } from "react-native";
import { useColorScheme } from "nativewind";
import { Sun } from "lucide-react-native";

export function Theme() {
  const { colorScheme, setColorScheme } = useColorScheme();
  const next = colorScheme === "dark" ? "light" : "dark";

  return (
    <Pressable
      onPress={() => setColorScheme(next)}
      accessibilityRole="button"
      accessibilityLabel="Toggle theme"
    //   className="rounded-md p-2 active:scale-95 web:hover:opacity-80"
    className="rounded-full p-1 dark:bg-amber-400/10"
    >
      <View className="items-center justify-center">
        {/* Same Sun icon, different color depending on theme */}
        <Sun
          size={22}
          // Use your palette: yellow in dark, slate in light
          color={colorScheme === "dark" ? "#fbbf24" /* amber-400 */ : "#0f172a" /* slate-900 */}
          strokeWidth={2}
        />
      </View>
    </Pressable>
  );
}
