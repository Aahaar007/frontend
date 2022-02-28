import React, { useEffect, useState } from "react";
import { Button, Div, Icon, ScrollDiv, Text } from "react-native-magnus";
import { Dimensions } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { theme } from "../../styles/theme";
import ImageBox from "../ImageBox";
import FormInput from "../form/FormInput";
import { useForm } from "react-hook-form";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
const ListingWrapper = (props) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const navigation = useNavigation();

  const user = useSelector((state) => state.user);

  const [selected, setSelected] = useState(props.selected || null);
  const { control } = useForm();
  const route = useRoute();
  const pressLocation = () => {
    console.log("Location pressed");
  };

  useEffect(() => {
    if (selected === "donate" && route.name !== "DonorSelect") {
      navigation.replace("DonorSelect");
    }
    if (selected === "recieve" && route.name !== "Listing") {
      navigation.replace("Listing");
    }
  }, [selected]);

  return (
    <Div h="100%" bg="white" pt="60%" position="relative">
      {/* <Div
        position="absolute"
        bg="staleYellow"
        w="130%"
        left="-15%"
        h="20%"
        top={0}
        roundedBottom={9999}
        zIndex={0}
      /> */}
      <Svg position="absolute" top="-16.5%" zIndex={0}>
        <Circle cx="50%" cy="-25%" r="90%" fill={theme.colors.staleYellow} />
      </Svg>
      <Div position="absolute" h="35%" w="100%" top={0} pt="15%" px={30}>
        <Div w="100%" col>
          <Div row justifyContent="space-between">
            <Button h="100%" bg="transparent" onPress={pressLocation}>
              <Text fontSize={17} color="burgundy">
                <Div pt={3} h={20}>
                  <Icon
                    name="location-pin"
                    fontFamily="Entypo"
                    color="burgundy"
                    fontSize={20}
                  />
                </Div>
                {"   "}
                {user.data ? user.data.address : " "}{" "}
                <Div pt={5} h={20}>
                  <Icon
                    name="crosshairs"
                    fontFamily="FontAwesome5"
                    color="burgundy"
                    fontSize={17}
                  />
                </Div>
              </Text>
            </Button>
            <Button
              h={50}
              w={50}
              bg="transparent"
              rounded={10000}
              onPress={() => navigation.navigate("Profile")}
            >
              <ImageBox
                h={50}
                w={50}
                //TODO: change to dynamic uri
                src={require("./img/default_pp.jpg")}
                rounded={10000}
                overflow="hidden"
              />
            </Button>
          </Div>
        </Div>
        <FormInput
          name="search"
          control={control}
          placeHolder="Search"
          inputProp={{
            bg: "white",
            color: "dimGray",
            h: 40,
            borderWidth: 1,
            borderColor: "faintGray",
          }}
          label={null}
        />
        <Div
          row
          justifyContent="space-between"
          p={5}
          mt={7}
          minH={50}
          bg="ashGray"
          rounded={10}
        >
          <Button
            w="48%"
            bg={selected == "recieve" ? "white" : "transparent"}
            color="black"
            onPress={() => setSelected("recieve")}
          >
            Receive
          </Button>
          <Button
            w="48%"
            bg={selected == "donate" ? "white" : "transparent"}
            color="black"
            onPress={() => setSelected("donate")}
          >
            Donate
          </Button>
        </Div>
      </Div>
      <ScrollDiv col px={10}>
        {props.children}
      </ScrollDiv>
      <Div bg="greenishYellow" h="7%" />
    </Div>
  );
};

export default ListingWrapper;
