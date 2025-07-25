// utils/seo.ts
import type { Metadata } from "next";

type MetadataOptions = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
};

const defaultTitle = "Perya Gang";
const defaultDescription = "Get Rewarded Like Never Before";
const defaultImage = "https://perya-gang.vercel.app/og-image.png";
const defaultUrl = "https://perya-gang.vercel.app";

export function createMetadata({
  title = defaultTitle,
  description = defaultDescription,
  image = defaultImage,
  url = defaultUrl,
}: MetadataOptions = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "Perya Gang",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
