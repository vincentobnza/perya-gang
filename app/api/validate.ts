import axios from "axios";
import { apiUrl } from "@/lib/common";
import { storeUserData, getUserData }from "@/lib/hooks/useLocalStorage"

export async function validateLogin({}, callback?: (success: boolean, message: string) => void
): Promise<void> {
  try {
     axios.defaults.headers.common['X-Session-Token'] = getUserData().token;
    const response = await axios.post(apiUrl("auth/user"), {});
    if (response.status !== 200) {

      callback?.(false, "Failed to register account");
      return;
    }
    const _user = {
        status: true,
        f_: response.data.name,
        e_: response.data.email,
        u_: response.data.username,
        id_: response.data.id,
        balances: response.data.user_balance,
        token: getUserData().token,
    }
    console.log("User data:", _user);
    storeUserData(_user);

    axios.defaults.headers.common['X-Session-Token'] = _user.token;

    callback?.(true, "Login successful");
  } catch (error: any) {
    const Err = error?.response?.data;
    const message = Err?.message || "Login failed";
    callback?.(false, message);
  }
}
