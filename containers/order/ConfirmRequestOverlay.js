import React, { useEffect } from "react";
import { Button, Div, Overlay, Text } from "react-native-magnus";
import Spinner from "../../components/Spinner";
import { useFulfillRequestMutation } from "../../services/aahaar";

const ConfirmRequestOverlay = ({ show, toggleShow, request, showSnackBar }) => {
  const [trigger, result] = useFulfillRequestMutation();
  const submit = async () => {
    trigger(request._id);
  };

  useEffect(() => {
    console.log(result);
    if (result?.isSuccess) {
      showSnackBar(result?.data?.message);
      toggleShow();
    }
  }, [result]);

  return (
    <Overlay position="relative" visible={show}>
      <Spinner show={result.isLoading} />
      <Text fontWeight="bold" fontSize={23} textAlign="center">
        Food request for {request?.amount} items.
      </Text>
      <Button
        w="100%"
        mt={30}
        bg="primary"
        fontWeight="bold"
        onPress={() => submit()}
      >
        Confirm
      </Button>
      <Button
        w="100%"
        mt={8}
        bg="dangerRed"
        fontWeight="bold"
        onPress={toggleShow}
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

export default ConfirmRequestOverlay;
