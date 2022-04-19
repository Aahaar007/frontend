import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Div, Text, WINDOW_WIDTH } from "react-native-magnus";
import { Camera } from "expo-camera";
import FormInput from "../../components/form/FormInput";
import CameraOverlay from "../../components/CameraOverlay";

const DonationDetailLayout = (props) => {
  const data = {
    donorId: "dnfmQwUu3HYpVHxAjrKjs7COXQG3",
    quantity: 55,
    description: "the universe",
    photos: [],
    address: "literallty everywhere",
    //timeOfExpiry: "2022-04-10T11:22:19.197Z",
    timeOfExpiry: "10 April 2022, 11:22 PM",
    requestQueue: [],
    isActive: true,
    _id: "6252b6e37d9d3acfd03d632f",
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    setValue,
  } = useForm();

  const [showQRScanner, setQRScanner] = useState(false);
  const [qrData, setQRData] = useState(null);
  const toggleScanner = () => {
    const temp = showQRScanner;
    setQRScanner(!temp);
  };

  const changeQRData = (data) => setQRData(data);

  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    if (qrData) {
      setValue("requestCode", qrData);
    }
  }, [qrData]);

  return (
    <Div alignItems="center" px={40} pt={100} h="100%" w="100%">
      <CameraOverlay
        show={showQRScanner}
        toggleShow={toggleScanner}
        setQR={changeQRData}
      />
      <Div
        position="absolute"
        bg="white"
        w={WINDOW_WIDTH}
        top={-40}
        p={20}
        pt={40}
        roundedBottom={25}
        alignItems="center"
      >
        <Text fontSize={30} color="black" fontWeight="bold">
          Your Order is active, waiting for requests
        </Text>
      </Div>
      <Div bg="white" w="100%" rounded={10} p={10} mt={50}>
        <Text fontSize={40} fontWeight="bold">
          {data?.description}
        </Text>
        <Text fontSize={25}>For {data?.quantity} people</Text>
        <Text fontSize={20} fontWeight="100">
          at {data?.address}
        </Text>
        <Div
          bg="white"
          rounded={20}
          borderWidth={2}
          borderColor="green"
          p={5}
          mt={30}
        >
          <Text color="black" fontSize={30} textAlign="center">
            Expires at
          </Text>
          <Text color="green" fontSize={20} textAlign="center">
            {data.timeOfExpiry}
          </Text>
        </Div>
        <FormInput
          name="requestCode"
          control={control}
          placeHolder="Enter a request code"
          bg="transparent"
          color="black"
          inputProp={{ fontSize: 28, textAlign: "center" }}
          mt={40}
        />
        <Text textAlign="center" fontSize={20} fontWeight="bold" my={5}>
          OR
        </Text>
        <Button
          fontSize={20}
          w="100%"
          bg="bgGray"
          color="white"
          fontWeight="bold"
          onPress={toggleScanner}
        >
          Open QR Code Scanner
        </Button>
        <Button
          fontSize={20}
          w="100%"
          mt={30}
          bg="green"
          color="white"
          fontWeight="bold"
          onPress={handleSubmit(onSubmit)}
        >
          Submit Code
        </Button>
      </Div>
      {/* <Div w="100%" bg="bgGray" rounded={10} mt={40} p={5}></Div> */}
      <Div
        position="absolute"
        bg="white"
        bottom={0}
        w={WINDOW_WIDTH}
        p={10}
        alignItems="center"
        roundedTop={25}
      >
        <Text>Thank you for your contribution</Text>
        <Text>in reducing food waste and hunger</Text>
      </Div>
    </Div>
  );
};

export default DonationDetailLayout;
