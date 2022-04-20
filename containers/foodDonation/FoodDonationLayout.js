import React, { useEffect } from "react";
import {
  Div,
  Text,
  Image,
  View,
  Checkbox,
  Radio,
  Button,
  CheckBox,
  Icon,
  Input,
} from "react-native-magnus";
import { useNavigation } from "@react-navigation/native";
import FormInput from "../../components/form/FormInput";
// import { Regex } from "../../constants/Regex";
import { useState } from "react";
import { useForm } from "react-hook-form";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as ImagePicker from "expo-image-picker";
import { useCreateFoodListingMutation } from "../../services/aahaar";
import Spinner from "../../components/Spinner";

import mime from "mime";

const FoodDonationLayout = (props) => {
  const [isVeg, setIsVeg] = useState(false);
  const [isHygiene, setHygiene] = useState(false);
  const [image, setImage] = useState(null);

  const [show, setShow] = useState(false);
  const navigation = useNavigation();
  const [createFoodListing, result] = useCreateFoodListingMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
    clearErrors,
    register,
  } = useForm();
  register("timeOfExpiry");

  const onChange = (event, selectedTime) => {
    const currentTime = selectedTime;
    setValue("timeOfExpiry", currentTime);
    setShow(false);
  };

  const pickImage = async () => {
    if (image == null) {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        console.log(result);
        setImage(result);
      }
      setImage(result);
    } else {
      setImage(null);
    }
  };

  const submitData = async (data) => {
    if (data?.timeOfExpiry === undefined) {
      setError("timeOfExpiry", {
        type: "custom",
        message: "Time of expiry is required",
      });
    } else {
      clearErrors("timeOfExpiry");
      let reqData = data;
      reqData.isVeg = isVeg;
      reqData.typeOfDonor = "Individual";
      reqData.quantity = parseInt(reqData.quantity);

      let selTime = new Date(reqData.timeOfExpiry);
      const currTime = Date.now();
      reqData.timeOfExpiry = Math.floor((selTime.getTime() - currTime) / 60000);
      // reqData.timeOfExpiry = selTime;
      console.log(reqData);
      const fd = new FormData();
      Object.keys(reqData).forEach((key) => {
        fd.append(key, reqData[key]);
      });
      if (image) {
        const refImage = {
          uri: image.uri,
          name: image.uri.split("/").pop(),
          type: mime.getType(image.uri),
        };
        fd.append("refImage", refImage);
      }
      // console.log(fd);
      createFoodListing(fd);
    }
    //navigation.navigate("Listing");
  };

  useEffect(() => {
    if (result?.isSuccess) {
      navigation.navigate("DonationDetail");
    }
    console.log(result);
  }, [result]);

  return (
    <Div
      h="100%"
      w="100%"
      justifyContent="center"
      bg="white"
      px={20}
      position="relative"
      {...props}
    >
      <Spinner show={result.isLoading} />
      <Div flexDir="row" mt={30} justifyContent="space-between">
        <Text color="#f8a92a" fontSize={18} fontWeight="bold">
          FOOD DONATION DETAILS
        </Text>
        <Button
          p={0}
          w={20}
          h={20}
          rounded={100}
          bg="transparent"
          onPress={() => navigation.goBack()}
        >
          <Image
            h={20}
            w={20}
            resizeMode="center"
            alignSelf="center"
            source={require("./img/Group_81.png")}
          />
        </Button>
      </Div>
      <Div mt={35}>
        <Div flex={1} flexDir="row" justifyContent="space-between">
          <FormInput
            name="address"
            control={control}
            placeholder="Kothri Kalan, Bhopal"
            label="PickUp Location ?                                             "
            rules={{
              required: true,
            }}
            mt={30}
            fontSize={16}
            inputProp={{ color: "black" }}
            errors={errors}
          />
          <Image
            h={30}
            w={30}
            resizeMode="center"
            alignSelf="flex-end"
            source={require("./img/Group_82.png")}
          />
        </Div>
        <Div flex={1} flexDir="row">
          <FormInput
            name="description"
            control={control}
            placeholder="Roti, Paneer Manpasand"
            label="Food Item (s) ?                                                   "
            rules={{
              required: true,
            }}
            mt={30}
            fontSize={16}
            inputProp={{ color: "black" }}
            errors={errors}
          />
        </Div>
        <Div
          flex={1}
          flexDir="row"
          justifyContent="space-between"
          alignItems="center"
          position="relative"
          mt={30}
        >
          <Button
            w="90%"
            bg="white"
            color="black"
            borderColor="dimGray"
            borderWidth={1}
            onPress={() => setShow(true)}
          >
            <Text fontSize={20}>Set Time of expiry</Text>
          </Button>
          <Image
            h={30}
            w={30}
            resizeMode="center"
            alignSelf="center"
            source={require("./img/Group_83.png")}
          />
          <Div position="absolute" bottom={-20} left={0}>
            {errors?.timeOfExpiry && (
              <Text color="error">{errors.timeOfExpiry?.message}</Text>
            )}
          </Div>
          {show && (
            <DateTimePicker
              defaultDate={new Date()}
              value={new Date()}
              mode={"time"}
              is24Hour={false}
              onChange={onChange}
              themeVariant="dark"
            />
          )}
        </Div>

        <Div mt={20}>
          <Div flex={1} flexDir="row" justifyContent="flex-start">
            <Text px={4} color="dimGray" fontSize={16}>
              Quantity Person(s):
            </Text>
            <FormInput
              name="quantity"
              control={control}
              placeholder="100"
              rules={{
                required: true,
                min: 0,
                max: 10000,
              }}
              inputProp={{ color: "black", w: 100, type: "number" }}
              label={null}
              fontSize={16}
              errors={errors}
              default
            />
          </Div>
          {/* <Div mt={10} ml={-14}>
            <Slider
              minimumTrackTintColor="#307ecc"
              maximumTrackTintColor="#000000"
              maximumValue={500}
              minimumValue={0}
              step={1}
              value={sliderValue}
              onValueChange={(val) => {
                console.log(val);
                setValue("quantity", val);
                //setSliderValue(val);
              }}
            />
          </Div>
          <Div flex={1} flexDir="row" justifyContent="space-between">
            <Text>Min: 0</Text>
            <Text>Max: 500</Text>
          </Div> */}
        </Div>
        <Div mt={30}>
          <Text px={4} color="dimGray" fontSize={16}>
            Photos
          </Text>
          <Button
            p={0}
            mt={20}
            ml={5}
            h={60}
            w={60}
            bg="transparent"
            onPress={pickImage}
          >
            {image === null ? (
              <Icon
                name="plussquareo"
                fontFamily="AntDesign"
                fontSize={60}
                color="dimGray"
              />
            ) : (
              <Icon
                name="closesquareo"
                fontFamily="AntDesign"
                fontSize={60}
                color="red"
              />
            )}
          </Button>
        </Div>
        <Div mt={30}>
          <Div row>
            <Checkbox
              mr={20}
              w="20%"
              value={1}
              onChange={() => {
                setIsVeg(!isVeg);
              }}
              prefix={<Text mr={10}>VEG</Text>}
            />
          </Div>
        </Div>
        <Div mt={30} flex={1} flexDir="row">
          <Checkbox
            checked={isHygiene}
            onPress={() => setHygiene(!isHygiene)}
          />
          <Text px={4} fontSize={15}>
            I ASSURE THAT FOOD QUALITY AND HYGIENE HAS MAINTAINED
          </Text>
        </Div>
        <Button
          title="Submit"
          onPress={handleSubmit((data) => submitData(data))}
          bg="primary"
          w="100%"
          h={55}
          mt={30}
          mb={10}
        >
          Submit
        </Button>
      </Div>
    </Div>
  );
};
export default FoodDonationLayout;
