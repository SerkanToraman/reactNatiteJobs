/*
RN's Fundamental Components 

1. Text - 
  for displaying text. You can style it and nest other components inside it.
2. View - 
  it is used to create a container or "view" for the other components. Think oof it as a box or container that can hold other components. It is similar to div in HTML but with some added functionality specific to mobile apps. It is often used to create layout structures for other components. It has number of props that can be used to control its appearance & behavior.
  It uses flexbox layout by default.
3. TouchableOpacity - 
  If you are looking to create a button or another interactie element that fades in opacity when pressed, you can use TouchableOpacity component. Think of it like a cousin to the Button component in React with more Customization options and flexibility.
4. ActivityIndicator - 
  It is used for showing a spinner or loading indicator in your app. You can customize its color, size, and other properties.
5. Flatlist - 
  It is used for rendering a long list of items that need to be scrolled efficiently. It is like the map function in React. But it has extra features like: optimized scroll performance and item separation.
  For lager lists with smooth scrolling, use Flatlist.
  For smaller lists, use Map function.
6. ScrollView - 
  It is like a magic box that can hold multiple components and views, providing a scrolling container for them. It is like overflow: scroll in CSS, allowing you  to easily navigate through a list of items or a large amount of content in our app. We can make sure that the users can easliy explore all the content, making the app more intuitive and user-friendly.
7. SafeAreaView - 
  It provides a safe zone to render your app's content without being covered by the device's hardware features like the notch at the top of the screen and the home button at the bottom, or the status bar at the top of the screen.
*/
//Note: If the app is not working on the phone run npm install -g expo-cli and then run expo-cli-start --tunnel

import { useState } from "react";
import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "@/components";

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.white },
          headerShadowVisible: false,
          //This is for the left side of the header
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          //This is for the right side of the header
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          ),
          //This is for the header title
          headerTitle: "",
        }}
      />
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
