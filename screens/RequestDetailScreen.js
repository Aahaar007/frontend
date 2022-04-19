import React from "react";
import Layout from "../components/wrappers/Layout";
import RequestDetailsLayout from "../containers/order/RequestDetailsLayout";

const RequestDetailScreen = (props) => {
  const data = props?.route?.params;
  return (
    <Layout
      bg="primary"
      position="relative"
      oveflow="visible"
      noScroll={true}
      pt={0}
    >
      <RequestDetailsLayout data={data} />
    </Layout>
  );
};

export default RequestDetailScreen;
