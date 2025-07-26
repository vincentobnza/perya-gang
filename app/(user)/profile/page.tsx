import ProfilePage from "./ProfilePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile - John Layda",
  description: "Watch live streams from Perya Gang",
};

export default function Page() {
  return <ProfilePage />;
}
