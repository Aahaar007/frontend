import React, { useEffect, useState } from "react";
import Card from "./../feed/Card";
import { ScrollView } from "react-native";
import {
  Button,
  Div,
  Overlay,
  ScrollDiv,
  Text,
  WINDOW_HEIGHT,
} from "react-native-magnus";

import Layout from "./../../components/wrappers/Layout";

import DetailDiv from "./DetailDiv";
import OrderDetail from "./OrderDetail";
import FloatButtons from "./FloatButtons";
import {
  useGetUserDetailsByUidQuery,
  useLazyVerifyUserProfileQuery,
} from "../../services/aahaar";

import { useNavigation } from "@react-navigation/native";
import Spinner from "../../components/Spinner";
import QueueCard from "./QueueCard";
import ConfirmOrderOverlay from "./ConfirmOrderOverlay";
import { getAuth } from "firebase/auth";

const auth = getAuth();

const OrderLayout = (props) => {
  const [trigger, result, lastQueryInfo] = useLazyVerifyUserProfileQuery();
  const navigator = useNavigation();
  const { typeOfDonor, description, requestQueue, _id, quantity } = props.data;
  const { data, error, isLoading } = useGetUserDetailsByUidQuery(
    auth.currentUser?.uid,
    { refetchOnMountOrArgChange: true }
  );
  //console.log(props.data);
  const onSubmit = () => {
    if (!data.user || !data.user.name) trigger();
    else console.log("booking order");
    toggleConfirm();
  };

  const [showConfirm, setShowConfirm] = useState(false);

  const toggleConfirm = () => {
    const temp = showConfirm;
    setShowConfirm(!temp);
  };

  useEffect(() => {
    if (result?.data === false) {
      navigator.navigate("UserSetup");
    }
  }, [result]);

  return (
    <Div bg="white" pb={10} h={WINDOW_HEIGHT}>
      <ConfirmOrderOverlay
        maxAmount={quantity}
        show={showConfirm}
        toggleConfirm={toggleConfirm}
        orderId={_id}
      />
      <Spinner show={result?.isFetching || isLoading} />
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
        <Div bg="rgba(255,236,239,1)" px={2} mt={8} rounded={10}>
          <Text
            textAlign="center"
            fontSize={18}
            fontWeight="bold"
            textDecorLine="underline"
          >
            Request Queue
          </Text>
          {requestQueue.length === 0 ? (
            <>
              <Text fontSize={20} textAlign="center" fontWeight="900">
                Looks like the request queue is empty
              </Text>
              <Text fontSize={14} textAlign="center" fontWeight="bold" mb={5}>
                Book some food and pick your order!
              </Text>
            </>
          ) : (
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              width="100%"
              style={{ marginTop: 8 }}
            >
              {requestQueue.map((item) => {
                return <QueueCard amount={item?.amount} key={item._id} />;
              })}
            </ScrollView>
          )}
        </Div>
      </ScrollDiv>

      <FloatButtons position="absolute" bottom={-30} />
      {/* <BottomFeature/> */}
    </Div>
  );
};

export default OrderLayout;
