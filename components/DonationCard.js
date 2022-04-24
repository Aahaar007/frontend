import React, { useEffect, useState } from "react";
import { Button, Div, Text } from "react-native-magnus";
import Expire from "../containers/feed/Expire";
import { theme } from "../styles/theme";
import { useNavigation } from "@react-navigation/core";

const DonationCard = (props) => {
  const navigation = useNavigation();
  let { quantity, address, isVeg, photos, timeOfExpiry } = props.foodListing;

  const selTime = new Date(timeOfExpiry);
  let currTime = Date.now();
  timeOfExpiry = Math.floor((selTime.getTime() - currTime) / 60000);

  const [timer, setTimer] = useState(timeOfExpiry);
  useEffect(() => {
    const interval = setInterval(() => {
      currTime = Date.now();
      setTimer(Math.floor((selTime.getTime() - currTime) / 60000));
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    console.log(timer);
  }, [timer]);

  return (
    <Button
      shadow="md"
      block
      color="white"
      p="none"
      rounded="xl"
      mt={20}
      onPress={() => {
        navigation.navigate("DonationDetail", { id: props?.foodListing?._id });
      }}
      {...props}
    >
      <Div
        p="none"
        flex={1}
        bgImg={{
          uri: photos[0]?.link,
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
              <Expire color={isVeg ? "green" : "red"} time={timer} />
            </Div>
          </Div>
        </Div>
      </Div>
    </Button>
  );
};

export default DonationCard;
