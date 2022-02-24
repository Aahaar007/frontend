import React from "react";
import Card from "./Card";
import DonorSelectForm from "../foodlisting/DonorSelectForm";
import { Div } from "react-native-magnus";
import Expire from "./Expire";
import ListingWrapper from "../../components/wrappers/ListingWrapper";

const CardTest = (props) => {
  return (
    <ListingWrapper pt={20} bg="white">
      <Card />
    </ListingWrapper>
  );
};

export default CardTest;
