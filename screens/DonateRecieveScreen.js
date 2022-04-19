import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "react-native-magnus";
import { useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import ListingWrapper from "../components/wrappers/ListingWrapper";
import FeedLayout from "../containers/feed/FeedLayout";
import FoodDonationLayout from "../containers/foodDonation/FoodDonationLayout";
import { useLazyVerifyUserProfileQuery } from "../services/aahaar";

const DonateRecieveScreen = () => {
  const [select, setSelect] = useState("recieve");
  const [isVerified, setIsVerified] = useState(false);
  const navigation = useNavigation();

  const user = useSelector((state) => state.auth);
  const [trigger, result, lastPromiseInfo] = useLazyVerifyUserProfileQuery();
  const setSelectFunc = (val) => setSelect(val);

  useEffect(() => {
    if (select === "donate") {
      if (!user.profileData?.name) {
        //setSelectFunc("recieve");
        trigger();
      }
    }
  }, [select]);

  useEffect(() => {
    if (result?.data === false) {
      navigation.navigate("UserSetup");
      setSelectFunc("recieve");
    }
    if (result?.data === true) setSelectFunc("donate");
  }, [result]);

  return (
    <>
      <Spinner
        show={result?.isFetching}
        left={WINDOW_WIDTH / 2 - 40}
        top={WINDOW_HEIGHT / 4}
        imgStyle={{ height: 80, width: 80 }}
      />
      <ListingWrapper setSelected={setSelectFunc} selected={select}>
        {select === "recieve" ? (
          <FeedLayout />
        ) : (
          result?.data && <FoodDonationLayout />
        )}
      </ListingWrapper>
    </>
  );
};

export default DonateRecieveScreen;
