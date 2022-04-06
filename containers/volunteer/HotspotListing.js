import React from "react";
import { ScrollDiv } from "react-native-magnus";
import HotspotCard from "./HotspotCard";

const data = [
  {
    name: "VITB Boys Hostel",
    address: "Kothri Kalan, Bhopal",
    capacity: 5000,
    description:
      "Population dense area with malnourished children, access to nutrition dense food is scarce.",
    imgSrc:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.kinja-img.com%2Fgawker-media%2Fimage%2Fupload%2Fs--F2AcYynK--%2Fc_scale%2Cf_auto%2Cfl_progressive%2Cq_80%2Cw_800%2Fubkngrbgbh8phpsy3rtf.jpg&f=1&nofb=1",
    isNGO: false,
    contactNumber: null,
    numberOfReports: 4,
    _id: "4",
  },
  {
    name: "VITB Boys Hostel",
    address: "Kothri Kalan, Bhopal",
    capacity: 5000,
    description:
      "Population dense area with malnourished children, access to nutrition dense food is scarce.",
    imgSrc:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.kinja-img.com%2Fgawker-media%2Fimage%2Fupload%2Fs--F2AcYynK--%2Fc_scale%2Cf_auto%2Cfl_progressive%2Cq_80%2Cw_800%2Fubkngrbgbh8phpsy3rtf.jpg&f=1&nofb=1",
    isNGO: true,
    contactNumber: { region: "+91", number: "8289182018" },
    numberOfReports: 4,
    _id: "5",
  },
  {
    name: "Pashupati Area",
    address: "Pashupati, Kathmandu",
    capacity: 2000,
    description: "Lots of people depending on people's sympothy",
    imgSrc:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tourismmail.com%2Fpublic%2Fuploads%2F2018%2F04%2FPashupatinath-temple-in-beggars.jpg&f=1&nofb=1",
    isNGO: false,
    contactNumber: null,
    numberOfReports: 4,
    _id: "2",
  },
];

const HotspotListing = (props) => {
  return (
    <ScrollDiv {...props}>
      {data.map((item) => {
        return <HotspotCard key={item._id} data={item} />;
      })}
    </ScrollDiv>
  );
};

export default HotspotListing;
