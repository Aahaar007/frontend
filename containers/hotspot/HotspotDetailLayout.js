import React from "react";
import { Div, Text, Icon } from "react-native-magnus";
import SubTitle from "../../components/SubTitle";
import Title from "../../components/Title";
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
  const { description, contactNumber, isNGO } = data;
  return (
    <Div>
      <HotspotCard data={data} noClick={true} />
      <Div minH={190} rounded="sm" p={10}>
        <SubTitle color="black">About this hotspot</SubTitle>
        <Text>{description}</Text>
        {isNGO && (
          <Div rounded="sm" minH={50} mt={30}>
            <Div color="black" row>
              <SubTitle color="black">Contact Number</SubTitle>
              <Icon
                name="phone"
                fontFamily="FontAwesome"
                fontSize={20}
                color="black"
                ml={5}
              />
            </Div>
            <Text fontSize={18} selectable={true}>
              {contactNumber?.region + " " + contactNumber?.number}
            </Text>
          </Div>
        )}
      </Div>
    </Div>
  );
};

export default HotspotDetailLayout;
