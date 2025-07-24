"use server";
import axios from "axios";
import { apiUrl } from "@/lib/common";
import { cookies } from "next/headers";
import { storeUserData } from "@/lib/hooks/useLocalStorage";

export async function LoginAccount(data: any): Promise<{
  success: boolean;
  message: string;
  data: any;
}> {
  try {
    const response = await axios.post(apiUrl("auth/login"), data);

    if (response.status !== 200) {
      return { success: false, message: "Failed to login", data: [] };
    }

    const _user = {
      status: true,
      f_: response.data.data.name,
      e_: response.data.data.email,
      u_: response.data.data.username,
      id_: response.data.data.id,
      roles: response.data.data.roles,
      balances: response.data.data.user_balance,
      token: response.data.data.sessionToken,
    };

    //storeUserData(_user);

    axios.defaults.headers.common["X-Session-Token"] = _user.token;

    const encoded = encodedPerya(_user);

    (await cookies()).set({
      name: "_peryaaccount",
      value: encoded,
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    });

    return { success: true, message: "Login successful", data: _user };
  } catch (error: any) {
    const Err = error?.response?.data;
    const message = Err?.message || "Login failed";
    return { success: false, message, data: [] };
  }
}

const encodedPerya = (data: any): string => {
  const jsonString = JSON.stringify(data);
  const uriEncoded = encodeURIComponent(jsonString);
  const innerBase64 = Buffer.from(unescape(uriEncoded)).toString("base64");
  const result = "peryagang-" + Buffer.from(innerBase64).toString("base64");
  return result;
};
