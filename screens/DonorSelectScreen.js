import React from "react";
import ListingWrapper from "../components/wrappers/ListingWrapper";
import DonorSelectForm from "../containers/foodlisting/DonorSelectForm";

const DonorSelectScreen = () => {
  return (
    <ListingWrapper selected="donate">
      <DonorSelectForm />
    </ListingWrapper>
  );
};

export default DonorSelectScreen;
