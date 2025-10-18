/* eslint-disable react/no-unknown-property */
import { ImageResponse } from "next/og";
import { data } from "@/data";

export const size = { width: 52, height: 52 };
export const contentType = "image/png";

export default function Icon() {
  const splittedName = data.name.split(" ");
  const firstNameLetter = splittedName[0]![0];
  const lastNameLetter = splittedName[1]![0];

  return new ImageResponse(
    (
      <div tw="flex h-full w-full items-center justify-center rounded-full bg-black text-3xl font-bold text-white">
        {`${firstNameLetter}${lastNameLetter}`}
      </div>
    ),
    { ...size },
  );
}
