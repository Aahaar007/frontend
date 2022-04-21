import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Div, Icon, Text } from "react-native-magnus";

const DonationCard = (props) => {
  {
    /* 
    quantity
    description
    isVeg
    address
    isActive
    timeOfExpiry
*/
  }

  const { quantity, description, isVeg, address, timeOfExpiry, isActive, _id } =
    props.data;
  const dateString = new Date(timeOfExpiry);

  const navigator = useNavigation();

  return (
    <Button
      p={0}
      bg="transparent"
      onPress={() => navigator.navigate("DonationDetail", { id: _id })}
    >
      <Div
        minH={90}
        borderColor="faintGray"
        borderBottomWidth={1}
        borderTopWidth={1}
        px={5}
        py={3}
      >
        <Div row justifyContent="space-between">
          <Text fontSize={25} w="94%" fontWeight="bold">
            Food for {quantity},{" "}
            <Text fontSize={20} fontWeight="300">
              {address}
            </Text>
          </Text>
          <Div
            borderColor={isVeg ? "green" : "red"}
            borderWidth={2}
            h={25}
            w={25}
            justifyContent="center"
            alignItems="center"
          >
            <Icon
              name="circle"
              fontFamily="FontAwesome"
              color={isVeg ? "green" : "red"}
              fontSize={18}
            />
          </Div>
        </Div>
        <Text fontSize={15} color="dimGray">
          {description}
        </Text>
        {isActive ? (
          <Text fontSize={15} fontWeight="bold">
            Expires at: {dateString.toUTCString()}
          </Text>
        ) : (
          <Text fontSize={15} fontWeight="bold">
            Donation expired
          </Text>
        )}
      </Div>
    </Button>
  );
};

export default DonationCard;
