import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { Overlay, Text, Div, Toggle, Radio, Button } from "react-native-magnus";
import FormInput from "../../components/form/FormInput";
import PhoneInput from "../../components/form/PhoneInput";
const CreateHotspotOverlay = (props) => {
  const { control, handleSubmit, formState: error } = useForm();
  const { show, toggleShow } = props;

  const [data, setData] = useState();
  const modifyData = useCallback(
    (val) => {
      const temp = { ...data, ...val };

      setData(temp);
    },
    [data]
  );

  const onSubmit = (val) => {
    console.log(val, data);
    toggleShow();
  };

  return (
    <Overlay visible={show} bg="bgGray">
      <Text textAlign="center" color="white" fontWeight="bold" fontSize={25}>
        Create Hotspot
      </Text>
      <Div>
        <Div mb={20}>
          <FormInput
            name="name"
            control={control}
            placeHolder="Pashupati Area"
            label="Name"
            color="white"
            errors={error}
          />
        </Div>
        <Div mb={20}>
          <FormInput
            name="address"
            control={control}
            placeHolder="Pashupati, Kathmandu"
            label="Address"
            color="white"
            errors={error}
          />
        </Div>
        <Div mb={20}>
          <FormInput
            name="description"
            control={control}
            placeHolder="Lots of people depending on people's sympaty"
            label="Description"
            color="white"
            errors={error}
          />
        </Div>
        <Div row justifyContent="space-between" alignItems="center">
          <Div row alignItems="center" p={0}>
            <Text pt={8} mr={10} fontSize={15} color="white">
              Capacity
            </Text>
            <FormInput
              name="capacity"
              control={control}
              placeHolder="200"
              color="white"
              w={50}
              errors={error}
            />
          </Div>
          <Div alignItems="center" pt={10}>
            <Text mr={10} fontSize={15} color="white">
              Is this an NGO?
            </Text>
            <Radio.Group row>
              <Radio prefix={<Text color="white">Yes</Text>} />
              <Radio
                prefix={
                  <Text color="white" ml={20}>
                    No
                  </Text>
                }
              />
            </Radio.Group>
          </Div>
        </Div>
        <PhoneInput
          overflow="hidden"
          control={control}
          errors={error}
          setData={modifyData}
          color="white"
        />
        <Button
          w="100%"
          mt={20}
          onPress={() => handleSubmit((data) => onSubmit(data))}
        >
          Submit
        </Button>
        <Button onPress={toggleShow} w="100%" bg="dangerRed" mt={5}>
          Cancel
        </Button>
      </Div>
    </Overlay>
  );
};

export default CreateHotspotOverlay;
