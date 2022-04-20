import React, { useCallback, useEffect, useState } from "react";
import { Div, Button, ScrollDiv } from "react-native-magnus";
import { RefreshControl } from "react-native";

import Spinner from "../../components/Spinner";
import { useGetFoodListingQuery } from "../../services/aahaar";
import Card from "./Card";

const FeedLayout = () => {
  const { data, isLoading } = useGetFoodListingQuery(
    {},
    {
      refetchOnMountOrArgChange: true,
      refetchOnFocus: true,
      pollingInterval: 30000,
    }
  );

  return (
    <Div>
      <Spinner show={isLoading} />
      {data?.foodListings?.map((item) => {
        return <Card key={item._id} donationData={item} />;
      })}
    </Div>
  );
};

export default FeedLayout;
