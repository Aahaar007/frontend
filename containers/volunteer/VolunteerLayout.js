import React, { useState } from "react";
import { Div, Overlay, Text } from "react-native-magnus";
import CreateHotspotOverlay from "./CreateHotspotOverlay";
import Header from "./Header";
import HotspotListing from "./HotspotListing";

const VolunteerLayout = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const toggleOverlay = () => {
    const temp = showOverlay;
    setShowOverlay(!temp);
  };
  return (
    <Div pb={145}>
      <Header toggleOverlay={toggleOverlay} />
      <CreateHotspotOverlay show={showOverlay} toggleShow={toggleOverlay} />
      <HotspotListing />
    </Div>
  );
};

export default VolunteerLayout;
