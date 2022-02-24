import React from "react";
import Card from "./Card";
import DonorSelectForm from "../foodlisting/DonorSelectForm";
import { Div } from "react-native-magnus";
import Layout from "../../components/wrappers/Layout";
import Expire from "./Expire";

const CardTest = (props) => {
  return (
    <Layout pt={20} bg="white">
      <Expire />
    </Layout>
  );
};

export default CardTest;
