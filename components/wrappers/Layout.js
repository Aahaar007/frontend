import React from "react";
import {
  Div,
  ScrollDiv,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
} from "react-native-magnus";
const Layout = (props) => {
  return (
    <>
      {props.noScroll ? (
        <Div
          minH={WINDOW_HEIGHT}
          minW={WINDOW_WIDTH}
          w="100%"
          h="100%"
          pt={40}
          bg="bgGray"
          px={10}
          {...props}
          decelerationRate="fast"
        >
          {props.children}
        </Div>
      ) : (
        <ScrollDiv
          minH={WINDOW_HEIGHT}
          minW={WINDOW_WIDTH}
          w="100%"
          h="100%"
          pt={40}
          bg="bgGray"
          px={10}
          {...props}
          decelerationRate="fast"
        >
          {props.children}
        </ScrollDiv>
      )}
    </>
  );
};

export default Layout;
