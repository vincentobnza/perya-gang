'use client'
import axios from "axios";
import { apiUrl } from "@/lib/common";
import { getToken } from "@/lib/hooks/useLocalStorage";

export async function getStreamerInfo(){
  getToken();
  try {
    const response = await axios.post(apiUrl("streamer/auth/"), {});
    return response.data.event
  } catch (error) {
    return error;
  }
}


