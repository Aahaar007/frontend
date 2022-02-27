import React from "react";
import { Div, Text, Image, View, Checkbox } from "react-native-magnus";
import FormInput from "../../components/form/FormInput";
import FoodDonationformInput from "./FoodDonationFormInput";
// import { Regex } from "../../constants/Regex";
// import Slider from "react-native-slider";
import Slider from "@react-native-community/slider";
import { useState } from "react";
import { Button } from "react-native-magnus";
import { useForm } from "react-hook-form";

const FoodDonationform = (props) => {
  const [isVeg, setVeg] = useState(false);
  const [isNonVeg, setNonVeg] = useState(false);
  const [isHygiene, setHygiene] = useState(false);
  const [sliderValue, setSliderValue] = useState(15);
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
    register,
  } = useForm();
  const submitData = (data) => {
    console.log(data);
    console.log("isVeg" + " " + isVeg);
    console.log("isNonVeg" + " " + isNonVeg);
    console.log("isHygiene" + " " + isHygiene);
  };
  return (
    <Div
      {...props}
      h="100%"
      w="100%"
      justifyContent="center"
      bg="white"
      // mt={20}
    >
      <Div flex={1} flexDir="row" ml={20} mt={50}>
        <Text color="#f8a92a" fontSize={18} fontWeight="bold">
          FOOD DONATION DETAILS
        </Text>
        <Image
          h={20}
          w={20}
          resizeMode="center"
          alignSelf="center"
          ml={75}
          source={require("./img/Group_81.png")}
        />
      </Div>
      <Div ml={20} mt={20}>
        <Div flex={1} flexDir="row">
          <FoodDonationformInput
            name="pickuplocation"
            control={control}
            placeholder="example@mail.com"
            label="PickUp Location ?                                             "
            rules={{
              required: true,
            }}
            mt={30}
            errors={errors}
          />
          <Image
            h={30}
            w={30}
            resizeMode="center"
            alignSelf="center"
            ml={-30}
            mt={30}
            source={require("./img/Group_82.png")}
          />
        </Div>
        <Div flex={1} flexDir="row">
          <FoodDonationformInput
            name="Fooditems"
            control={control}
            placeholder="example@mail.com"
            label="Food Item (s) ?                                                   "
            rules={{
              required: true,
            }}
            mt={30}
            errors={errors}
          />
        </Div>
        <Div flex={1} flexDir="row">
          <FoodDonationformInput
            name="timeofexpire"
            control={control}
            placeholder="example@mail.com"
            label="Time of Expire?                                                 "
            rules={{
              required: true,
            }}
            mt={30}
            errors={errors}
          />
          <Image
            h={30}
            w={30}
            resizeMode="center"
            alignSelf="center"
            ml={-30}
            mt={30}
            source={require("./img/Group_83.png")}
          />
        </Div>
        <Div flex={1} flexDir="row">
          <FoodDonationformInput
            name="timeofpreparation"
            control={control}
            placeholder="example@mail.com"
            label="Time of Preparation?                                        "
            rules={{
              required: true,
            }}
            mt={30}
            errors={errors}
          />
          <Image
            h={30}
            w={30}
            resizeMode="center"
            alignSelf="center"
            ml={-30}
            mt={30}
            source={require("./img/Group_83.png")}
          />
        </Div>
        <Div mt={40}>
          <Div flex={1} flexDir="row">
            <Text px={4} color="dimGray" fontSize={16}>
              Quantity Person(s):
            </Text>
            <FoodDonationformInput
              name="quantity"
              control={control}
              placeholder="example@mail.com"
              rules={{
                required: true,
              }}
              label="             "
              mt={-25}
              errors={errors}
              onValueChange={(sliderValue) => setSliderValue(sliderValue)}
            />
          </Div>
          <Div mt={10} ml={-14}>
            <Slider
              minimumTrackTintColor="#307ecc"
              maximumTrackTintColor="#000000"
              maximumValue={500}
              minimumValue={0}
              step={1}
              value={sliderValue}
            />
          </Div>
          <Div flex={1} flexDir="row" justifyContent="space-between">
            <Text>Min: 0</Text>
            <Text>Max: 500</Text>
          </Div>
        </Div>
        <Div mt={30}>
          <Text px={4} color="dimGray" fontSize={16}>
            Photos
          </Text>
          <Div>
            <Image
              h={70}
              w={70}
              mt={20}
              ml={5}
              resizeMode="center"
              // alignSelf="center"
              source={require("./img/Group_84.png")}
            />
          </Div>
        </Div>
        <Div mt={30}>
          <Text px={4} color="dimGray" fontSize={16}>
            Select Veg / Non Veg
          </Text>
          <Div mt={15}>
            <Div flex={1} flexDir="row">
              <Checkbox checked={isVeg} onPress={() => setVeg(!isVeg)} />
              <Text ml={5} px={4} fontSize={18}>
                Veg
              </Text>
            </Div>
            <Div flex={1} flexDir="row">
              <Checkbox
                checked={isNonVeg}
                onPress={() => setNonVeg(!isNonVeg)}
              />
              <Text ml={5} px={4} fontSize={18}>
                Non Veg
              </Text>
            </Div>
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
export default FoodDonationform;
