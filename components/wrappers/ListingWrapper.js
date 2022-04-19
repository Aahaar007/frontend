import React from "react";
import { Dimensions } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { Button, Div, Icon, ScrollDiv, Text } from "react-native-magnus";

import Svg, { Circle } from "react-native-svg";
import { useForm } from "react-hook-form";

import { theme } from "../../styles/theme";
import ImageBox from "../ImageBox";
import FormInput from "../form/FormInput";

const ListingWrapper = (props) => {
  const navigation = useNavigation();
  const windowHeight = Dimensions.get("window").height;

  // const [userData, setUserData] = useState({
  //   address: "420-Delhi, India",
  //   profile: "./img/default_pp.jpg",
  // });
  const user = useSelector((state) => state.auth);

  const { selected, setSelected } = props;
  const { control } = useForm();

  const pressLocation = () => {
    console.log("Location pressed");
  };
  return (
    <Div h="100%" bg="white" pt="60%" position="relative">
      <Svg position="absolute" top={(-windowHeight / 100) * 11.9} zIndex={0}>
        <Circle cx="50%" cy="-25%" r="90%" fill={theme.colors.staleYellow} />
      </Svg>
      <Div position="absolute" h="35%" w="100%" top={0} pt="15%" px={30}>
        <Div w="100%" col>
          <Div row justifyContent="space-between">
            <Button h="100%" bg="transparent" p={0} onPress={pressLocation}>
              <Icon
                name="location-pin"
                fontFamily="Entypo"
                color="burgundy"
                fontSize={23}
                pt={2}
                mr={10}
              />
              <Text fontSize={17} color="burgundy" mr={20}>
                {user && user.profileData && user.profileData.address
                  ? user.profileData.address
                  : "Kothri Kalan, Bhopal"}
              </Text>
              <Icon
                name="crosshairs"
                fontFamily="FontAwesome5"
                color="burgundy"
                fontSize={18}
              />
            </Button>
            <Button
              h={50}
              w={50}
              bg="transparent"
              rounded={10000}
              onPress={() =>
                navigation.navigate("Profile", { canGoBack: true })
              }
            >
              <ImageBox
                h={35}
                w={35}
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
          mt={0}
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
    </Div>
  );
};

export default ListingWrapper;
