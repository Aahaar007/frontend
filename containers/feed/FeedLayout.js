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
    timeOfExpiry: "5Hr",
    _id: "1",
  },
  {
    amount: 12,
    address: "Sagar gaire, Indore, M.P.",
    isVeg: true,
    imgSrc:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80",
    timeOfExpiry: "5Hr",
    _id: "2",
  },
  {
    amount: 12,
    address: "Sagar gaire, Indore, M.P.",
    isVeg: true,
    imgSrc:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80",
    timeOfExpiry: "5Hr",
    _id: "3",
  },
  {
    amount: 12,
    address: "Sagar gaire, Indore, M.P.",
    isVeg: true,
    imgSrc:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80",
    timeOfExpiry: "5Hr",
    _id: "4",
  },
  {
    amount: 12,
    address: "Sagar gaire, Indore, M.P.",
    isVeg: true,
    imgSrc:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80",
    timeOfExpiry: "5Hr",
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
