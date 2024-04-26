import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import React from "react";
import { data } from "../asserts/constants/data";
import { theme } from "../asserts/constants/theme";
import { hp } from "../asserts/common";
import Animated, { FadeInDown, FadeInRight } from "react-native-reanimated";
const Categories = ({ handleChangeCategory, activeCategory }) => {
  return (
    <FlatList
      horizontal
      contentContainerStyle={styles.FlatListContainer}
      showsHorizontalScrollIndicator={false}
      data={data.categories}
      keyExtractor={(item, index) => index}
      renderItem={({ item, index }) => (
        <CategoryItem
          title={item}
          index={index}
          handleChangeCategory={handleChangeCategory}
          isActive={activeCategory == item}
        />
      )}
    />
  );
};

const CategoryItem = ({ title, index, isActive, handleChangeCategory }) => {
  let textColor = isActive ? theme.colors.white : theme.colors.neutral(0.8);
  let backgroundColor = isActive
    ? theme.colors.neutral(0.8)
    : theme.colors.white;
  return (
    <Animated.View entering={FadeInRight.delay(index * 200).duration(1000)}>
      <Pressable
        onPress={() => handleChangeCategory(isActive ? null : title)}
        style={[styles.category, { backgroundColor }]}
      >
        <Text style={[styles.title, { color: textColor }]}>{title}</Text>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  FlatListContainer: {
    // flex: 1,
    gap: 8,
  },
  category: {
    padding: 12,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: theme.colors.grayBG,
    borderRadius: theme.radius.lg,
    borderCurve: "continuous",
  },
  title: {
    fontSize: hp(1.8),
    fontWeight: theme.fontWeights.medium,
  },
});

export default Categories;
