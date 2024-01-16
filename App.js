import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ButtonGroup } from "react-native-elements";

import AppText from "./app/components/AppText";
import AppTextInput from "./app/components/AppTextInput";
import AppButton from "./app/components/AppButton";
import Screen from "./app/components/Screen";

import colors from "./app/config/colors";
import { TouchableWithoutFeedback } from "react-native";
import ImageInput from "./app/components/ImageInput";
import SurveyItem from "./app/components/SurveyItem";

export default function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [imageUri, setImageUri] = useState();
  const handleAdd = (uri) => {
    setImageUri(uri);
  };
  return (
    <Screen style={styles.container}>
      <SurveyItem question="Where there any delays due to weather?" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  attachmentContainer: {
    width: "40%",
    alignItems: "flex-end",
  },
  button: {
    alignItems: "center",
    padding: 1,
    width: "33.34%",
    backgroundColor: colors.light,
    padding: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    marginTop: 5,
  },
  buttonWrapper: {
    justifyContent: "flex-end",
    marginBottom: 10,
    width: "60%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  question: {
    justifyContent: "flex-start",
    width: "100%",
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
