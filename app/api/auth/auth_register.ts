import axios from "axios";
import { apiUrl } from "@/lib/common";
import { storeUserData } from "@/lib/hooks/useLocalStorage";

export async function RegisterAccount(
  data: any,
  callback?: (success: boolean, message: string) => void
): Promise<void> {
  try {
    const response = await axios.post(apiUrl("auth/register"), data);

    console.log("Registration response:", response);
    if (response.status !== 200) {
      callback?.(false, "Failed to register account");
      return;
    }
    const _user = {
      status: true,
      f_: response.data.data.name,
      e_: response.data.data.email,
      u_: response.data.data.username,
      id_: response.data.data.id,
      balances: response.data.data.user_balance,
      token: response.data.data.sessionToken,
    };
    //console.log("User data:", _user);
    storeUserData(_user);

    axios.defaults.headers.common["X-Session-Token"] = _user.token;

    callback?.(true, "Account created successfully");
  } catch (error: any) {
    const Err = error?.response?.data;
    const message = Err?.message || "Registration failed";
    callback?.(false, message);
  }
}
