import React from "react";
import { Animated, Easing } from "react-native";
import { Div, Overlay } from "react-native-magnus";
const Spinner = (props) => {
  const { show, imgStyle } = props;
  const rotAnim = new Animated.Value(0);
  const spin = rotAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  Animated.loop(
    Animated.timing(rotAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
      easing: Easing.inOut(Easing.exp),
    })
  ).start();
  return (
    <Overlay bg="transparent" visible={show}>
      <Animated.Image
        style={{
          transform: [{ rotate: spin }],
          height: 50,
          width: 50,
          alignSelf: "center",
          ...imgStyle,
        }}
        source={require("./img/spinner.png")}
      />
    </Overlay>
  );
};

export default Spinner;
