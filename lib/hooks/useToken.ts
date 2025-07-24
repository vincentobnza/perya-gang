"use server";
import { cookies } from "next/headers";

const useToken = async (fallback = null) => {
  try {
    const localStorage = cookies();
    const peryaaccount = (await localStorage).get("_peryaaccount");

    if (!peryaaccount) return null;
    const base64Outer = peryaaccount.value.replace("peryagang-", "");
    const innerBase64 = Buffer.from(base64Outer, "base64").toString("utf-8");
    const uriEncoded = Buffer.from(innerBase64, "base64").toString("utf-8");
    const jsonString = decodeURIComponent(uriEncoded);
    const data = JSON.parse(jsonString);
    return data;
  } catch (error) {
    return fallback;
  }
};

export default useToken;
