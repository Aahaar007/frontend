import React from "react";
import Layout from "../components/wrappers/Layout";
import DonationDetailLayout from "../containers/foodDonation/DonationDetailLayout";

const DonationDetailScreen = (props) => {
  const data = props?.route?.data;
  return (
    <Layout noScroll={true} bg="primary" position="relative">
      <DonationDetailLayout data={data} />
    </Layout>
  );
};

export default DonationDetailScreen;
