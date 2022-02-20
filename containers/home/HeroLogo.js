import React from "react";

import { Div } from "react-native-magnus";
import ImageBox from "../../components/ImageBox";
import SubTitle from "../../components/SubTitle";
import Title from "../../components/Title";
const HeroLogo = () => {
  return (
    <Div>
      <Div alignItems="center" position="relative" w={375} mt={157} zIndex={2}>
        <ImageBox h={194} src={require("./img/logo.png")} />
        <ImageBox
          position="absolute"
          top={80}
          left={30}
          h={167.5}
          w={"82%"}
          src={require("./img/small_boxes.png")}
          zIndex={-1}
        />
      </Div>
      <Div mt={50} alignItems="center">
        <Title>Let's get you setup!</Title>
        <SubTitle color="white" fontSize={22} fontWeight="100">
          so you can go save the world
        </SubTitle>
      </Div>
    </Div>
  );
};

export default HeroLogo;
