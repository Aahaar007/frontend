import React from "react";
import {
  Div,
  Text,
  Image,
  View,
  Checkbox,
  Radio,
  Button,
  CheckBox,
} from "react-native-magnus";
import { useNavigation } from "@react-navigation/native";
import FormInput from "../../components/form/FormInput";
// import { Regex } from "../../constants/Regex";
import { useState } from "react";
import { useForm } from "react-hook-form";

const FoodDonationform = (props) => {
  const [isVeg, setIsVeg] = useState(false);
  const [isHygiene, setHygiene] = useState(false);
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    register,
  } = useForm();

  const submitData = (data) => {
    console.log(data);
    navigation.navigate("Listing");
  };
  return (
    <Div
      h="100%"
      w="100%"
      justifyContent="center"
      bg="white"
      px={20}
      {...props}
    >
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
            name="pickuplocation"
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
            name="Fooditems"
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
        <Div flex={1} flexDir="row" justifyContent="space-between">
          <FormInput
            name="timeofexpire"
            control={control}
            placeholder="HH:MM PM/AM"
            label="Time of Expire?                                                 "
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
            source={require("./img/Group_83.png")}
          />
        </Div>
        {/* <Div flex={1} flexDir="row">
          <FoodDonationformInput
            name="timeofpreparation"
            control={control}
            placeholder="HH:MM PM/AM"
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
        </Div> */}
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
              }}
              inputProp={{ color: "black", w: 100 }}
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
          <Div row>
            <Checkbox
              mr={20}
              w="20%"
              value={1}
              onChange={() => {
                setIsVeg(true);
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
export default FoodDonationform;
