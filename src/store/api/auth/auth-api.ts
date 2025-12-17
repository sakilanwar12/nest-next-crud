import { TUserRegisterArgs, TuserRegisterRes } from "./auth.type";
import apiList from "..";

async function postRegister(
  payload: TUserRegisterArgs
): Promise<TuserRegisterRes> {
  try {
    const registerApi = apiList?.auth?.register;
    console.log("postRegister called with URL:", registerApi);
    console.log("Payload:", payload);

    if (!registerApi) {
      throw new Error("Register API URL not found");
    }

    const response = await fetch(registerApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data: TuserRegisterRes = await response.json();
    return data;
  } catch (error) {
    console.error("Registration failed:", error);
    throw error;
  }
}

export { postRegister };
