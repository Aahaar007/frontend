import React from "react";
import ListingWrapper from "../components/wrappers/ListingWrapper";
import FoodDonationform from "../containers/foodDonation/FoodDonationform";

const FoodDonationScreen = () => {
  return (
    <ListingWrapper>
      <FoodDonationform />
    </ListingWrapper>
  );
};

export default FoodDonationScreen;
