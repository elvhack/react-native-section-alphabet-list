import { StyleSheet } from "react-native";

const sizes = {
  containerWidth: 40,
  itemHeight: 15,
  itemFontSize: 10,
};

export const styles = StyleSheet.create({
  letterIndexContainer: {
    maxWidth: sizes.containerWidth,
    position: "absolute",
    top: 30,
    right: 0,
    height: "100%",
  },

  letterIndexList: {
    height: "100%",
  },

  letterIndexItem: {
    width: sizes.containerWidth,
    height: sizes.itemHeight,
    alignItems: "center",
    justifyContent: "center",
  },

  letterIndexLabel: {
    fontSize: sizes.itemFontSize,
    fontWeight: "bold",
    color: "grey",
  },
});
