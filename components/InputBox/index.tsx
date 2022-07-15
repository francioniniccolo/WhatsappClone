import {
  Entypo,
  FontAwesome5,
  Fontisto,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useState } from "react";

const InputBox = () => {
  const [message, setMessage] = useState("");

  const onMicrophonePress = () => {
    console.warn("microphone pressed");
  };

  const onSendPress = () => {
    console.warn("message " + message + " sending");
    setMessage("");
  };

  const onPress = () => {
    if (!message) {
      onMicrophonePress();
    } else {
      onSendPress();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <FontAwesome5 name="laugh-beam" size={24} color={"grey"} />
        <TextInput
          style={styles.textInput}
          multiline
          placeholder="Type a message"
          value={message}
          onChangeText={(e) => setMessage(e)}
        />
        <Entypo
          name="attachment"
          size={24}
          color={"grey"}
          style={styles.icons}
        />
        {!message && (
          <Fontisto
            name="camera"
            size={24}
            color={"grey"}
            style={styles.icons}
          />
        )}
      </View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.buttonContainer}>
          {!message ? (
            <MaterialCommunityIcons
              name="microphone"
              size={28}
              color={"white"}
            />
          ) : (
            <MaterialIcons name="send" size={28} color={"white"} />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default InputBox;
