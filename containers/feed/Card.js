import React from "react";
import { Avatar, Button, Div, Icon, Image, Text } from "react-native-magnus";
const Card = (props) => {
  const {
    amount = 12,
    address = "Sagar gaire, Indore, M.P.",
    isVeg = true,
    imgSrc = "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80",
    timeOfExpiry = "5Hr",
  } = props.donationData;

  return (
    <Button block color="white" p="none" rounded="xl">
      <Div
        p="none"
        flex={1}
        bgImg={{
          uri: imgSrc,
        }}
      >
        <Div row mt={200} h={100} bg="white">
          <Div flex={3}>
            <Text>Food for {amount}</Text>
            <Text>{address}</Text>
          </Div>

          <Div row flex={1}>
            <Div>
              <Div>
                <Text>58 Km</Text>
              </Div>
              <Div>
                <Text>{timeOfExpiry}</Text>
              </Div>
              <Div>
                <Text>{isVeg ? "Veg" : "Non-Veg"}</Text>
              </Div>
            </Div>
            <Div>
              <Text>55</Text>
              <Text>minutes</Text>
            </Div>
          </Div>
        </Div>
      </Div>
    </Button>
  );
};

export default Card;
