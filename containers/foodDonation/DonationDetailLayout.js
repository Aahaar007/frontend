import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Div,
  Text,
  WINDOW_WIDTH,
  Snackbar,
  Icon,
} from "react-native-magnus";
import { Camera } from "expo-camera";
import FormInput from "../../components/form/FormInput";
import CameraOverlay from "../../components/CameraOverlay";
import {
  useGetFoodListingByIdQuery,
  useGetRequestByCodeMutation,
} from "../../services/aahaar";
import Spinner from "../../components/Spinner";
import { useRoute } from "@react-navigation/native";
import ConfirmRequestOverlay from "../order/ConfirmRequestOverlay";

import moment from "moment";

const DonationDetailLayout = (props) => {
  const route = useRoute();
  const { id } = route.params;
  const { data, error, isLoading } = useGetFoodListingByIdQuery(id || "");
  const [triggerGetRequestByCode, res] = useGetRequestByCodeMutation();
  const snackbarRef = useRef();

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

  const [showConfirm, setShowConfirm] = useState(false);
  const [requestData, setRequestData] = useState({});
  const toggleShowConfirm = () => {
    setShowConfirm(!showConfirm);
  };

  useEffect(() => {
    console.log(error);
  }, [error]);

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await triggerGetRequestByCode(data.requestCode).unwrap();
      if (res) {
        setShowConfirm(true);
        setRequestData(res.request);
      }
    } catch (e) {
      setShowConfirm(false);
      setRequestData({});
      console.log(e);
    }
  };

  const showSnackBar = (message) => {
    if (snackbarRef.current) {
      snackbarRef.current.show(message, {
        duration: 1500,
        suffix: (
          <Icon
            name="checkcircle"
            color="white"
            fontSize="md"
            fontFamily="AntDesign"
          />
        ),
      });
    }
  };

  useEffect(() => {
    if (qrData) {
      setValue("requestCode", qrData);
    }
  }, [qrData]);

  useEffect(() => {
    console.log("DATA", data);
  }, [data]);

  return (
    <Div>
      <Spinner show={isLoading} />
      {!isLoading && !error && (
        <Div alignItems="center" px={40} pt={100} h="100%" w="100%">
          <ConfirmRequestOverlay
            show={showConfirm}
            toggleShow={toggleShowConfirm}
            request={requestData}
            showSnackBar={showSnackBar}
          />
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
              {data?.foodListing?.description || "Loading Description"}
            </Text>
            <Text fontSize={25}>For {data?.foodListing?.quantity} people</Text>
            <Text fontSize={20} fontWeight="100">
              at {data?.foodListing?.address || "Loading Address"}
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
                {data?.foodListing
                  ? moment(new Date(data.foodListing.timeOfExpiry)).format(
                      "DD/MM/YYYY hh:mm A"
                    )
                  : "Loading Date"}
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
          <Snackbar
            ref={snackbarRef}
            mb="150%"
            borderWidth={1}
            bg={"limeGreen"}
            borderColor={"green"}
          />
        </Div>
      )}
      {error && error?.status === 404 && (
        <Div alignItems="center" px={40} pt={100} h="100%" w="100%">
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
              Your Order has expired.
            </Text>
          </Div>
          <Div bg="white" w="100%" rounded={20} p={0} mt={230}>
            <Div
              bg="white"
              rounded={20}
              borderWidth={2}
              borderColor="red"
              p={5}
            >
              <Text color="black" fontSize={35} textAlign="center">
                Expired
              </Text>
            </Div>
          </Div>
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
          <Snackbar
            ref={snackbarRef}
            mb="150%"
            borderWidth={1}
            bg={"limeGreen"}
            borderColor={"green"}
          />
        </Div>
      )}
    </Div>
  );
};

export default DonationDetailLayout;
