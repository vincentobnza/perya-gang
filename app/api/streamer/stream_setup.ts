'use client'
import axios from "axios";
import { apiUrl } from "@/lib/common";
import { getToken } from "@/lib/hooks/useLocalStorage";

export async function getStreamerInfo(){
  getToken();
  try {
    const response = await axios.post(apiUrl("live/streamer/info"), {});
    return response.data.streaminfo
  } catch (error) {
    return error;
  } 
}

export async function ChangeStreamKey(){
  getToken();
  try {
    const response = await axios.post(apiUrl("live/streamer/change_stream_key"), {});
    return response.data
  } catch (error) {
    return error;
  }
}

export async function StartLive(){
  getToken();
  try {
    const response = await axios.post(apiUrl("live/streamer/start"), {});
    return response.data
  } catch (error) {
    return error;
  }
}

export async function StopLive(){
  getToken();
  try {
    const response = await axios.post(apiUrl("live/streamer/stop"), {});
    return response.data
  } catch (error) {
    return error;
  }
}

