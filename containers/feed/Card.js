import React from "react";
import { Button, Div, Text } from "react-native-magnus";
import Expire from "./Expire";
import { theme } from "../../styles/theme";
import { useNavigation } from "@react-navigation/core";
const Card = (props) => {
  const navigation = useNavigation();
  const { quantity, address, isVeg, imgSrc, timeOfExpiry, unit } =
    props.donationData;
  return (
    <Button
      shadow="md"
      block
      color="white"
      p="none"
      rounded="xl"
      mt={20}
      onPress={() => {
        navigation.navigate("BookFood", props.donationData);
      }}
      {...props}
    >
      <Div
        p="none"
        flex={1}
        bgImg={{
          uri: imgSrc,
        }}
      >
        <Div row mt={200} h={100} bg="white">
          <Div flex={3}>
            <Text p={15} pb={0} fontSize={30} fontWeight="600">
              Food for {quantity}
            </Text>
            <Text
              p={15}
              pt={0}
              fontSize={15}
              fontWeight="500"
              color={theme.colors.dimGray}
            >
              {address}
            </Text>
          </Div>

          <Div flex={1}>
            <Div py={15}>
              <Expire
                color={isVeg ? "green" : "red"}
                time={timeOfExpiry}
                unit={unit}
              />
            </Div>
          </Div>
        </Div>
      </Div>
    </Button>
  );
};

export default Card;
