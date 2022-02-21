import React, { createRef, useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { useForm } from "react-hook-form";
import { Button, Div, Select, Text, Icon } from "react-native-magnus";
import FormInput from "./FormInput";
import codes from "../../constants/countryCode.json";
import countryNames from "../../constants/countryNames.json";

import { getEmojiFlag } from "@cprecioso/country-flag-emoji";

const PhoneInput = (props) => {
  const { control, errors } = props;

  const windowWidth = Dimensions.get("window").width;
  const countries = Object.keys(codes).sort();

  const selectRef = createRef();
  const [code, setCode] = useState("IN");
  useEffect(() => {
    props.setData({ code: code });
  }, [code]);

  return (
    <Div {...props}>
      <Text color="dimGray">Enter your phone number</Text>
      <Div row w={windowWidth}>
        <Button
          w={131}
          h="100%"
          mr={15}
          bg="transparent"
          pb={0}
          fontSize="2xl"
          borderBottomColor="dimGray"
          borderBottomWidth={1}
          onPress={() => {
            if (selectRef.current) {
              selectRef.current.open();
            }
          }}
        >
          {getEmojiFlag(code) +
            "▼ " +
            (codes[code].includes("+") ||
            codes[code].includes(" ") ||
            codes[code].length === 0
              ? codes[code]
              : "+" + codes[code])}
        </Button>
        <FormInput
          inputProp={{ w: windowWidth - 180, h: 50, my: 0, fontSize: "2xl" }}
          control={control}
          name="phone"
          placeholder="1234567890"
          defaultValue=""
          errors={errors}
        />
      </Div>
      <Select
        onSelect={(val) => setCode(val)}
        ref={selectRef}
        //multiple={false}
        value={code}
        title="Select your country"
        roundedTop="xl"
        data={countries}
        renderItem={(item, index) => (
          <Select.Option value={item} py="md" px="xl" bg="white">
            <Text>
              {getEmojiFlag(item) +
                " " +
                countryNames[item] +
                "  " +
                (codes[item].includes("+") ||
                codes[item].includes(" ") ||
                codes[item].length === 0
                  ? codes[item]
                  : "+" + codes[item])}
            </Text>
          </Select.Option>
        )}
      />
    </Div>
  );
};

export default PhoneInput;
