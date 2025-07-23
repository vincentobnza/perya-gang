import axios from "axios";
import { toast, Bounce } from 'react-toastify';

axios.defaults.headers.common['X-Application-Id'] = process.env.NEXT_PUBLIC_APP_ID;

export const apiUrl = (url: string) => `${process.env.NEXT_PUBLIC_API_BASE_URL || 'http://127.0.0.1:8000/v1'}/${url}`;

export const setToast = (message: string, type: "success" | "error" | "info" | "warning" = "success") => {
  switch (type) {
    case "success":
      return  toast.success(message, { position: "top-right",autoClose: 5000, hideProgressBar: false,closeOnClick: false,pauseOnHover: true,draggable: true,progress: undefined,theme: "dark",transition: Bounce});
    case "error":
      return toast.error(message, { position: "top-right",autoClose: 5000, hideProgressBar: false,closeOnClick: false,pauseOnHover: true,draggable: true,progress: undefined,theme: "dark",transition: Bounce});
    case "info":
      return toast.info(message, { position: "top-right",autoClose: 5000, hideProgressBar: false,closeOnClick: false,pauseOnHover: true,draggable: true,progress: undefined,theme: "dark",transition: Bounce});
    case "warning":
      return toast.warning(message, { position: "top-right",autoClose: 5000, hideProgressBar: false,closeOnClick: false,pauseOnHover: true,draggable: true,progress: undefined,theme: "dark",transition: Bounce});
    default:
      return toast(message, { position: "top-right",autoClose: 5000, hideProgressBar: false,closeOnClick: false,pauseOnHover: true,draggable: true,progress: undefined,theme: "dark",transition: Bounce});
  }
}