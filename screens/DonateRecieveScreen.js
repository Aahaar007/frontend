import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ListingWrapper from "../components/wrappers/ListingWrapper";
import FeedLayout from "../containers/feed/FeedLayout";
import FoodDonationLayout from "../containers/foodDonation/FoodDonationLayout";

const DonateRecieveScreen = () => {
  const [select, setSelect] = useState("recieve");
  const [isVerified, setIsVerified] = useState(false);
  const navigation = useNavigation();

  const user = useSelector((state) => state.user);

  const setSelectFunc = (val) => setSelect(val);

  useEffect(() => {
    if (select === "donate") {
      //if (!user?.isVerified) {
      if (false) {
        navigation.navigate("UserSetup");
        setSelectFunc("recieve");
      } else setIsVerified(true);
    }
  }, [select, user]);

  return (
    <ListingWrapper setSelected={setSelectFunc} selected={select}>
      {select === "recieve" ? <FeedLayout /> : <FoodDonationLayout />}
    </ListingWrapper>
  );
};

export default DonateRecieveScreen;
