import React from "react";
import { Div, Text, Image, View, Checkbox, Radio } from "react-native-magnus";
import { useNavigation } from "@react-navigation/native";
import FormInput from "../../components/form/FormInput";
// import { Regex } from "../../constants/Regex";
import { useState } from "react";
import { Button } from "react-native-magnus";
import { useForm } from "react-hook-form";

const FoodDonationform = (props) => {
  const [isVeg, setIsVeg] = useState(true);
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
      // mt={20}
      {...props}
    >
      <Div flex={1} flexDir="row" ml={20} mt={50}>
        <Text color="#f8a92a" fontSize={18} fontWeight="bold">
          FOOD DONATION DETAILS
        </Text>
        <Button
          ml={75}
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
      <Div ml={20} mt={20}>
        <Div flex={1} flexDir="row">
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
            alignSelf="center"
            ml={-30}
            mt={30}
            source={require("./img/Group_82.png")}
          />
        </Div>
        <Div flex={1} flexDir="row">
          <FormInput
            name="Fooditems"
            control={control}
            placeholder="example@mail.com"
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
        <Div flex={1} flexDir="row">
          <FormInput
            name="timeofexpire"
            control={control}
            placeholder="example@mail.com"
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
            alignSelf="center"
            ml={-30}
            mt={30}
            source={require("./img/Group_83.png")}
          />
        </Div>
        {/* <Div flex={1} flexDir="row">
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
        </Div> */}
        <Div mt={40}>
          <Div flex={1} flexDir="row">
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
              mt={-25}
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
          <Text px={4} color="dimGray" fontSize={16}>
            Select Veg / Non Veg
          </Text>
          <Radio.Group row mt={15}>
            <Radio
              {...register("isVeg", { value: true })}
              value={isVeg}
              checked={isVeg}
              onChange={() => {
                setIsVeg(true);
                setValue("isVeg", true);
              }}
              prefix={
                <Text px={4} fontSize={18}>
                  Veg
                </Text>
              }
              mr={30}
            />
            <Radio
              value={!isVeg}
              checked={!isVeg}
              onChange={() => {
                setIsVeg(false);
                setValue("isVeg", false);
              }}
              prefix={
                <Text px={4} fontSize={18}>
                  Non-Veg
                </Text>
              }
            />
          </Radio.Group>
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
