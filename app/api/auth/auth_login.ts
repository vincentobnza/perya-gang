import axios from "axios";
import { apiUrl } from "@/lib/common";
import { storeUserData }from "@/lib/hooks/useLocalStorage"

export async function LoginAccount(data: any, callback?: (success: boolean, message: string) => void
): Promise<void> {
  try {
     
    const response = await axios.post(apiUrl("auth/login"), data);

    if (response.status !== 200) {

      callback?.(false, "Failed to login");
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
    }

    storeUserData(_user);

    axios.defaults.headers.common['X-Session-Token'] = _user.token;

    callback?.(true, "Login successful");
  } catch (error: any) {
    const Err = error?.response?.data;
    const message = Err?.message || "Login failed";
    callback?.(false, message);
  }
}
