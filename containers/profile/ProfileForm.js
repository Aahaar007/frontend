import { useNavigation } from "@react-navigation/native";
import { getAuth } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Avatar, Div, Text, Image, Button, Icon } from "react-native-magnus";
import moment from "moment";
import * as ImagePicker from "expo-image-picker";
import FormInput from "../../components/form/FormInput";
import { useUpdateUserDetailsMutation } from "../../services/aahaar";
import { Regex } from "../../constants/Regex";
import { useForm } from "react-hook-form";
import mime from "mime";

import Spinner from "../../components/Spinner";

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
  const [trigger, result] = useUpdateUserDetailsMutation();
  const { data, error, isLoading, refetch } = useGetUserDetailsByUidQuery(
    auth.currentUser?.uid,
    { refetchOnMountOrArgChange: true }
  );

  const [img, setImg] = useState(null);
  const [toggle, setToggle] = useState(false);
  const switchToggle = () => {
    setToggle(!toggle);
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    setError,
    clearErrors,
    register,
  } = useForm();

  const submitData = async (data) => {
    // console.log(data);
    // console.log(img);
    let reqData = data;
    const fd = new FormData();
    Object.keys(reqData).forEach((key) => {
      fd.append(key, reqData[key]);
    });
    if (img) {
      const profileURL = {
        uri: img.uri,
        name: img.uri?.split("/").pop(),
        type: mime.getType(img.uri),
      };
      fd.append("avatar", profileURL);
    }
    trigger(fd);
    // console.log(fd);
    setToggle(!toggle);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      // console.log(result);
      setImg(result);
    }
  };

  const StatDiv = (props) => {
    return (
      <Div {...statDivStyle}>
        <Text {...statNumStyle}>{props.num}</Text>
        <Text {...statLabelStyle}>{props.data}</Text>
      </Div>
    );
  };
  const { canGoBack } = props;

  const logoutUser = async () => {
    console.info("Pressed logout user");
    await auth.signOut();
  };
  useEffect(() => {
    // console.log(auth.currentUser);
  }, [auth]);
  const nav = useNavigation();

  useEffect(() => {
    //console.log(data);
    if (data?.user?.profileURL ? setImg(data?.user?.profileURL) : setImg(null));
  }, [data]);

  useEffect(() => {
    if (result.isSuccess) {
      refetch();
    }
    if (result.isError) {
      console.log(result.error);
    }
  }, [result]);

  return (
    <Div {...props}>
      <Spinner show={result.isLoading} />
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
          <Button bg="transparent" rounded={15} onPress={switchToggle}>
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
          {toggle && (
            <Button rounded="xl" alignSelf="center" onPress={pickImage}>
              Upload Image
            </Button>
          )}
        </Div>
        <Div flex={3} row>
          {/*TODO: Add K for thousand, H for hundred etc or the value will overflow */}
          <StatDiv
            arg="listed"
            num={data.user.food.listed.length}
            data="Listed"
          />
          <StatDiv
            arg="donated"
            num={data.user.food.donated.length}
            data="Donated"
          />
          <StatDiv
            arg="recieved"
            num={data.user.food.recieved.length}
            data="Recieved"
          />
        </Div>
      </Div>

      <Div pt={20} pb={0}>
        <Text fontSize={45} color="black" fontWeight="700" pl={25}>
          {data?.user?.name ? data.user.name : "-"}
        </Text>
      </Div>

      <Div pb={90}>
        <Div {...infoDivStyle}>
          <Div {...infoDivLabelStyle}>
            <Text {...infoLabelStyle}>Name</Text>
          </Div>
          <Div {...infoDivValueStyle}>
            <FormInput
              name="name"
              control={control}
              editable={toggle}
              defaultValue={data?.user?.name ? data.user.name : "    -"}
              inputProp={toggle ? { color: "primary" } : { color: "black" }}
              fontSize={25}
            />
          </Div>
        </Div>

        <Div {...infoDivStyle} h={70}>
          <Div {...infoDivLabelStyle} flex={1}>
            <Text {...infoLabelStyle}>Date of Birth</Text>
          </Div>
          <Div {...infoDivValueStyle} flex={1}>
            <FormInput
              name="dob"
              control={control}
              editable={toggle}
              rules={{
                required: true,
                // pattern: Regex.dobPattern,
              }}
              defaultValue={
                data?.user?.dob
                  ? moment(new Date(data.user.dob)).format("MM/DD/YYYY")
                  : "          -"
              }
              inputProp={toggle ? { color: "primary" } : { color: "black" }}
              fontSize={25}
              placeholder="MM/DD/YYYY"
            />
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
        {toggle ? (
          <Button
            w="100%"
            mt={30}
            bg="primary"
            onPress={handleSubmit((data) => {
              submitData(data);
            })}
          >
            SUBMIT
          </Button>
        ) : (
          <Button w="100%" mt={30} bg="dangerRed" onPress={logoutUser}>
            LOGOUT
          </Button>
        )}
      </Div>
    </Div>
  );
};

export default ProfileForm;
