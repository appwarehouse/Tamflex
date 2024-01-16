import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";

function AppTextInput({ icon, ...OtherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.dark}
          style={styles.icon}
        />
      )}
      <TextInput style={defaultStyles.text} {...OtherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.medium,
    borderRadius: 5,
    flexDirection: "row",
    marginVertical: 10,
    overflow: "hidden",
    padding: 15,
    width: "100%",
  },
  icon: { margin: 10 },
});

export default AppTextInput;
