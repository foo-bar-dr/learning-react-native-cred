import { StyleSheet, Dimensions } from "react-native";

var width = Dimensions.get("window").width; //full width

export const cardStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  card: {
    // backgroundColor: "red",
    minWidth: 150,
    color: "white",
    margin: 20,
    // width: width * 0.9,
    maxWidth: 600,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    padding: 20,
    height: 130,
  },
  longCard: {
    height: 130,
    width: width * 0.9,
    maxWidth: 600,
    flexDirection: "row",
  },
  longCardImage: {
    width: "100%",
    flex: 5,
    height: "100%",
  },
  longCardText: {
    flex: 6,
    color: "white",
    fontSize: 20,
  },
  squareCard: {
    height: 150,
    width: 150,
  },
  squareCardText: {
    flex: 4,
    color: "white",
    fontSize: 12,
    textAlign: "center",
  },
  squareCardImage: {
    width: "100%",
    flex: 6,
    height: "100%",
  },
});
