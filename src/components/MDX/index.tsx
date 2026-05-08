import { getMDXComponent } from "next-contentlayer2/hooks";
import { components } from "./components";

interface MdxProps {
  readonly code: string;
}

function MdxComponent({ code }: MdxProps) {
  return getMDXComponent(code)({ components });
}

export function Mdx({ code }: MdxProps) {
  return (
    <div>
      <MdxComponent code={code} />
    </div>
  );
}
