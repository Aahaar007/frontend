import React from "react";
import { Div } from "react-native-magnus";
import ProfileForm from "./ProfileForm";

const ProfileLayout = (props) => {
  return (
    <Div>
      <ProfileForm mt={0} canGoBack={props.canGoBack} />
    </Div>
  );
};

export default ProfileLayout;
