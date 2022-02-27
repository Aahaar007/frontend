import React from "react";
import ListingWrapper from "../../components/wrappers/ListingWrapper";
import Card from "./Card";

const donationList = [
  {
    amount: 12,
    address: "Sagar gaire, Indore, M.P.",
    isVeg: true,
    imgSrc:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80",
    time: "5",
    unit: "hours",
    _id: "1",
  },
  {
    amount: 12,
    address: "Sagar gaire, Indore, M.P.",
    isVeg: false,
    imgSrc:
      "https://www.cypressgreen.in/blog/wp-content/uploads/2021/03/food.jpg",
    time: "55",
    unit: "minutes",
    _id: "2",
  },
  {
    amount: 12,
    address: "Sagar gaire, Indore, M.P.",
    isVeg: true,
    imgSrc:
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    time: "1",
    unit: "hour",
    _id: "3",
  },
  {
    amount: 12,
    address: "Sagar gaire, Indore, M.P.",
    isVeg: false,
    imgSrc:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    time: "30",
    unit: "minutes",
    _id: "4",
  },
  {
    amount: 12,
    address: "Sagar gaire, Indore, M.P.",
    isVeg: true,
    imgSrc:
      "https://www.wbcsd.org/var/site/storage/images/media/images/fresh_pa/80809-2-eng-GB/FRESH_PA_i1140.jpg",
    time: "20",
    unit: "minutes",
    _id: "5",
  },
];

const FeedLayout = () => {
  return (
    <ListingWrapper>
      {donationList?.map((item) => {
        return <Card key={item._id} donationData={item} />;
      })}
    </ListingWrapper>
  );
};

export default FeedLayout;
