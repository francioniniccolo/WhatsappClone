import moment from "moment";
import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { ChatRoom } from "../../types";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

export type ChatListItemProps = {
  chatRoom: ChatRoom;
};

const ChatListItem = (props: ChatListItemProps) => {
  const { chatRoom } = props;

  const user = chatRoom.users[1];
  const navigtion = useNavigation();

  const onClick = () => {
    navigtion.navigate("ChatRoom", { id: chatRoom.id });
  };

  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image source={{ uri: user.imageUri }} style={styles.avatar} />
        </View>

        <View style={styles.midContainer}>
          <Text style={styles.username}>{user.name}</Text>
          <Text style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
        </View>

        <View style={styles.rightContainer}>
          {/*<Text style={styles.time}>Yesterday</Text>*/}
          <Text style={styles.time}>
            {moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ChatListItem;
