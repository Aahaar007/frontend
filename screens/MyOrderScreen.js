import React from "react";
import { Text } from "react-native-magnus";
import Layout from "../components/wrappers/Layout";
import MyOrderLayout from "../containers/myOrder/MyOrderLayout";
const MyOrderScreen = () => {
  return (
    <Layout bg="white" noScroll={true}>
      <MyOrderLayout />
    </Layout>
  );
};

export default MyOrderScreen;
