import React, { useEffect, useState } from "react";
import { Camera } from "expo-camera";
import {
  Button,
  Icon,
  Overlay,
  Text,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
} from "react-native-magnus";

const CameraOverlay = (props) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
  const { setQR, toggleShow } = props;

  const scanQR = (data) => {
    console.log(data?.data);
    setQR(data?.data);
    toggleShow();
  };
  return (
    <Overlay visible={props.show} w={WINDOW_WIDTH / 1.4} h={WINDOW_HEIGHT / 2}>
      <Camera
        style={{ width: "100%", height: "79%" }}
        onBarCodeScanned={scanQR}
      ></Camera>
      <Text mt={7} fontSize={14} fontWeight="bold" textAlign="center">
        Point the camera to a reciever QR Code
      </Text>
      <Button mt={7} w="100%" onPress={toggleShow}>
        Cancel
      </Button>
    </Overlay>
  );
};

export default CameraOverlay;
