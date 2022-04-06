import React from "react";
import { Div } from "react-native-magnus";
import HotspotCard from "../volunteer/HotspotCard";

const HotspotDetailLayout = (props) => {
  //   const data = {
  //     name: "VITB Boys Hostel",
  //     address: "Kothri Kalan, Bhopal",
  //     capacity: 5000,
  //     description:
  //       "Population dense area with malnourished children, access to nutrition dense food is scarce.",
  //     imgSrc:
  //       "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.kinja-img.com%2Fgawker-media%2Fimage%2Fupload%2Fs--F2AcYynK--%2Fc_scale%2Cf_auto%2Cfl_progressive%2Cq_80%2Cw_800%2Fubkngrbgbh8phpsy3rtf.jpg&f=1&nofb=1",
  //     isNGO: false,
  //     contactNumber: null,
  //     numberOfReports: 4,
  //   };
  const data = props.data;
  return (
    <Div>
      <HotspotCard data={data} />
    </Div>
  );
};

export default HotspotDetailLayout;
