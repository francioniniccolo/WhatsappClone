import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import EditScreenInfo from "../components/EditScreenInfo";
import { RootTabScreenProps } from "../types";
import ChatListItem from "../components/ChatListItem";
import users from "../data/Users";
import NewMessageButton from "../components/NewMessageButton";
import ContactListItem from "../components/ContactListItem";

export default function ContactsScreen({
  navigation,
}: RootTabScreenProps<"Contacts">) {
  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        data={users}
        renderItem={({ item }) => <ContactListItem user={item} />}
        keyExtractor={(item) => item.id}
      />
      {/*<NewMessageButton />*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
