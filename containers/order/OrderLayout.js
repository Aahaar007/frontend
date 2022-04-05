import React, { useEffect, useState } from "react";
import Card from "./../feed/Card";
import {
  Button,
  Div,
  ScrollDiv,
  Text,
  WINDOW_HEIGHT,
} from "react-native-magnus";
import Layout from "./../../components/wrappers/Layout";
import DetailDiv from "./DetailDiv";
import OrderDetail from "./OrderDetail";
import FloatButtons from "./FloatButtons";
import { useLazyVerifyUserProfileQuery } from "../../services/aahaar";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import Spinner from "../../components/Spinner";

const OrderLayout = (props) => {
  const [trigger, result, lastQueryInfo] = useLazyVerifyUserProfileQuery();
  const navigator = useNavigation();
  const { typeOfDonor, description, _id } = props.data;
  const user = useSelector((state) => state.user);

  const onSubmit = () => {
    if (!user?.name) trigger();
    else console.log("booking order");
  };

  useEffect(() => {
    if (result?.data === false) {
      navigator.navigate("UserSetup");
    }
  }, [result]);

  return (
    <Div bg="white" pb={10} h={WINDOW_HEIGHT}>
      <Spinner show={result?.isFetching} />
      <Card key={_id} donationData={props.data} shadow="" />
      <Button
        bg="#D5B029"
        w="100%"
        h={60}
        mr="auto"
        ml="auto"
        mt={4}
        rounded="xl"
        onPress={onSubmit}
      >
        <Text color="white" fontWeight="bold" fontSize="xl">
          Book this!
        </Text>
      </Button>
      <ScrollDiv px={2} py={15} h={200}>
        {/* <DetailDiv title={"Time of Cooking"} title2={"8:30 AM"} /> */}
        <DetailDiv
          title={"This donar is a "}
          title2={typeOfDonor}
          bg="#f7f8f1"
        />
        <OrderDetail
          bg="#f2f6f6"
          title={"What's in the menu?"}
          title2={description}
        />
      </ScrollDiv>
      <FloatButtons position="absolute" bottom={-30} />
      {/* <BottomFeature/> */}
    </Div>
  );
};

export default OrderLayout;
