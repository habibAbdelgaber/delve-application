// // import "../global.css";
// // import { Slot } from "expo-router";

// // export default function Layout() {
// //   return <Slot />;
// // }
// import "../global.css";
// import { Stack } from "expo-router";
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import { useEffect } from "react";
// import { Platform } from "react-native";
// import Head from "expo-router/head";

// export default function Layout() {
//   // (Optional) add Google Fonts for web:
//   // For native, you can load fonts via expo-font in the future.
//   return (
//     <>
//       {Platform.OS === "web" && (
//         <Head>
//           <link
//             rel="stylesheet"
//             href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Poppins:wght@600&display=swap"
//           />
//         </Head>
//       )}
//       <SafeAreaProvider>
//         <Stack screenOptions={{ headerShown: false }} />
//       </SafeAreaProvider>
//     </>
//   );
// }

// app/_layout.tsx
import "../global.css";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Head from "expo-router/head";
import { Platform } from "react-native";

export default function RootLayout() {
  return (
    <>
      {Platform.OS === "web" && (
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Poppins:wght@600&display=swap"
          />
        </Head>
      )}

      <SafeAreaProvider>
        <Stack>
          {/* Keep your landing page (index) header hidden if you like */}
          <Stack.Screen name="index" options={{ headerShown: false }} />

          {/* Tabs group lives as one "screen" in the root stack */}
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

          {/* Settings presented as a modal */}
          <Stack.Screen
            name="settings"
            options={{
              presentation: "modal",
              title: "Settings",
            }}
          />
        </Stack>
      </SafeAreaProvider>
    </>
  );
}


