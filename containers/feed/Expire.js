import React, { useEffect, useState } from "react";
import { Div, Text } from "react-native-magnus";

const Expire = (props) => {
  const [number, setNumber] = useState(props.time);
  const [unit, setUnit] = useState("minutes");

  useEffect(() => {
    //time >= 60 i.e. more than an hour
    //time >= 1440 i.e. more than a day
  }, [props.time]);

  return (
    <Div>
      {number > 0 ? (
        <>
          <Div
            h={40}
            w={55}
            alignSelf="center"
            justifyContent="center"
            borderColor={props.color}
            borderWidth={2}
            bg={props.color}
            rounded="lg"
          >
            <Text
              textAlign="center"
              color="white"
              fontSize={30}
              fontWeight="700"
              mt={-2}
            >
              {number}
            </Text>
          </Div>
          <Div
            h={45}
            w={55}
            alignSelf="center"
            justifyContent="flex-end"
            borderColor={props.color}
            borderWidth={2}
            rounded="lg"
            mt={-15}
            borderTopColor="transparent"
          >
            <Text
              textAlign="center"
              fontSize="xs"
              color={props.color}
              fontWeight="500"
            >
              {unit}
            </Text>
            <Text
              textAlign="center"
              fontSize="xs"
              color={props.color}
              fontWeight="500"
              pb={5}
              mt={-5}
            >
              to expiry
            </Text>
          </Div>
        </>
      ) : (
        <>
          <Div
            h={40}
            w={55}
            alignSelf="center"
            justifyContent="center"
            borderColor={"black"}
            borderWidth={2}
            bg={"black"}
            rounded="lg"
          >
            <Text
              textAlign="center"
              color="white"
              fontSize={30}
              fontWeight="700"
              mt={-2}
            >
              EX
            </Text>
          </Div>
          <Div
            h={45}
            w={55}
            alignSelf="center"
            justifyContent="flex-end"
            borderColor={"black"}
            borderWidth={2}
            rounded="lg"
            mt={-15}
            borderTopColor="transparent"
          >
            <Text
              textAlign="center"
              fontSize="xs"
              color={"black"}
              fontWeight="500"
            >
              Item
            </Text>
            <Text
              textAlign="center"
              fontSize="xs"
              color={"black"}
              fontWeight="500"
              pb={5}
              mt={-5}
            >
              expired
            </Text>
          </Div>
        </>
      )}
    </Div>
  );
};

export default Expire;
