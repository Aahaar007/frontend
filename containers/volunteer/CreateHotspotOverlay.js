import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Overlay, Text, Div, Toggle, Radio, Button } from "react-native-magnus";
import FormInput from "../../components/form/FormInput";
import PhoneInput from "../../components/form/PhoneInput";
import { useCreateHotspotMutation } from "../../services/aahaar";
import * as ImagePicker from "expo-image-picker";
import mime from "mime";
import codes from "../../constants/countryCode.json";
import Spinner from "../../components/Spinner";

const CreateHotspotOverlay = (props) => {
  const { control, handleSubmit, formState: error } = useForm();
  const [trigger, result] = useCreateHotspotMutation();
  const { show, toggleShow } = props;
  const [data, setData] = useState();
  const [img, setImg] = useState(null);
  const [isNgo, setIsNgo] = useState(false);

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
    // console.log(val);
    // console.log("data:", data);
    let reqData = val;
    const fd = new FormData();
    Object.keys(reqData).forEach((key) => {
      if (key !== "phone") {
        fd.append(key, reqData[key]);
      }
    });

    if (img) {
      const imgSrc = {
        uri: img.uri,
        name: img.uri?.split("/").pop(),
        type: mime.getType(img.uri),
      };
      fd.append("imgSrc", imgSrc);
    }
    fd.append("isNGO", isNgo);
    if (isNgo) {
      fd.append("contactNumber[region]", codes[data?.code]);
      fd.append("contactNumber[number]", val.phone);
    }

    // console.log(fd);
    trigger(fd);
    toggleShow();
  };
  useEffect(() => {
    console.log(result);
    if (result.isSuccess) {
      console.log("Success");
      //toggleShow();
    }
    if (result.isError) {
      console.log(result.error);
      //toggleShow();
    }
  }, [result]);

  return (
    <Overlay visible={show} bg="bgGray">
      <Spinner show={result.isLoading} />
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
            placeHolder="Describe briefly about the hotspot location"
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
          <Div alignItems="center" pt={10}>
            <Text mr={10} fontSize={15} color="white">
              Is this an NGO?
            </Text>
            <Div row>
              <Text color="white" mr={5}>
                No
              </Text>
              <Toggle
                on={isNgo}
                onPress={() => {
                  setIsNgo(!isNgo);
                }}
                mr={5}
              />
              <Text color="white">Yes</Text>
            </Div>
          </Div>
        </Div>
        {isNgo && (
          <PhoneInput
            overflow="hidden"
            control={control}
            errors={error}
            setData={modifyData}
            color="white"
          />
        )}
        <Button
          w="100%"
          bg="primary"
          rounded="xl"
          mt={20}
          alignSelf="center"
          onPress={pickImage}
        >
          Upload Image
        </Button>
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
