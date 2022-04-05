import React from "react";
import { Div, Button } from "react-native-magnus";
import Card from "./Card";

const donationList = [
  {
    quantity: 12,
    address: "Sagar gaire, Rewa, M.P.",
    description: "Very good sandwitch",
    isVeg: true,
    imgSrc:
      "https://www.wbcsd.org/var/site/storage/images/media/images/fresh_pa/80809-2-eng-GB/FRESH_PA_i1140.jpg",
    timeOfExpiry: "20",
    unit: "minutes",
    typeOfDonor: "Catering Service",
    _id: "5",
  },
  {
    quantity: 2,
    address: "Sagar gaire, Bhopal, M.P.",
    description: "Very oily sandwitch",
    isVeg: false,
    imgSrc:
      "http://inspiringrecipeideas.com/wp-content/uploads/2017/10/super-special-toasted-ham-and-cheese-sandwiches-16273-1.jpeg",
    timeOfExpiry: "20",
    unit: "minutes",
    typeOfDonor: "Catering Service",
    _id: "6",
  },
  {
    quantity: 9,
    address: "Zam Zam, Bhopal, M.P.",
    description: "Very zam zam sandwich",
    isVeg: true,
    imgSrc:
      "https://www.gannett-cdn.com/-mm-/505074026ed0b64de3e53e6db90a25ddd0810fad/c=0-1305-3894-3495/local/-/media/2016/05/26/AsburyPark/B9322329337Z.1_20160526125232_000_G0HDPMF20.1-0.jpg?width=3200&height=1680&fit=crop",
    timeOfExpiry: "20",
    unit: "minutes",
    typeOfDonor: "Catering Service",
    _id: "7",
  },
  {
    quantity: 67,
    address: "Dominos, Rewa",
    description: "Very pizza food",
    isVeg: false,
    imgSrc:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fbakerpedia.com%2Fwp-content%2Fuploads%2F2014%2F09%2FPizza.jpg&f=1&nofb=1",
    timeOfExpiry: "200",
    unit: "hours",
    typeOfDonor: "Catering Service",
    _id: "8",
  },
];

const FeedLayout = () => {
  return (
    <Div>
      {donationList?.map((item) => {
        return <Card key={item._id} donationData={item} />;
      })}
    </Div>
  );
};

export default FeedLayout;
