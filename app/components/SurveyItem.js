import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { ButtonGroup, ButtonGroupProps } from "react-native-elements";

import AppText from "./AppText";
import AppTextInput from "./AppTextInput";
import colors from "../config/colors";
import ImageInput from "./ImageInput";
import Screen from "./Screen";

function SurveyItem({ question }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [imageUri, setImageUri] = useState();
  const handleAdd = (uri) => {
    setImageUri(uri);
  };
  return (
    <>
      <AppText style={styles.question}>{question}</AppText>

      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <ButtonGroup
            buttons={["N/A", "No", "Yes"]}
            buttonStyle={{ backgroundColor: colors.light }}
            onPress={(index) => setSelectedIndex(index)}
            selectedButtonStyle={{ backgroundColor: colors.green }}
            selectedTextStyle={{ color: colors.black, fontWeight: "bold" }}
            selectedIndex={selectedIndex}
          />
        </View>
        <View style={styles.attachmentContainer}>
          <ImageInput imageUri={imageUri} onChangeImage={handleAdd} />
        </View>
      </View>
      <AppTextInput
        name="description"
        placeholder="Description"
        multiline={true}
      />
    </>
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

export default SurveyItem;
