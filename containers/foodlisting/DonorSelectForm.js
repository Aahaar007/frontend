import React, { useEffect, useState } from "react";
import { Button, Div, Image, Text } from "react-native-magnus";
import ListingWrapper from "../../components/wrappers/ListingWrapper";
import { theme } from "../../styles/theme";

const DonorSelectForm = (props) => {
  const [donorType, setDonorType] = useState("");
  const [individualButton, setIndividualButton] = useState({
    borderColor: theme.colors.primary,
    rounded: "circle",
    ripple: true,
    borderWidth: 3,
    shadow: "xs",
    justifyContent: "center",
    alignSelf: "center",
    pl: 20,
    onPress: () => {
      setDonorType((curr) => (curr === "individual" ? "" : "individual"));
    },
  });
  const [NGOButton, setNGOButton] = useState({
    borderColor: theme.colors.primary,
    rounded: "circle",
    ripple: true,
    borderWidth: 3,
    shadow: "xs",
    justifyContent: "center",
    alignSelf: "center",
    onPress: () => {
      setDonorType((curr) => (curr === "NGO" ? "" : "NGO"));
    },
  });

  const selectedButton = {
    bg: theme.colors.primary,
    shadow: "md",
  };

  const unselectedButton = {
    bg: "white",
    shadow: "xs",
  };

  useEffect(() => {
    switch (donorType) {
      case "NGO":
        setIndividualButton({ ...individualButton, ...unselectedButton });
        setNGOButton({ ...NGOButton, ...selectedButton });
        break;
      case "individual":
        setIndividualButton({ ...individualButton, ...selectedButton });
        setNGOButton({ ...NGOButton, ...unselectedButton });
        break;
      default:
        setIndividualButton({ ...individualButton, ...unselectedButton });
        setNGOButton({ ...NGOButton, ...unselectedButton });
    }
    console.log(donorType);
  }, [donorType]);

  return (
    <ListingWrapper>
      <Div {...props} h="100%" w="100%" justifyContent="center" bg="white">
        <Div alignSelf="center" justifyContent="flex-end" m={20}>
          <Text
            textAlign="center"
            fontSize="xl"
            color={theme.colors.primary}
            fontWeight="700"
          >
            SELECT WHICH TYPE OF DONOR ARE YOU?
          </Text>
        </Div>
        <Div row justifyContent="space-around" m={10}>
          <Div justifyContent="space-between" alignSelf="center">
            <Div alignSelf="center" justifyContent="center" p={5}>
              <Button {...individualButton}>
                <Image
                  h={100}
                  w={100}
                  m={10}
                  // bg="blue"
                  resizeMode="center"
                  // rounded="circle"
                  alignSelf="center"
                  source={require("./img/Individual-icon.png")}
                />
              </Button>
            </Div>
            <Div alignSelf="center" justifyContent="center" p={5}>
              <Text textAlign="center" fontSize="xl" fontWeight="500">
                Individual
              </Text>
              <Text
                textAlign="center"
                fontSize="xs"
                color={theme.colors.dimGray}
              >
                Resturaunt or Home Donors
              </Text>
            </Div>
          </Div>
          <Div justifyContent="space-around" alignSelf="center">
            <Div alignSelf="center" justifyContent="center" p={5}>
              <Button {...NGOButton}>
                <Image
                  h={100}
                  w={100}
                  m={10}
                  // bg="blue"
                  resizeMode="center"
                  // rounded="circle"
                  alignSelf="center"
                  source={require("./img/NGO-icon.png")}
                />
              </Button>
            </Div>
            <Div alignSelf="center" justifyContent="center" p={5}>
              <Text textAlign="center" fontSize="xl" fontWeight="500">
                NGOs
              </Text>
              <Text
                textAlign="center"
                fontSize="xs"
                color={theme.colors.dimGray}
              >
                Organizations or Special Drives
              </Text>
            </Div>
          </Div>
        </Div>
        <Div justifyContent="flex-start" alignSelf="center" m={20}>
          <Button rounded="lg" px={80} bg={theme.colors.primary} color="white">
            Next
          </Button>
        </Div>
      </Div>
    </ListingWrapper>
  );
};

export default DonorSelectForm;
