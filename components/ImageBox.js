import React from "react";
import { Div, Image } from "react-native-magnus";

const ImageBox = (props) => {
  return (
    <Div w="100%" h={props.h} alignItems="center" {...props}>
      <Image
        w="100%"
        h="100%"
        source={props.src}
        resizeMethod="scale"
        resizeMode="contain"
      />
    </Div>
  );
};

export default ImageBox;
