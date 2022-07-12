import React from "react";
import { View, Text } from "react-native";
import { ChatRoom } from "../../types";

const ChatListItem = (props: ChatRoom) => {
  return (
    <View>
      <Text>{chatRoom.lastMessage.content}</Text>
    </View>
  );
};

export default ChatListItem;
