import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Div, Icon, Text, WINDOW_WIDTH } from "react-native-magnus";
import QRCode from "react-native-qrcode-svg";

const RequestDetailsLayout = (props) => {
  //const { data } = props;

  const navigation = useNavigation();

  const data = {
    _id: "6252b7147d9d3acfd03d6332",
    amount: 21,
    orderId: "6252b6e37d9d3acfd03d632f",
    status: "ACTIVE",
    uid: "SUDgNUIQwIQoZoE6pSYKQHablNt2",
    code: "V1StGXR8_Z5j",
  };
  console.log(data);
  return (
    <Div w="100%" h="100%" overflow="visible" pt={150} alignItems="center">
      <Div
        position="absolute"
        bg="white"
        top={0}
        zIndex={0}
        w={WINDOW_WIDTH}
        pt={40}
        pb={25}
        px={10}
        roundedBottom={30}
      >
        <Button
          p={0}
          bg="transparent"
          px={10}
          position="absolute"
          onPress={() => navigation.goBack()}
          top={45}
          left={5}
        >
          <Icon
            fontFamily="FontAwesome"
            name="angle-left"
            fontSize={50}
            color="black"
          />
        </Button>
        <Div row alignItems="center" justifyContent="center">
          <Text fontSize={25}>Confirmation</Text>
        </Div>
        <Div row justifyContent="center" mt={10}>
          <Text fontSize={20}>ORDER STATUS: </Text>
          <Text
            fontSize={20}
            color={data?.status === "ACTIVE" ? "green" : "dangerRed"}
            fontWeight="bold"
          >
            {data?.status}
          </Text>
        </Div>
      </Div>
      <Text
        color="white"
        textAlign="center"
        fontSize={30}
        fontWeight="800"
        mt={10}
      >
        Show this QR Code or give this code to the donor
      </Text>
      <Div bg="white" px={30} py={30} rounded={15} my={20}>
        <Div row justifyContent="center">
          <QRCode value={data?.code} size={150} />
        </Div>

        <Div position="relative" borderWidth={3} borderColor="green" my={20}>
          <Text fontWeight="bold" my={10} mx={20}>
            Request Code: {data?.code}
          </Text>
        </Div>
        <Div>
          <Text fontSize={25} fontWeight="bold">
            Malhar Caterers
          </Text>
          <Div row mt={10}>
            <Icon
              name="location-pin"
              fontFamily="Entypo"
              color="primary"
              fontSize={18}
            />
            <Text>420, Guitar road</Text>
          </Div>
          <Div row mt={5}>
            <Icon
              name="clock"
              fontFamily="Feather"
              color="primary"
              fontSize={18}
            />
            <Text>10:15 AM</Text>
          </Div>
          <Text fontSize={20} mt={15}>
            Quantity: {data?.amount} servings
          </Text>
        </Div>
      </Div>
      <Div>
        <Button
          borderColor="white"
          borderWidth={2}
          bg="transparent"
          py={5}
          px={20}
          fontSize={20}
        >
          CANCEL BOOKING
        </Button>
      </Div>
      <Div
        position="absolute"
        bg="white"
        bottom={0}
        zIndex={0}
        w={WINDOW_WIDTH}
        roundedTop={30}
        px={50}
        py={10}
        alignItems="center"
      >
        <Text>Thank you for your contribution</Text>
        <Text>in reducing food waste and hunger</Text>
      </Div>
    </Div>
  );
};

export default RequestDetailsLayout;
