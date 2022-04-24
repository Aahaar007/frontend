import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Div, Text } from "react-native-magnus";

const ReqeustCard = (props) => {
  {
    /*
    amount
    status
*/
  }

  const { amount, status, donorName, description } = props.data;
  const navigator = useNavigation();
  return (
    <Button
      p={0}
      bg="transparent"
      onPress={() =>
        navigator.navigate("RequestDetail", { data: { request: props.data } })
      }
    >
      <Div
        borderColor="faintGray"
        borderBottomWidth={1}
        borderTopWidth={1}
        px={5}
        py={3}
        w="100%"
        justifyContent="center"
      >
        <Div row justifyContent="space-between" alignItems="center">
          <Div w="80%">
            <Text fontSize={20} fontWeight="600">
              <Text fontSize={20} fontWeight="bold">
                Requested{" "}
              </Text>
              <Text>{description} </Text>from
              <Text fontSize={20} fontWeight="bold">
                {" "}
                {donorName}
                {"  "}
              </Text>
            </Text>
            <Text fontSize={15} fontWeight="bold">
              Status: {status}
            </Text>
          </Div>
          <Div
            bg="primary"
            justifyContent="center"
            alignItems="center"
            h={80}
            w={80}
            rounded={20}
          >
            <Text fontWeight="bold" fontSize={15}>
              AMOUNT
            </Text>
            <Text textAlign="center" fontSize={28} bg="white" w="100%">
              {amount}
            </Text>
          </Div>
        </Div>
      </Div>
    </Button>
  );
};

export default ReqeustCard;
