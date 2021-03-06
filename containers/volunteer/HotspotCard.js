import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Div, Image, Text, Button } from "react-native-magnus";
const HotspotCard = (props) => {
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
  const hotspotColor = data?.isNGO === true ? "ngoBlue" : "gentlePink";
  const navigator = useNavigation();
  return (
    <Button
      p={0}
      my={5}
      mx={3}
      bg="transparent"
      shadow="sm"
      rounded="xl"
      onPress={() => {
        if (!props.noClick) navigator.navigate("HotspotDetail", { data: data });
      }}
    >
      <Div overflow="hidden" bg="white" w="100%" {...props}>
        <Div position="relative">
          <Image
            source={{
              uri: data?.imgSrc?.link,
            }}
            w="100%"
            h={200}
          />
          {data?.isNGO === true && (
            <Div
              position="absolute"
              right={10}
              top={10}
              borderWidth={1}
              borderColor="yellow"
              rounded={8}
              p={2}
            >
              <Text color="yellow">NGO</Text>
            </Div>
          )}
        </Div>
        <Div
          row
          justifyContent="space-between"
          pr={10}
          py={5}
          alignItems="center"
        >
          <Div w="74%">
            <Text p={15} pb={0} fontSize={30} fontWeight="600" color="black">
              {data?.name}
            </Text>
            <Text p={15} pt={0} fontSize={15} fontWeight="500" color="dimGray">
              {data?.address}
            </Text>
          </Div>
          <Div borderColor={hotspotColor} borderWidth={2} rounded="lg" h={90}>
            <Div h={40} w={90} bg={hotspotColor}>
              <Text color="white" fontSize={30} textAlign="center">
                {data?.capacity}
              </Text>
            </Div>
            <Div h={40} w={90} justifyContent="center">
              <Text color={hotspotColor} fontWeight="600" textAlign="center">
                PEOPLE COUNT
              </Text>
            </Div>
          </Div>
        </Div>
      </Div>
    </Button>
  );
};

export default HotspotCard;
