import React, { useState } from "react";
import NavBar from "../components/wrappers/NavBar";
import DonateRecieveScreen from "./DonateRecieveScreen";
import ProfileScreen from "./ProfileScreen";
import VolunteerScreen from "./VolunteerScreen";

const NavScreen = () => {
  // tabSelected can be "donate-recieve, volunteer, my-order, profile"
  const [tabSelected, setTabSelected] = useState("donate-recieve");
  const changeTab = (val) => setTabSelected(val);
  return (
    <NavBar selected={tabSelected} changeSelected={changeTab}>
      {tabSelected === "donate-recieve" && <DonateRecieveScreen />}
      {tabSelected === "profile" && <ProfileScreen />}
      {tabSelected === "volunteer" && <VolunteerScreen />}
    </NavBar>
  );
};

export default NavScreen;
