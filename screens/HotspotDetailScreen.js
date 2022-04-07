import React from "react";
import Layout from "../components/wrappers/Layout";
import HotspotDetailLayout from "../containers/hotspot/HotspotDetailLayout";

const HotspotDetailScreen = (props) => {
  const { route } = props;
  return (
    <Layout bg="white">
      <HotspotDetailLayout data={route?.params.data} />
    </Layout>
  );
};

export default HotspotDetailScreen;
