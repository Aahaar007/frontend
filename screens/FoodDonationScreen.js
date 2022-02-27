import React from "react";
import ListingWrapper from "../components/wrappers/ListingWrapper";
import FoodDonationform from "../containers/foodDonation/FoodDonationform";
import { useForm } from "react-hook-form";

const FoodDonationScreen = () => {
  return (
    <ListingWrapper>
      <FoodDonationform></FoodDonationform>
    </ListingWrapper>
  );
};

export default FoodDonationScreen;
