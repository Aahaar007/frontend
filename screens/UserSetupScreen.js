import React from "react";
import Layout from "../components/wrappers/Layout";
import UserOnBoardLayout from "../containers/userOnBoarding/UserOnBoardLayout";

const UserSetupScreen = () => {
  return (
    <Layout pt={0} px={0}>
      <UserOnBoardLayout />
    </Layout>
  );
};

export default UserSetupScreen;
