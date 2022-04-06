import React from "react";
import Layout from "../components/wrappers/Layout";
import HotspotDetailLayout from "../containers/hotspot/HotspotDetailLayout";

const HotspotDetailScreen = (props) => {
  const route = props.route;
  return (
    <Layout>
      <HotspotDetailLayout data={route.prams.data} />
    </Layout>
  );
};

export default HotspotDetailScreen;
