import React from "react";
import Layout from "../components/wrappers/Layout";
import MyOrderLayout from "../containers/myOrder/MyOrderLayout";

const MyOrderScreen = () => {
  return (
    <Layout bg="white">
      <MyOrderLayout />
    </Layout>
  );
};

export default MyOrderScreen;
