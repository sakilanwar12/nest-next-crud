"use client";
import {
  TextInput,
  PasswordInput,
  Button,
  Stack,
  Checkbox,
} from "@mantine/core";
import useRegisterForm from "./useRegisterForm";
function RegisterForm() {
  const { formProps, handleRegister } = useRegisterForm();
  const { key, errors, onSubmit } = formProps;

  return (
    <form onSubmit={onSubmit(handleRegister)}>
      <Stack>
        <TextInput
          label="Name"
          placeholder="Your name"
          required
          key={key("name")}
          {...formProps.getInputProps("name")}
          error={errors.name}
        />
        <TextInput
          label="Email"
          placeholder="your@email.com"
          required
          type="email"
          key={key("email")}
          {...formProps.getInputProps("email")}
          error={errors.email}
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          key={key("password")}
          {...formProps.getInputProps("password")}
          error={errors.password}
        />
        <Checkbox
          label="I agree to sell my privacy"
          key={key("termsOfService")}
          {...formProps.getInputProps("termsOfService", { type: "checkbox" })}
          error={errors.termsOfService}
        />
        <Button fullWidth mt="xl" type="submit">
          Sign up
        </Button>
      </Stack>
    </form>
  );
}

export default RegisterForm;
