import React from "react";
import { Div, Text } from "react-native-magnus";
import Layout from "../components/wrappers/Layout";
import VolunteerLayout from "../containers/volunteer/VolunteerLayout";

const VolunteerScreen = () => {
  return (
    <Layout bg="white" noScroll={true}>
      <VolunteerLayout />
    </Layout>
  );
};

export default VolunteerScreen;
