import { useForm } from "@mantine/form";
import { registerUser } from "@/store/api/auth/auth-api";
import { notifications } from "@mantine/notifications";

import { initialFormValues } from "./initialFormValues";
import { validator } from "./validator";
import { TUserRegisterArgs } from "@/store/api/auth/auth.type";

function useRegisterForm() {
  const formProps = useForm({
    mode: "uncontrolled",
    initialValues: initialFormValues,
    validate: validator,
  });

  const handleRegister = async (values: TUserRegisterArgs) => {
    try {
      await registerUser(values);
      notifications.show({
        title: "Success",
        message: "Registration successful",
        color: "green",
        position: "top-right",
      });
    } catch (error) {
      console.error(error);
      formProps.setFieldError(
        "email",
        error instanceof Error ? error.message : "Registration failed"
      );
    }
  };

  return {
    formProps,
    handleRegister,
  };
}

export default useRegisterForm;
