import React from "react";
import { Div } from "react-native-magnus";
import Header from "./Header";
import HotspotListing from "./HotspotListing";

const VolunteerLayout = () => {
  return (
    <Div pb={145}>
      <Header />
      <HotspotListing />
    </Div>
  );
};

export default VolunteerLayout;
