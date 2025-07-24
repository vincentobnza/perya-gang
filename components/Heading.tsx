import React from "react";

type HeadingProps = {
  topText: string;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  isColor?: boolean;
};

export default function Heading({
  topText,
  title,
  description,
}: HeadingProps & { children?: React.ReactNode }) {
  return (
    <>
      <div className="p-2 px-3 primary-color rounded-full bg-[#bdfc06] self-start text-black font-bold mb-4">
        {topText}
      </div>

      <h1 className="w-3/4 text-3xl md:text-4xl lg:text-7xl font-bold leading-none mb-2">
        {title || "Default Title"}
      </h1>
      <p className="w-full md:w-1/2 opacity-60 font-medium">
        {description || "Description goes here."}
      </p>
    </>
  );
}
