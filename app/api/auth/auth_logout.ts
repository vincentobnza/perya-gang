"use client";
import axios from "axios";
import { apiUrl } from "@/lib/common";
import { getToken } from "@/lib/hooks/useLocalStorage";

export async function Logout() {
  const Token: any = await getToken();
  try {
    const response = await axios.post(
      apiUrl("signout"),
      {},
      {
        headers: {
          "X-Session-Token": Token?.token || "",
        },
      }
    );
    return response.data;
  } catch (error) {
    return error;
  }
}
