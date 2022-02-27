import React from "react";
import ListingWrapper from "../components/wrappers/ListingWrapper";
import FeedLayout from "../containers/feed/FeedLayout";

const FoodListingScreen = () => {
  return (
    <ListingWrapper selected="recieve">
      <FeedLayout />
    </ListingWrapper>
  );
};

export default FoodListingScreen;
