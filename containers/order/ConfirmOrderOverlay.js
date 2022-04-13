import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Div, Overlay, Text } from "react-native-magnus";
import FormInput from "../../components/form/FormInput";
import Spinner from "../../components/Spinner";
import { Regex } from "../../constants/Regex";
import { useCreateRequestMutation } from "../../services/aahaar";
const ConfirmOrderOverlay = ({ maxAmount, show, toggleConfirm, orderId }) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [trigger, result] = useCreateRequestMutation();

  const submit = (data) => {
    if (data?.amount <= maxAmount) {
      trigger({ orderId: orderId, amount: data?.amount });
    }
  };

  useEffect(() => {
    if (result.isSuccess) {
      toggleConfirm();
    }
  }, [result]);

  return (
    <Overlay position="relative" visible={show}>
      <Spinner show={result.isLoading} />

      <Text fontWeight="bold" fontSize={15} textAlign="center">
        Confirm your order
      </Text>
      <FormInput
        name="amount"
        control={control}
        placeHolder="Enter the amount of food you wish to recieve"
        isPass={false}
        defaultValue=""
        errors={errors}
        errorMessage="Enter a valid amount"
        label="Amount"
        color="black"
        rules={{ pattern: Regex.numberPattern, requred: true }}
      />
      <Button
        w="100%"
        mt={30}
        bg="primary"
        fontWeight="bold"
        onPress={handleSubmit(submit)}
      >
        BOOK ORDER
      </Button>
      <Button
        w="100%"
        mt={8}
        bg="dangerRed"
        fontWeight="bold"
        onPress={toggleConfirm}
      >
        Cancel
      </Button>
      {result.error && (
        <Div
          position="absolute"
          top={250}
          bg="bgGray"
          rounded={5}
          p={5}
          minW={330}
        >
          {<Text color="error">{result.error?.data?.error}</Text>}
        </Div>
      )}
    </Overlay>
  );
};

export default ConfirmOrderOverlay;
