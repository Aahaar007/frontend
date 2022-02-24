import React from "react";
import Layout from "../components/wrappers/Layout";
import UserSetupLayout from "../containers/userOnBoarding/UserSetupLayout";

const UserSetupScreen = () => {
  return (
    <Layout pt={0} px={0}>
      <UserSetupLayout />
    </Layout>
  );
};

export default UserSetupScreen;
