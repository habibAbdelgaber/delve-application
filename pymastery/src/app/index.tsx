import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import { Header, Content, Footer } from "../components/Layout";

export default function Page() {
  const { colorScheme } = useColorScheme();

  return (
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      <Header />
      <Content />
      <Footer />
    </SafeAreaView>
  );
}
