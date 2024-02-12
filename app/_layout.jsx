import { Stack } from "expo-router";
import { useCallback } from "react";
//Special Utility function for custom fonts
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

//thse informations are in https://www.youtube.com/watch?v=mJ3bGvy0WAY&t=2335s . Min - 40
//A splash screen, also known as a launch screen, is the first screen a user sees when they open your app. It stays visible while the app is loading.

//https://docs.expo.dev/develop/user-interface/fonts/
SplashScreen.preventAutoHideAsync();

const Layout = () => {
  //This is for implementing fonts
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) return null;
  return <Stack onLayout={onLayoutRootView} />;
};

export default Layout;
