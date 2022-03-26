import React, { useRef, useEffect } from "react";
import { Animated, Easing } from "react-native";
import { Div } from "react-native-magnus";
const Spinner = (props) => {
  const { show, imgStyle } = props;
  const rotAnim = new Animated.Value(0);
  const spin = rotAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  const animation = Animated.loop(
    Animated.timing(rotAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
      easing: Easing.inOut(Easing.exp),
    })
  );
  useEffect(() => {
    if (show) {
      animation.start();
    } else {
      animation.stop();
    }
  }, [show]);
  useEffect(() => {
    console.log(rotAnim);
  }, [rotAnim]);
  return (
    <Div position="absolute" zIndex={9999} {...props}>
      {show && (
        <Animated.Image
          style={{
            transform: [{ rotate: spin }],
            height: 50,
            width: 50,
            ...imgStyle,
          }}
          source={require("./img/spinner.png")}
        />
      )}
    </Div>
  );
};

export default Spinner;
