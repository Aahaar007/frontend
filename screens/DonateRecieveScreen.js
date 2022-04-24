import { useNavigation } from "@react-navigation/native";
import { getAuth } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "react-native-magnus";
import Spinner from "../components/Spinner";
import ListingWrapper from "../components/wrappers/ListingWrapper";
import FeedLayout from "../containers/feed/FeedLayout";
import FoodDonationLayout from "../containers/foodDonation/FoodDonationLayout";
import {
  useGetUserDetailsByUidQuery,
  useLazyVerifyUserProfileQuery,
} from "../services/aahaar";
import DonationDetailScreen from "./DonationDetailScreen";

const auth = getAuth();

const DonateRecieveScreen = () => {
  const [select, setSelect] = useState("recieve");
  const [isVerified, setIsVerified] = useState(false);
  const navigation = useNavigation();

  const [trigger, result, lastPromiseInfo] = useLazyVerifyUserProfileQuery({});
  const setSelectFunc = (val) => setSelect(val);

  const { data, error, isLoading } = useGetUserDetailsByUidQuery(
    auth.currentUser?.uid,
    { refetchOnMountOrArgChange: true }
  );

  useEffect(() => {
    console.log("Profile data: ", data);
    if (select === "donate") {
      if (!data.user || !data.user.name) {
        //setSelectFunc("recieve");
        trigger();
      } else {
        setIsVerified(true);
      }
    }
    //if (select === "donate") navigation.navigate("DonationDetail");
  }, [select, data]);

  useEffect(() => {
    console.log(result);
    if (result?.data === false) {
      navigation.navigate("UserSetup");
      setSelectFunc("recieve");
    }
    if (result?.data === true) setSelectFunc("donate");
  }, [result]);

  return (
    <>
      <Spinner
        show={result?.isFetching || isLoading}
        left={WINDOW_WIDTH / 2 - 40}
        top={WINDOW_HEIGHT / 4}
        imgStyle={{ height: 80, width: 80 }}
      />
      <ListingWrapper setSelected={setSelectFunc} selected={select}>
        {select === "recieve" ? (
          <FeedLayout />
        ) : (
          (isVerified || result?.data) && <FoodDonationLayout />
        )}
      </ListingWrapper>
    </>
  );
};

export default DonateRecieveScreen;
