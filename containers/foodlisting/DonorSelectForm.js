import React, { useEffect, useState } from "react";
import { Button, Div, Image, Text } from "react-native-magnus";
import { theme } from "../../styles/theme";

const DonorSelectForm = (props) => {
  const [donorType, setDonorType] = useState("");
  const [individualButton, setIndividualButton] = useState({
    borderColor: theme.colors.primary,
    rounded: "circle",
    ripple: true,
    borderWidth: 3,
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
    justifyContent: "center",
    alignSelf: "center",
    onPress: () => {
      setDonorType((curr) => (curr === "NGO" ? "" : "NGO"));
    },
  });

  const selectedButton = {
    rippleColor: theme.colors.primary,
    bg: theme.colors.primary,
    // shadow
  };

  const unselectedButton = {
    rippleColor: "white",
    bg: "transparent",
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
    <Div {...props} bg="green" h="100%" w="100%" justifyContent="center">
      <Div bg="red" alignSelf="center">
        <Text
          textAlign="center"
          fontSize="2xl"
          color={theme.colors.primary}
          fontWeight="700"
        >
          {" "}
          SELECT WHICH TYPE OF DONOR ARE YOU?
        </Text>
      </Div>
      <Div bg="blue" row justifyContent="space-around">
        <Div>
          <Div bg="red" alignSelf="center" justifyContent="center">
            <Button {...individualButton}>
              <Image
                h={100}
                w={100}
                m={10}
                // bg="blue"
                resizeMode="center"
                // rounded="circle"
                alignSelf="center"
                source={require("./img/individual-icon.png")}
              />
            </Button>
          </Div>
          <Div bg="green" alignSelf="center" justifyContent="center">
            <Text textAlign="center" fontSize="2xl">
              Individual
            </Text>
            <Text textAlign="center" fontSize="md">
              Resturaunt or Home Donors
            </Text>
          </Div>
        </Div>
        <Div>
          <Div bg="green" alignSelf="center" justifyContent="center">
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
          <Div bg="red" alignSelf="center" justifyContent="center">
            <Text textAlign="center" fontSize="2xl">
              NGOs
            </Text>
            <Text textAlign="center" fontSize="md">
              Organizations or Special Drives
            </Text>
          </Div>
        </Div>
      </Div>
      <Div bg="yellow" justifyContent="center" alignSelf="center">
        <Button px="xl" py="lg" bg={theme.colors.primary} color="white">
          Next
        </Button>
      </Div>
    </Div>
  );
};

export default DonorSelectForm;
