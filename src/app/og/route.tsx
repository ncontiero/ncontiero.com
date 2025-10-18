/* eslint-disable react/no-unknown-property */
import { ImageResponse } from "next/og";
import { z } from "zod";

import { data } from "@/data";

export const runtime = "edge";

const ogSchema = z.object({
  title: z.string().optional().default(data.name),
  description: z.string().optional().default(data.description),
  isProject: z
    .string()
    .optional()
    .transform((val) => val === "true"),
});

export async function GET(request: Request) {
  const fontData = await fetch(
    new URL("../../../public/fonts/Inter-SemiBold.ttf", import.meta.url),
  ).then((res) => res.arrayBuffer());

  try {
    const { searchParams } = new URL(request.url);
    const params = Object.fromEntries(searchParams);
    const { title, description, isProject } = ogSchema.parse(params);

    return new ImageResponse(
      (
        <div
          tw="flex h-full w-full flex-col items-center justify-center bg-[#270B5B] text-center text-white"
          style={{
            backgroundImage: "radial-gradient(circle, #270B5B 0%, #000000 95%)",
          }}
        >
          <div
            tw={`flex flex-col ${
              isProject ? "pt-52" : "pt-40"
            } h-full w-full items-center text-white`}
          >
            <h1
              tw={`${
                isProject ? "text-8xl" : "text-[164px]"
              } font-semibold tracking-tighter`}
            >
              {title}
            </h1>
            <div tw="mx-auto flex max-w-(--breakpoint-xl)">
              <p
                tw={`${
                  isProject ? "text-4xl" : "text-5xl"
                } text-center font-medium tracking-tight`}
              >
                {description}
              </p>
            </div>
          </div>
        </div>
      ),
      {
        width: 1686,
        height: 882,
        fonts: [
          {
            name: "Inter",
            data: fontData,
            style: "normal",
          },
        ],
      },
    );
  } catch (error: any) {
    console.error(`${error.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
