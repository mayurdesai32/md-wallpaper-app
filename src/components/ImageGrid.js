import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { MasonryFlashList } from "@shopify/flash-list";
import ImageCard from "./ImageCard";
import { getColoumnCount, wp } from "../asserts/common";

const ImageGrid = ({ images }) => {
  const column = getColoumnCount();
  return (
    <View style={styles.container}>
      <MasonryFlashList
        contentContainerStyle={styles.listContainer}
        data={images}
        numColumns={column}
        initialNumToRender={1000}
        renderItem={({ item, index }) => (
          <ImageCard item={item} index={index} column={column} />
        )}
        estimatedItemSize={200}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 3,
    width: wp(100),
  },
  listContainer: {
    paddingHorizontal: wp(4),
  },
});

export default ImageGrid;
