import React from "react";
import { useForm } from "react-hook-form";
import { Button, Div, Input, Text } from "react-native-magnus";
import FormInput from "./FormInput";
import ImageBox from "../../components/ImageBox";
import ProfileHeader from "./ProfileHeader";
import Title from "./../../components/Title";
const ProfileComponent = (props) => {
  const next = (data) => {
    if (props.value < 3) {
      props.changeComponent(props.value + 1);
    } else if (props.value == 3) {
      console.log(data);
    }
  };
  const previous = () => {
    if (props.value > 0) {
      props.changeComponent(props.value - 1);
    }
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  return (
    <Div h="100%">
      <ProfileHeader />
      <Title
        mt={80}
        ml={20}
        textAlign="center"
        color="white"
        fontFamily="Dancing Script , cursive"
        fontSize="30px"
      >
        {props.prop[props.value].titleHeader}
      </Title>
      <Div mt={60}>
        <ImageBox
          h={250}
          w="90%"
          src={require(`${props.prop[props.value].src}`)}
          zIndex={-1}
        />
        {props.value == 1 && (
          <FormInput
            control={control}
            name="Name"
            rules={{
              required: true,
            }}
            errors={errors}
            errorMessage="Field Required"
            label="Enter the Name"
            focusBorderColor="white"
            placeHolder="Enter the Name"
          />
        )}
        {props.value == 2 && (
          <FormInput
            control={control}
            name="DOB"
            rules={{
              required: true,
            }}
            errors={errors}
            errorMessage="Field Required"
            label="Enter the DOB"
            focusBorderColor="white"
            placeHolder="Enter the Date of Birth"
          />
        )}
        {props.value == 3 && (
          <FormInput
            control={control}
            name="Addres"
            rules={{
              required: true,
            }}
            errors={errors}
            errorMessage="Field Required"
            label="Enter the Address"
            focusBorderColor="white"
            placeHolder="Enter Your Address"
          />
        )}
      </Div>
      <Button
        position="absolute"
        title="Submit"
        bg="white"
        onPress={handleSubmit((data) => next(data))}
        color="black"
        w="40%"
        rounded={10}
        h={40}
        top={600}
        left={200}
        mt={40}
      >
        {props.prop[props.value].buttonText}
      </Button>
      {props.value != 0 && (
        <Button
          position="absolute"
          title="Submit"
          bg={props.prop[props.value].color}
          onPress={previous}
          color="black"
          w="40%"
          rounded={10}
          h={40}
          top={600}
          left={20}
          mt={40}
        >
          Previous
        </Button>
      )}
    </Div>
  );
};

export default ProfileComponent;
