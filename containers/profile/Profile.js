import React, { useState, useEffect } from "react";
import { Button, Div, Input, Text } from "react-native-magnus";
import ProfileComponent from "./../profile/ProfileComponent";
const property = [
  {
    titleHeader: "Let's get acquantied",
    src: "./img/hi title screen.svg",
    buttonText: "Let's go!",
    color: "#f9d57b",
    placeHolder: "",
  },
  {
    titleHeader: "What is your Name",
    src: "./img/introduce yourself screen.svg",
    buttonText: "Next",
    color: "#ff8774",
    placeHolder: "Enter Your Full Name...",
  },
  {
    titleHeader: "What is your Bithday",
    src: "./img/baby feeding.png",
    buttonText: "Next",
    color: "#ffbea2",
    placeHolder: "Enter Your Date of Birth",
  },
  {
    titleHeader: "Enter the Address",
    src: "./img/pidgeon carrier.png",
    buttonText: "Submit",
    color: "#90b7c1",
    placeHolder: "Enter Your Adress....",
  },
];
const Profile = () => {
  const [component, setComponent] = useState(0);
  return (
    <Div bg={property[component].color} h="100%">
      <ProfileComponent
        changeComponent={setComponent}
        value={component}
        prop={property}
      />
    </Div>
  );
};

export default Profile;
