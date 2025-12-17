import { useForm } from "@mantine/form";
import { postRegister } from "@/store/api/auth/auth-api";

function useRegisterForm() {
  const formProps = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      email: "",
      password: "",
      termsOfService: false,
    },

    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length < 6 ? "Password must contain at least 6 characters" : null,
      termsOfService: (value) =>
        value ? null : "You must agree to sell your privacy",
    },
  });

  const handleRegister = async (values: typeof formProps.values) => {
    try {
      await postRegister({
        name: values.name,
        email: values.email,
        password: values.password,
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
