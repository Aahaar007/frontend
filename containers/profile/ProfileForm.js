import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Avatar, Div, Text, Image, Button, Icon } from "react-native-magnus";

const statDivStyle = {
  flex: 1,
  alignSelf: "center",
};

const statNumStyle = {
  fontSize: 35,
  fontWeight: "700",
  textAlign: "center",
  letterSpacing: 0,
};

const statLabelStyle = {
  color: "dimGray",
  textAlign: "center",
  pt: 10,
};

const infoDivStyle = {
  row: true,
  h: 90,
};

const infoDivLabelStyle = {
  flex: 2,
  justifyContent: "flex-end",
};

const infoDivValueStyle = {
  flex: 5,
  justifyContent: "flex-end",
  borderBottomWidth: 1,
  borderColor: "dimGray",
};

const infoLabelStyle = {
  fontSize: 25,
  color: "dimGray",
  textAlign: "left",
  fontWeight: "400",
  pl: 5,
  pb: 10,
};

const infoValueStyle = {
  fontSize: 25,
  color: "black",
  textAlign: "center",
  pb: 10,
};

const ProfileForm = (props) => {
  const nav = useNavigation();
  return (
    <Div {...props}>
      <Div row h={70} justifyContent="space-between">
        <Div flex={1} justifyContent="flex-start" row>
          <Button bg="transparent" rounded={15} onPress={() => nav.goBack()}>
            <Icon
              name="chevron-thin-left"
              fontFamily="Entypo"
              fontSize={35}
              color="black"
              rounded={50}
            />
          </Button>
        </Div>

        <Div flex={1} justifyContent="flex-end" row>
          <Button bg="transparent" rounded={15}>
            <Icon
              name="edit"
              fontFamily="Entypo"
              fontSize={35}
              color="black"
              rounded={50}
            />
          </Button>
        </Div>
      </Div>

      <Div row>
        <Div flex={2} alignItems="center">
          <Avatar
            source={{
              uri: "https://freesvg.org/img/abstract-user-flat-4.png",
            }}
            p={55}
            borderWidth={4}
            borderStyle="solid"
            borderTopColor="transparent"
            borderRightColor="green600"
            borderBottomColor="green600"
            borderLeftColor="transparent"
            size={100}
          >
            A
          </Avatar>
        </Div>
        <Div flex={3} row>
          {/*TODO: Add K for thousand, H for hundred etc or the value will overflow */}
          <Div {...statDivStyle}>
            <Text {...statNumStyle}>13</Text>
            <Text {...statLabelStyle}>Listed</Text>
          </Div>
          <Div {...statDivStyle}>
            <Text {...statNumStyle}>11</Text>
            <Text {...statLabelStyle}>Donated</Text>
          </Div>
          <Div {...statDivStyle}>
            <Text {...statNumStyle}>2</Text>
            <Text {...statLabelStyle}>Recieved</Text>
          </Div>
        </Div>
      </Div>

      <Div pt={20} pb={0}>
        <Text fontSize={45} color="black" fontWeight="700" pl={25}>
          Meghan
        </Text>
        <Text fontSize={45} color="dimGray" fontWeight="300" pl={25} mt={-20}>
          Gun Kelly
        </Text>
      </Div>

      <Div pb={90}>
        <Div {...infoDivStyle}>
          <Div {...infoDivLabelStyle}>
            <Text {...infoLabelStyle}>Name</Text>
          </Div>
          <Div {...infoDivValueStyle}>
            <Text {...infoValueStyle}>Meghan Gun Kelly</Text>
          </Div>
        </Div>

        <Div {...infoDivStyle}>
          <Div {...infoDivLabelStyle} pb={10}>
            <Text {...infoLabelStyle}>Gender</Text>
          </Div>
          <Div {...infoDivValueStyle} borderColor="transparent">
            <Div {...infoValueStyle} row justifyContent="center" pb={0}>
              <Image
                h={60}
                w={60}
                m={10}
                p={0}
                rounded="circle"
                source={require("./img/toggled-male-symbol.png")}
              />
              <Image
                h={60}
                w={60}
                m={10}
                rounded="circle"
                source={require("./img/untoggled-female-symbol.png")}
              />
              <Image
                h={60}
                w={60}
                m={10}
                rounded="circle"
                source={require("./img/untoggled-transgender-symbol.png")}
              />
            </Div>
          </Div>
        </Div>

        <Div {...infoDivStyle} h={70}>
          <Div {...infoDivLabelStyle} flex={1}>
            <Text {...infoLabelStyle}>Date of Birth</Text>
          </Div>
          <Div {...infoDivValueStyle} flex={1}>
            <Text {...infoValueStyle}>06/09/1969</Text>
          </Div>
        </Div>

        <Div {...infoDivStyle}>
          <Div {...infoDivLabelStyle}>
            <Text {...infoLabelStyle}>Email</Text>
          </Div>
          <Div {...infoDivValueStyle}>
            <Text {...infoValueStyle}>sample@ahaar.com</Text>
          </Div>
        </Div>

        <Div {...infoDivStyle}>
          <Div {...infoDivLabelStyle}>
            <Text {...infoLabelStyle}>Phone</Text>
          </Div>
          <Div {...infoDivValueStyle}>
            <Text {...infoValueStyle}>+91 9565633333</Text>
          </Div>
          <Div justifyContent="flex-end">
            <Image
              h={30}
              w={30}
              m={10}
              rounded="circle"
              source={require("./img/checked.png")}
            />
          </Div>
        </Div>

        <Div {...infoDivStyle}>
          <Div {...infoDivLabelStyle} flex={2}>
            <Text {...infoLabelStyle}>Password</Text>
          </Div>
          <Div {...infoDivValueStyle} flex={3}>
            <Text {...infoValueStyle}>**************</Text>
          </Div>
        </Div>
      </Div>
    </Div>
  );
};

export default ProfileForm;
