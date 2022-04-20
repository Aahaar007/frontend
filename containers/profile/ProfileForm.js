import { useNavigation } from "@react-navigation/native";
import { getAuth } from "firebase/auth";
import React, { useEffect } from "react";
import { Avatar, Div, Text, Image, Button, Icon } from "react-native-magnus";
import moment from "moment";

const auth = getAuth();

import { useGetUserDetailsByUidQuery } from "../../services/aahaar";

const statDivStyle = {
  flex: 1,
  alignSelf: "center",
};

const statNumStyle = {
  fontSize: 35,
  fontWeight: "700",
  textAlign: "center",
  letterSpacing: 0,
  numberOfLines: 1,
  ellipsizeMode: "tail",
};

const statLabelStyle = {
  color: "dimGray",
  textAlign: "center",
  pt: 10,
  numberOfLines: 1,
  ellipsizeMode: "tail",
};

const infoDivStyle = {
  row: true,
  h: 90,
};

const infoDivLabelStyle = {
  flex: 2,
  justifyContent: "flex-end",
  numberOfLines: 1,
  ellipsizeMode: "tail",
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
  numberOfLines: 1,
  ellipsizeMode: "tail",
};

const infoValueStyle = {
  fontSize: 25,
  color: "black",
  textAlign: "center",
  pb: 10,
  numberOfLines: 1,
  ellipsizeMode: "tail",
};

const ProfileForm = (props) => {
  const StatDiv = (props) => {
    return (
      <Div {...statDivStyle}>
        <Text {...statNumStyle}>
          {data?.food ? `data.food.${props.arg}.length()` : props.num}
        </Text>
        <Text {...statLabelStyle}>{props.data}</Text>
      </Div>
    );
  };
  const infoDiv = (props) => {
    return (
      <Div {...infoDivStyle}>
        <Div {...infoDivLabelStyle}>
          <Text {...infoLabelStyle}>{props.type}</Text>
        </Div>
        <Div {...infoDivValueStyle}>
          <Text {...infoValueStyle}></Text>
        </Div>
      </Div>
    );
  };
  const { canGoBack } = props;

  const logoutUser = async () => {
    console.info("Pressed logout user");
    await auth.signOut();
  };
  useEffect(() => {
    console.log(auth.currentUser);
  }, [auth]);
  const nav = useNavigation();

  const { data, error, isLoading } = useGetUserDetailsByUidQuery(
    auth.currentUser?.uid,
    { refetchOnMountOrArgChange: true }
  );

  useEffect(() => {
    console.log(data);
  }, [data]);

  const getGenderAvatar = () => {
    return (
      <Div {...infoValueStyle} row justifyContent="center" pb={0}>
        {data?.user?.gender === "M" ? (
          <Image
            h={60}
            w={60}
            m={10}
            p={0}
            rounded="circle"
            source={require("./img/toggled-male-symbol.png")}
          />
        ) : (
          <Image
            h={60}
            w={60}
            m={10}
            p={0}
            rounded="circle"
            source={require("./img/untoggled-male-symbol.png")}
          />
        )}
        {data?.user?.gender === "F" ? (
          <Image
            h={60}
            w={60}
            m={10}
            rounded="circle"
            source={require("./img/toggled-female-symbol.png")}
          />
        ) : (
          <Image
            h={60}
            w={60}
            m={10}
            rounded="circle"
            source={require("./img/untoggled-female-symbol.png")}
          />
        )}
        {data?.user?.gender === "T" ? (
          <Image
            h={60}
            w={60}
            m={10}
            rounded="circle"
            source={require("./img/toggled-transgender-symbol.png")}
          />
        ) : (
          <Image
            h={60}
            w={60}
            m={10}
            rounded="circle"
            source={require("./img/untoggled-transgender-symbol.png")}
          />
        )}
      </Div>
    );
  };

  return (
    <Div {...props}>
      <Div row h={70} justifyContent="space-between">
        {canGoBack && (
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
        )}

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
              uri:
                data &&
                data?.user?.profileURL &&
                typeof data.user.profileURL === "object" &&
                data.user.profileURL.link
                  ? data.user.profileURL.link
                  : "https://freesvg.org/img/abstract-user-flat-4.png",
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
          <StatDiv arg="listed" num="13" data="Listed" />
          <StatDiv arg="donated" num="11" data="Donated" />
          <StatDiv arg="recieved" num="1" data="Recieved" />
          {/* <Div {...statDivStyle}>
            <Text {...statNumStyle}>
              {data?.user?.food ? data.user.food.listed.length : "0"}
            </Text>
            <Text {...statLabelStyle}>Listed</Text>
          </Div>
          <Div {...statDivStyle}>
            <Text {...statNumStyle}>
              {data?.user?.food ? data.user.food.donated.length : "0"}
            </Text>
            <Text {...statLabelStyle}>Donated</Text>
          </Div>
          <Div {...statDivStyle}>
            <Text {...statNumStyle}>
              {data?.user?.food ? data.user.food.recieved.length : "0"}
            </Text>
            <Text {...statLabelStyle}>Recieved</Text>
          </Div> */}
        </Div>
      </Div>

      <Div pt={20} pb={0}>
        <Text fontSize={45} color="black" fontWeight="700" pl={25}>
          {data?.user?.name ? data.user.name : "-"}
        </Text>
        {/* <Text fontSize={45} color="dimGray" fontWeight="300" pl={25} mt={-20}>
          Sharma
        </Text> */}
      </Div>

      <Div pb={90}>
        <Div {...infoDivStyle}>
          <Div {...infoDivLabelStyle}>
            <Text {...infoLabelStyle}>Name</Text>
          </Div>
          <Div {...infoDivValueStyle}>
            <Text {...infoValueStyle}>
              {data?.user?.name ? data.user.name : "-"}
            </Text>
          </Div>
        </Div>

        <Div {...infoDivStyle}>
          <Div {...infoDivLabelStyle} pb={10}>
            <Text {...infoLabelStyle}>Gender</Text>
          </Div>
          <Div {...infoDivValueStyle} borderColor="transparent">
            {getGenderAvatar()}
          </Div>
        </Div>

        <Div {...infoDivStyle} h={70}>
          <Div {...infoDivLabelStyle} flex={1}>
            <Text {...infoLabelStyle}>Date of Birth</Text>
          </Div>
          <Div {...infoDivValueStyle} flex={1}>
            <Text {...infoValueStyle}>
              {data?.user?.dob
                ? moment(new Date(data.user.dob)).format("DD/MM/YYYY")
                : "-"}
            </Text>
          </Div>
        </Div>

        <Div {...infoDivStyle}>
          <Div {...infoDivLabelStyle}>
            <Text {...infoLabelStyle}>Email</Text>
          </Div>
          <Div {...infoDivValueStyle}>
            <Text {...infoValueStyle}>
              {data?.user?.email ? data.user.email : "example@mail.com"}
            </Text>
          </Div>
        </Div>

        <Div {...infoDivStyle}>
          <Div {...infoDivLabelStyle}>
            <Text {...infoLabelStyle}>Phone</Text>
          </Div>
          <Div {...infoDivValueStyle}>
            <Text {...infoValueStyle}>
              {data?.user?.phone
                ? data?.user?.phone?.region + " " + data?.user?.phone?.number
                : "+91 6789267281"}
            </Text>
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
        <Button w="100%" mt={30} bg="dangerRed" onPress={logoutUser}>
          LOGOUT
        </Button>
      </Div>
    </Div>
  );
};

export default ProfileForm;
