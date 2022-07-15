import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 15,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-start",
    //justifyContent: "space-between",
    padding: 10,
  },
  leftContainer: {
    flexDirection: "row",
  },
  midContainer: {
    justifyContent: "space-around",
  },
  rightContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  username: {
    fontWeight: "bold",
    fontSize: 16,
  },
  status: {
    fontSize: 16,
    color: "grey",
  },
});

export default styles;
