import React from "react";
import { Button } from "react-native-magnus";

const SubmitButton = (props) => {
  return (
    <Button type="submit" {...props}>
      {props.text}
    </Button>
  );
};

export default SubmitButton;
