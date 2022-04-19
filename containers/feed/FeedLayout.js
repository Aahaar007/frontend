import React, { useEffect, useState } from "react";
import { Div, Button } from "react-native-magnus";
import Spinner from "../../components/Spinner";
import { useGetFoodListingQuery } from "../../services/aahaar";
import Card from "./Card";

const FeedLayout = () => {
  const result = useGetFoodListingQuery({
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
  });

  const [donationList, setDonationList] = useState([]);

  useEffect(() => {
    if (result.data) {
      setDonationList(result.data?.foodListings);
    }
  }, [result]);

  return (
    <Div>
      <Spinner show={result.isLoading} />
      {donationList?.map((item) => {
        return <Card key={item._id} donationData={item} />;
      })}
    </Div>
  );
};

export default FeedLayout;
