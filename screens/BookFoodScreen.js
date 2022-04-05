import React from "react";
import { Div } from "react-native-magnus";
import Layout from "../components/wrappers/Layout";
import OrderLayout from "../containers/order/OrderLayout";

const BookFoodScreen = (props) => {
  const data = props.route.params;
  return (
    <Layout bg="white" noScroll={true} position="relative">
      <OrderLayout data={data} />
    </Layout>
  );
};

export default BookFoodScreen;
