import { FormValidateInput } from "@mantine/form";
import { TUserRegisterArgs } from "@/store/api/auth/auth.type";

export const validator: FormValidateInput<TUserRegisterArgs> = {
  name: (value: string) =>
    value.length < 2 ? "Name must have at least 2 letters" : null,
  email: (value: string) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
  password: (value: string) =>
    value.length < 6 ? "Password must contain at least 6 characters" : null,
};
