'use client'
import { CodeBlock, dracula } from "react-code-blocks";

export default function Codle() {
  return (
    <div>
      Codle
      <div className="max-w-4xl">
      <CodeBlock
        text="const a = 1;"
        language={"javascript"}
        showLineNumbers
        theme={dracula}
      />

      </div>
    </div>
  );
}
