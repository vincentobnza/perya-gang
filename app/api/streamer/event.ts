'use client'
import axios from "axios";
import { apiUrl } from "@/lib/common";
import { getToken } from "@/lib/hooks/useLocalStorage";

export async function GetAllEvents(){
  await getToken();
  try {
    const response = await axios.post(apiUrl("streamer/event/all"), {});
    return response.data.event
  } catch (error) {
    return error;
  }
}

export async function CreateEvent(data: any){
  await getToken();
  try {
    const response = await axios.post(apiUrl("streamer/event/add"), data);
    return response.data
  } catch (error) {
    return error;
  }
}

export async function UpdateEvent(data: any){
  await getToken();
  try {
    const response = await axios.post(apiUrl("streamer/event/update"), data);
    return response.data
  } catch (error) {
    return error;
  }
}

