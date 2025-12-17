import { useForm } from "@mantine/form";
 import { authApi } from "@/store/api/auth/auth-api"; 

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
      await authApi.endpoints.register.mutation(values);
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
