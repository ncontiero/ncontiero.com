/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unknown-property */
import type { NextRequest } from "next/server";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { z } from "zod";
import { data } from "@/data";

export const alt = "Open Graph Image";
export const size = {
  width: 1686,
  height: 882,
};

export const contentType = "image/png";

const ogSchema = z.object({
  title: z.string().optional().default(data.name),
  description: z.string().optional(),
  isProject: z
    .string()
    .optional()
    .transform((val) => val === "true"),
});

export async function GET(request: NextRequest) {
  // Font loading, process.cwd() is Next.js project directory
  const interSemiBold = await readFile(
    join(process.cwd(), "public/fonts/Inter-SemiBold.ttf"),
  );

  try {
    const { searchParams } = new URL(request.url);
    const params = Object.fromEntries(searchParams);
    const { title, description, isProject } = ogSchema.parse(params);

    return new ImageResponse(
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
          <div tw="mx-auto flex max-w-[1280px]">
            <p
              tw={`${
                isProject ? "text-4xl" : "text-5xl"
              } text-center font-medium tracking-tight`}
            >
              {description}
            </p>
          </div>
        </div>
      </div>,
      {
        width: 1686,
        height: 882,
        fonts: [
          {
            name: "Inter",
            data: interSemiBold,
            style: "normal",
            weight: 400,
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
