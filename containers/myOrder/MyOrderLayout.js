import React, { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  Div,
  Icon,
  Text,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
} from "react-native-magnus";
import DonationCard from "./DonationCard";
import ReqeustCard from "./ReqeustCard";

const MyOrderLayout = () => {
  const [filter, setFilter] = useState({ donations: true, requests: true });

  const data = [
    {
      _id: "6251544fef8426dd3ed1a7f5",
      donorId: "rUAnHURGC2P4qKjwwK3EfWR0TzD2",
      quantity: 55,
      description: "Roti, chawal, makke da saag, macchi ki khichdi",
      typeOfDonor: "Individual",
      isVeg: true,
      photos: [
        {
          name: "Screenshot (91).png",
          link: "https://aahaar-bucket.s3.ap-south-1.amazonaws.com/1649497166438_Screenshot%20%2891%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA5MTSIXQ6A6W5OBMD%2F20220409%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20220409T095408Z&X-Amz-Expires=300&X-Amz-Signature=67febf12417669e6fabd14c241ada3d5afe0ded6880011bbddd4564126638389&X-Amz-SignedHeaders=host",
        },
      ],
      address: "69/420 Baked town, Snoop City, Madhya Pradesh, India",
      timeOfExpiry: "2011-10-05T14:48:00.000Z",
      requestQueue: [],
      isActive: true,
      createdAt: "2022-04-09T09:39:27.220Z",
      updatedAt: "2022-04-09T09:39:27.220Z",
      __v: 0,
    },
    {
      _id: "6252b7147d9d3acfd03d6332",
      orderId: "6252b6e37d9d3acfd03d632f",
      uid: "SUDgNUIQwIQoZoE6pSYKQHablNt2",
      donorName: "Donor Pandey",
      amount: 21,
      description: "Roti, chawal, makke da saag, macchi ki khichdi",
      status: "FULFILLED",
      createdAt: "2022-04-10T10:53:08.833Z",
      updatedAt: "2022-04-10T11:02:44.897Z",
      __v: 0,
    },
    {
      _id: "6251544fef8426dd3ed1a7f5",
      donorId: "rUAnHURGC2P4qKjwwK3EfWR0TzD2",
      quantity: 55,
      description: "Roti, chawal, makke da saag, macchi ki khichdi",
      typeOfDonor: "Individual",
      isVeg: true,
      photos: [
        {
          name: "Screenshot (91).png",
          link: "https://aahaar-bucket.s3.ap-south-1.amazonaws.com/1649497166438_Screenshot%20%2891%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA5MTSIXQ6A6W5OBMD%2F20220409%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20220409T095408Z&X-Amz-Expires=300&X-Amz-Signature=67febf12417669e6fabd14c241ada3d5afe0ded6880011bbddd4564126638389&X-Amz-SignedHeaders=host",
        },
      ],
      address: "69/420 Baked town, Snoop City, Madhya Pradesh, India",
      timeOfExpiry: "2011-10-05T14:48:00.000Z",
      requestQueue: [],
      isActive: false,
      createdAt: "2022-04-09T09:39:27.220Z",
      updatedAt: "2022-04-09T09:39:27.220Z",
      __v: 0,
    },
    {
      _id: "6252b7147d9d3acfd03d6332",
      orderId: "6252b6e37d9d3acfd03d632f",
      uid: "SUDgNUIQwIQoZoE6pSYKQHablNt2",
      donorName: "Donor Pandey",
      amount: 21,
      description: "Roti, chawal, makke da saag, macchi ki khichdi",
      status: "FULFILLED",
      createdAt: "2022-04-10T10:53:08.833Z",
      updatedAt: "2022-04-10T11:02:44.897Z",
      __v: 0,
    },
  ];

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
        >
          <Text fontSize={20} fontWeight="bold">
            Filter
          </Text>
          <Icon name="right" fontFamily="FontAwesome5" />
        </Button>
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
      </Div>
      <Div>
        {data.map((item) => {
          return item.donorId
            ? filter?.donations && <DonationCard data={item} />
            : filter?.requests && <ReqeustCard data={item} />;
        })}
      </Div>
    </Div>
  );
};

export default MyOrderLayout;
