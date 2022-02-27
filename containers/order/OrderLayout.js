import React, { useState } from "react";
import Card from "./../feed/Card";
import { Button, Div, Text } from "react-native-magnus";
import Layout from "./../../components/wrappers/Layout";
import DetailDiv from "./DetailDiv";
import OrderDetail from "./OrderDetail";

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
  const [show, setShow] = useState(1);
  return (
    <Layout bg="white">
      <Card
        key={donationList[0]._id}
        donationData={donationList[0]}
        shadow=""
      />
      <Button
        bg="#D5B029"
        w="60%"
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
      <DetailDiv title={"Time of Cooking"} title2={"8:30 A:M"} mt={10} />
      {show === 1 && (
        <DetailDiv
          title={"This donar is a "}
          title2={"Catering Service"}
          mt={10}
          bg="#f7f8f1"
        />
      )}
      <OrderDetail
        show={show}
        setShow={setShow}
        minH={200}
        bg="#f2f6f6"
        title={"What's in the menu?"}
        title2={
          "once there was a crow he was very thirsy he flew here and there in search of water but he did "
        }
      />
      {/* <BottomFeature/> */}
    </Layout>
  );
};

export default OrderLayout;
