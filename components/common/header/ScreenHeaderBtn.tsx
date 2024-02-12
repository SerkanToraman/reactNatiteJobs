import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity, Image } from "react-native";

import styles from "./screenheader.style";
interface ScreenHeaderBtnProps {
  iconUrl: any; // Consider using a more specific type here, like string
  dimension: string;
  handlePress?: () => void;
}

const ScreenHeaderBtn: React.FC<ScreenHeaderBtnProps> = ({
  iconUrl,
  dimension,
  handlePress,
}) => {
  return (
    <TouchableOpacity style={styles.btnContainer}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
