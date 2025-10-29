import { useMDXComponent } from "next-contentlayer2/hooks";
import { components } from "./components";

interface MdxProps {
  readonly code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div>
      {/* eslint-disable-next-line react-hooks/static-components */}
      <Component components={components} />
    </div>
  );
}
