import React from "react";
import { useNavigation } from "@react-navigation/core";

import { Button, Div, Icon, Text } from "react-native-magnus";

const UserOnBoardHeader = (props) => {
  const nav = useNavigation();
  return (
    <Div
      flexDir="row"
      justifyContent="space-around"
      alignItems="center"
      mt={50}
      {...props}
    >
      <Button
        bg="white"
        rounded={15}
        w={40}
        h={40}
        ml={-100}
        mr={15}
        onPress={() => nav.goBack()}
      >
        <Icon name="chevron-thin-left" fontFamily="Entypo" rounded={31} />
      </Button>
      <Text color="white" fontSize={30} ml={-250}>
        Sign Up
      </Text>
    </Div>
  );
};

export default UserOnBoardHeader;
