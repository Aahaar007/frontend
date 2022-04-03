import React, { useState } from "react";
import Card from "./../feed/Card";
import { Button, Div, Text } from "react-native-magnus";
import Layout from "./../../components/wrappers/Layout";
import DetailDiv from "./DetailDiv";
import OrderDetail from "./OrderDetail";
import FloatButtons from "./FloatButtons";

const donationList = [
  {
    amount: 12,
    address: "Sagar gaire, Indore, M.P.",
    isVeg: true,
    imgSrc:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80",
    time: "5",
    unit: "hours",
    _id: "1",
  },
];

const OrderLayout = () => {
  const onSubmit = () => {
    //TODO: if user not verified navigate to onboarding
  };

  return (
    <Div bg="white" pb={10}>
      <Card
        key={donationList[0]._id}
        donationData={donationList[0]}
        shadow=""
      />
      <Button
        bg="#D5B029"
        w="100%"
        h={60}
        mr="auto"
        ml="auto"
        mt={4}
        rounded="xl"
      >
        <Text color="white" fontWeight="bold" fontSize="xl">
          Book this!
        </Text>
      </Button>
      <Div px={2} py={15} overflow="visible">
        <DetailDiv title={"Time of Cooking"} title2={"8:30 AM"} />
        <DetailDiv
          title={"This donar is a "}
          title2={"Catering Service"}
          bg="#f7f8f1"
        />
        <OrderDetail
          bg="#f2f6f6"
          title={"What's in the menu?"}
          title2={
            "Mollit non ullamco incididunt ea sunt dolore consequat labore aliquip in et deserunt.Sint reprehenderit dolor in nostrud nulla eiusmod duis Lorem quis et voluptate nulla mollit mollit. Irure sit qui ad cupidatat et minim. Quis ea officia exercitation commodo occaecat aliqua cillum. Officia incididunt exercitation adipisicing voluptate anim. Amet do pariatur mollit enim cillum elit ullamco anim ut voluptate pariatur anim."
          }
        />
      </Div>
      <FloatButtons />
      {/* <BottomFeature/> */}
    </Div>
  );
};

export default OrderLayout;
