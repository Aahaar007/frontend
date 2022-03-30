import React from "react";
import { useNavigation } from "@react-navigation/core";

import { Button, Div, Icon } from "react-native-magnus";
import SubTitle from "../../components/SubTitle";
import Title from "../../components/Title";
import { clearState } from "../../features/user/userSlice";
import { getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";

const auth = getAuth();

const HeroSignUp = (props) => {
  const nav = useNavigation();
  const dispatch = useDispatch();
  return (
    <Div {...props}>
      <Div flexDir="row" alignItems="center">
        <Button
          bg="white"
          rounded={15}
          w={40}
          h={40}
          mt={4}
          mr={15}
          onPress={async () => {
            if (auth.currentUser) await auth.signOut();
            dispatch(clearState());
            nav.goBack();
          }}
        >
          <Icon name="chevron-thin-left" fontFamily="Entypo" rounded={31} />
        </Button>
        <Title>Sign Up</Title>
      </Div>
      <SubTitle fontSize={15}>Please setup your account</SubTitle>
    </Div>
  );
};

export default HeroSignUp;
