import React from "react";
import { Div, Button, Icon, Text } from "react-native-magnus";

const Header = (props) => {
  return (
    <Div {...props}>
      <Button w="100%" h={60} mb={2} bg="primary">
        <Icon
          name="plus"
          fontFamily="FontAwesome"
          color="white"
          fontSize={23}
          pt={10}
          mr={10}
        />
        <Text color="black" fontSize={30}>
          Add Hotspot
        </Text>
      </Button>
      <Div
        row
        w="100%"
        h={60}
        justifyContent="space-between"
        bg="ashGray"
        p={7}
        rounded="xl"
      >
        <Button w="49.5%" h="100%" bg="white" color="black">
          <Text>Filter</Text>
          <Icon name="filter" fontFamily="AntDesign" fontSize={15} ml={10} />
        </Button>
        <Button w="49.5%" h="100%" bg="white" color="black">
          <Text>Sort</Text>
          <Icon name="sort" fontFamily="FontAwesome" fontSize={15} ml={10} />
        </Button>
      </Div>
    </Div>
  );
};

export default Header;
