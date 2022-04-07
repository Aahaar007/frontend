import React from "react";
import { Button, Div } from "react-native-magnus";
import Title from "../../components/Title";

const Header = () => {
  return (
    <Div>
      <Title color="black">My Orders</Title>
      <Div row w="100%" justifyContent="space-between">
        <Button w="49%">Filter</Button>
        <Button w="49%">Sort</Button>
      </Div>
    </Div>
  );
};

export default Header;
