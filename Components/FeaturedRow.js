import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCards from "./RestaurantCards";
import ImgePath from "../assets/panda4.png";

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row  items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contntContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="px-4 "
      >
        {/* RestaurantCards...... */}
        <RestaurantCards
          id={123}
          imageUrl={ImgePath}
          title="Yo yash!!"
          rating={4.5}
          genre="japanese"
          address="123 chawali agra "
          short_description="This is a test description "
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCards
          id={123}
          imageUrl={ImgePath}
          title="Yo yash!!"
          rating={4.5}
          genre="japanese"
          address="123 chawali agra "
          short_description="This is a test description "
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCards
          id={123}
          imageUrl={ImgePath}
          title="Yo yash!!"
          rating={4.5}
          genre="japanese"
          address="123 chawali agra "
          short_description="This is a test description "
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCards
          id={123}
          imageUrl={ImgePath}
          title="Yo yash!!"
          rating={4.5}
          genre="japanese"
          address="123 chawali agra "
          short_description="This is a test description "
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
