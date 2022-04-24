import React, { useCallback, useEffect, useState } from "react";
import {
  Button,
  Div,
  Icon,
  ScrollDiv,
  Text,
  WINDOW_WIDTH,
  WINDOW_HEIGHT,
} from "react-native-magnus";
import { useNavigation } from "@react-navigation/native";
import Svg, { Circle } from "react-native-svg";
import { Dimensions } from "react-native";
import Spinner from "../components/Spinner";
import { RefreshControl } from "react-native";

import { theme } from "../styles/theme";
import DonationCard from "../components/DonationCard";
import { useGetUserFoodListingsQuery } from "../services/aahaar";

const MyDonationsScreen = () => {
  const { data, error, isLoading, refetch } = useGetUserFoodListingsQuery(
    {},
    { refetchOnMountOrArgChange: true, refetchOnFocus: true }
  );

  const windowHeight = Dimensions.get("window").height;
  const navigation = useNavigation();
  return (
    <Div h="100%" bg="white" pt="45%" position="relative">
      <Svg position="absolute" top={(-windowHeight / 100) * 11.9} zIndex={0}>
        <Circle cx="50%" cy="-25%" r="90%" fill={theme.colors.staleYellow} />
      </Svg>
      <Div position="absolute" h="35%" w="100%" top={0} pt="15%" px={30}>
        <Div w="100%" col>
          <Div row justifyContent="center">
            <Text mr={0} fontSize={30} fontWeight={"bold"} mt={40}>
              My Donations
            </Text>
          </Div>
        </Div>
      </Div>
      <Spinner
        show={isLoading}
        left={WINDOW_WIDTH / 2 - 40}
        top={WINDOW_HEIGHT / 4}
        imgStyle={{ height: 80, width: 80 }}
      />
      <ScrollDiv
        col
        px={10}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={() => refetch()} />
        }
      >
        {data?.foodListings?.map((foodListing) => {
          return (
            <DonationCard key={foodListing._id} foodListing={foodListing} />
          );
        })}
      </ScrollDiv>
    </Div>
  );
};

export default MyDonationsScreen;
