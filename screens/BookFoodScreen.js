import React from "react";
import Layout from "../components/wrappers/Layout";
import OrderLayout from "../containers/order/OrderLayout";

const BookFoodScreen = () => {
  return (
    <Layout bg="white">
      <OrderLayout />
    </Layout>
  );
};

export default BookFoodScreen;
