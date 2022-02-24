import React from "react";
import { Button, Div, Image, Text } from "react-native-magnus";

const DonorSelectForm = (props) => {
  return (
    <Div {...props} bg="green" h="100%" w="100%" justifyContent="center">
      <Div bg="red" alignSelf="center">
        <Text> SELECT WHICH TYPE OF DONOR ARE YOU?</Text>
      </Div>
      <Div bg="blue" row justifyContent="center">
        <Div>
          <Div bg="red" alignSelf="center" justifyContent="center">
            <Image
              h={100}
              w={100}
              rounded="circle"
              source={require("./img/individual-icon.png")}
            />
          </Div>
          <Div bg="green" alignSelf="center" justifyContent="center">
            <Text textAlign="center">Individual</Text>
            <Text textAlign="center">Resturaunt or Home Donors</Text>
          </Div>
        </Div>
        <Div>
          <Div bg="green" alignSelf="center" justifyContent="center">
            <Image
              h={100}
              w={100}
              rounded="circle"
              source={require("./img/NGO-icon.png")}
            />
          </Div>
          <Div bg="red" alignSelf="center" justifyContent="center">
            <Text textAlign="center">NGOs</Text>
            <Text textAlign="center">Organizations or Special Drives</Text>
          </Div>
        </Div>
      </Div>
      <Div bg="yellow" justifyContent="center" alignSelf="center">
        <Button
          px="xl"
          py="lg"
          bg="red500"
          color="white"
          underlayColor="red600"
        >
          Next
        </Button>
      </Div>
    </Div>
  );
};

export default DonorSelectForm;
