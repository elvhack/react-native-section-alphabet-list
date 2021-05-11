"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.styles = void 0;
var react_native_1 = require("react-native");
var sizes = {
    containerWidth: 40,
    itemHeight: 15,
    itemFontSize: 10,
};
exports.styles = react_native_1.StyleSheet.create({
    letterIndexContainer: {
        maxWidth: sizes.containerWidth,
        position: "absolute",
        top: "4.8%",
        right: 0,
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
