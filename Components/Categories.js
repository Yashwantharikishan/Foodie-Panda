import React from "react";
import { ScrollView, Text, View } from "react-native";
import CategoryCard from "./CategoryCard";
import ImgePath from "../assets/panda4.png";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* Category Card  */}
      <CategoryCard imgUrl={ImgePath} title="Testing 1" />
      <CategoryCard imgUrl={ImgePath} title="Testing 2" />
      <CategoryCard imgUrl={ImgePath} title="Testing 3" />
      <CategoryCard imgUrl={ImgePath} title="Testing 3" />
      <CategoryCard imgUrl={ImgePath} title="Testing 3" />
      {/* <Text>Categories Hello</Text> */}
    </ScrollView>
  );
};

export default Categories;
