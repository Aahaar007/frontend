import React, { useEffect, useState } from "react";
import { RefreshControl } from "react-native";
import {
  Button,
  Checkbox,
  Div,
  Icon,
  ScrollDiv,
  Text,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
} from "react-native-magnus";
import DonationCard from "./DonationCard";
import ReqeustCard from "./ReqeustCard";

import {
  useGetUserFoodListingsQuery,
  useGetUserRequestsQuery,
} from "../../services/aahaar";

const MyOrderLayout = () => {
  const [filter, setFilter] = useState({ donations: true, requests: true });
  const [showFilter, setShowFilter] = useState(false);
  const {
    data: foodListingsData,
    error: foodListingsError,
    isLoading: foodListingsAreLoading,
    refetch: refetchFoodListings,
  } = useGetUserFoodListingsQuery(
    {},
    {
      refetchOnFocus: true,
      refetchOnMountOrArgChange: true,
      pollingInterval: 60000,
    }
  );

  const {
    data: requestsData,
    error: requestsError,
    isLoading: requestsAreLoading,
    refetch: refetchRequests,
  } = useGetUserRequestsQuery(
    {},
    {
      refetchOnFocus: true,
      refetchOnMountOrArgChange: true,
      pollingInterval: 60000,
    }
  );

  const changeFilter = (val) => {
    console.log(val);
    let temp = {};
    temp["donations"] = val.includes("donations") ? true : false;
    temp["requests"] = val.includes("requests") ? true : false;
    setFilter(temp);
  };

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  return (
    <Div pt={145}>
      <Div
        position="absolute"
        bg="primary"
        w={WINDOW_WIDTH}
        top={-40}
        left={-10}
        pt={35}
        roundedBottom={10}
      >
        <Text color="black" fontSize={30} textAlign="center">
          My Orders
        </Text>
        <Button
          w="100%"
          bg="transparent"
          borderColor="dimGray"
          borderTopWidth={1}
          borderBottomWidth={1}
          color="black"
          onPress={() => setShowFilter(!showFilter)}
        >
          <Text fontSize={20} fontWeight="bold">
            Filter
          </Text>
          <Icon ml={5} name="filter" fontFamily="FontAwesome5" fontSize={15} />
        </Button>
        {showFilter && (
          <Div py={10}>
            <Checkbox.Group
              row
              justifyContent="center"
              onChange={(val) => changeFilter(val)}
            >
              <Checkbox
                value={"donations"}
                prefix={
                  <Text color="black" px={5} fontSize={20}>
                    Donations
                  </Text>
                }
              />
              <Checkbox
                value={"requests"}
                prefix={
                  <Text color="black" px={5} fontSize={20}>
                    Requests
                  </Text>
                }
              />
            </Checkbox.Group>
          </Div>
        )}
      </Div>
      <ScrollDiv
        refreshControl={
          <RefreshControl
            refreshing={
              (filter?.donations && foodListingsAreLoading) ||
              (filter?.requests && requestsAreLoading)
            }
            onRefresh={() => {
              if (filter?.donations) refetchFoodListings();
              if (filter?.requests) refetchRequests();
            }}
          />
        }
      >
        {filter?.donations &&
          foodListingsData &&
          foodListingsData?.foodListings &&
          foodListingsData.foodListings.map((foodListing) => {
            return <DonationCard key={foodListing._id} data={foodListing} />;
          })}
        {filter?.requests &&
          requestsData &&
          requestsData?.requests &&
          requestsData.requests.map((request) => {
            return <ReqeustCard key={request._id} data={request} />;
          })}
      </ScrollDiv>
    </Div>
  );
};

export default MyOrderLayout;
