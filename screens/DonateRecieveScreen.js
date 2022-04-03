import React, { useState } from "react";
import ListingWrapper from "../components/wrappers/ListingWrapper";
import FeedLayout from "../containers/feed/FeedLayout";
import FoodDonationLayout from "../containers/foodDonation/FoodDonationLayout";

const DonateRecieveScreen = () => {
  const [select, setSelect] = useState("recieve");
  const setSelectFunc = (val) => setSelect(val);
  return (
    <ListingWrapper setSelected={setSelectFunc} selected={select}>
      {select === "recieve" ? <FeedLayout /> : <FoodDonationLayout />}
    </ListingWrapper>
  );
};

export default DonateRecieveScreen;
