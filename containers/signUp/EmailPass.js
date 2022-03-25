import React from "react";
import { Div, Button, Tooltip, Text, Icon } from "react-native-magnus";
import FormInput from "../../components/form/FormInput";
import { Regex } from "../../constants/Regex";

const EmailPass = (props) => {
  const { control, errors } = props;
  const tooltipRef = React.createRef();
  return (
    <Div {...props}>
      <FormInput
        name="email"
        rules={{
          required: true,
          pattern: Regex.emailPattern,
        }}
        control={control}
        placeholder="example@gmail.com"
        label="Enter your email address"
        errors={errors}
      />
      <FormInput
        name="password"
        control={control}
        placeholder="Enter a valid password here!"
        label="Enter Password"
        rules={{
          required: true,
          pattern: Regex.passwordPattern,
        }}
        isPass={true}
        mt={30}
        errors={errors}
      />
      <FormInput
        name="rePassword"
        control={control}
        rules={{
          required: true,
          pattern: Regex.passwordPattern,
        }}
        placeholder="Please enter the same password!"
        label="Verify Password"
        isPass={true}
        mt={30}
        errors={errors}
      />
      <Div position="relative" row justifyContent="flex-end" mt={25}>
        <Tooltip
          flexDir="row"
          justifyContent="flex-end"
          w="100%"
          bg="primary"
          color="black"
          fontWeight="bold"
          ref={tooltipRef}
          text={`- Minimum 8 characters\n- Atleast 1 uppercase letter\n- Atleast 1 lowercase letter\n- Atleast 1 numeric character`}
        >
          <Text
            color="grey"
            fontSize="lg"
            textDecorLine="underline"
            fontWeight="bold"
            onPress={() => {
              if (tooltipRef.current) {
                tooltipRef.current.show();
              }
            }}
          >
            <Icon name="infocirlceo" color="primary" fontFamily="AntDesign" />{" "}
            Password Guidelines
          </Text>
        </Tooltip>
      </Div>
    </Div>
  );
};

export default EmailPass;
