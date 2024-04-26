import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { getImageSize, wp } from "../asserts/common";
import { theme } from "../asserts/constants/theme";

const ImageCard = ({ index, item, column }) => {
  const getImageHeight = () => {
    let { imageHeight: height, imageWidth: width } = item;
    return { height: getImageSize(height, width) };
  };
  const isLastRow = () => {
    return (index + 1) % column === 0;
  };
  return (
    <Pressable style={[styles.imageWrapper, !isLastRow() && styles.spacing]}>
      {/* <Image style={styles.images} source={{ uri: item?.webformatURL }} /> */}
      <Image
        style={[styles.images, getImageHeight()]}
        source={{ uri: item?.webformatURL }}
        contentFit="cover"
        transition={100}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  images: {
    height: 300,
    width: "100%",
  },
  imageWrapper: {
    backgroundColor: theme.colors.grayBG,
    borderRadius: theme.radius.xl,
    borderCurve: "continuous",
    overflow: "hidden",
    marginBottom: wp(2),
  },
  spacing: {
    marginRight: wp(2),
  },
});

export default ImageCard;
