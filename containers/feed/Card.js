import React from "react";
import { Button, Div, Text } from "react-native-magnus";
import Expire from "./Expire";
import { theme } from "../../styles/theme";
const Card = (props) => {
  const {
    amount = 12,
    address = "Sagar gaire, Indore, M.P.",
    isVeg = true,
    imgSrc = "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80",
    time = "5",
    unit = "hours",
  } = props.donationData;

  return (
    <Button shadow="md" block color="white" p="none" rounded="xl" mt={20}>
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
              Food for {amount}
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
              <Expire color={isVeg ? "green" : "red"} time={time} unit={unit} />
            </Div>
          </Div>
        </Div>
      </Div>
    </Button>
  );
};

export default Card;
