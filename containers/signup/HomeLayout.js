import React from "react";

import { Div } from "react-native-magnus";
import HeroLogo from "./HeroLogo";
import LoginButtonGroup from "./LoginButtonGroup";

const HomeLayout = () => {
  return (
    <Div alignItems="center" position="relative">
      <HeroLogo />
      <LoginButtonGroup />
    </Div>
  );
};

export default HomeLayout;
