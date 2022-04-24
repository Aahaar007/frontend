import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Overlay, Text, Div, Toggle, Radio, Button } from "react-native-magnus";
import FormInput from "../../components/form/FormInput";
import PhoneInput from "../../components/form/PhoneInput";
import { useCreateHotspotMutation } from "../../services/aahaar";
import * as ImagePicker from "expo-image-picker";
import mime from "mime";
const CreateHotspotOverlay = (props) => {
  const { control, handleSubmit, formState: error } = useForm();
  const [trigger, result] = useCreateHotspotMutation();
  const { show, toggleShow } = props;
  const [data, setData] = useState();
  const [img, setImg] = useState(null);
  const modifyData = useCallback(
    (val) => {
      const temp = { ...data, ...val };

      setData(temp);
    },
    [data]
  );
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      console.log(result);
      setImg(result);
    }
  };
  const onSubmit = (val) => {
    console.log(val, data);
    let reqData = val;
    const fd = new FormData();
    Object.keys(reqData).forEach((key) => {
      fd.append(key, reqData[key]);
    });

    if (img) {
      const imgSrc = {
        uri: img.uri,
        name: img.uri?.split("/").pop(),
        type: mime.getType(img.uri),
      };
      fd.append("imgSrc", imgSrc);
    }
    // const contactNumber = {
    //   region: data,
    //   number: val.phone,
    // };
    // fd.append("contactNumber", data);
    console.log(fd);
    trigger(fd);
    toggleShow();
  };
  useEffect(() => {
    if (result.isSuccess) {
      console.log("Success");
    }
    if (result.isError) {
      console.log(result.error);
    }
  }, [result]);

  return (
    <Overlay visible={show} bg="bgGray">
      <Text textAlign="center" color="white" fontWeight="bold" fontSize={25}>
        Create Hotspot
      </Text>
      <Button rounded="xl" alignSelf="center" onPress={pickImage}>
        Upload Image
      </Button>
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
        <Div row justifyContent="space-between" alignItems="center" mb={20}>
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
        </Div>
        {/* <Div alignItems="center" pt={10}>
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
          </Div> */}
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
          onPress={handleSubmit((data) => {
            onSubmit(data);
          })}
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
