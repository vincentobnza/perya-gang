"use server";
import { cookies } from "next/headers";

const useToken = async (fallback = null) => {
  try {
    const token = await cookies();
    const hmember = token.get("_peryaaccount");

    if (!hmember) return null;

    const base64Outer = hmember.value.replace("peryagang-", "");

    const innerBase64 = Buffer.from(base64Outer, "base64").toString("utf-8");

    const uriEncoded = Buffer.from(innerBase64, "base64").toString("utf-8");

    const jsonString = decodeURIComponent(uriEncoded);

    const data = JSON.parse(jsonString);

    return data.access_token;
  } catch (error) {
    console.error("Failed to decode _peryaaccount cookie:", error);
    return fallback;
  }
};

export default useToken;
