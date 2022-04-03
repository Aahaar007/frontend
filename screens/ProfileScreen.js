import Layout from "../components/wrappers/Layout";
import React, { useEffect } from "react";
import ProfileLayout from "../containers/profile/ProfileLayout";

const ProfileScreen = (props) => {
  const { route } = props;
  return (
    <Layout bg="white" mb={10}>
      <ProfileLayout canGoBack={route?.params?.canGoBack} />
    </Layout>
  );
};

export default ProfileScreen;
