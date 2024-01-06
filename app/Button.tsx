import { useState } from "react";

export function Button({ onClick }: { onClick: (cnt: number) => void }) {
  const [count, setCount] = useState(0);
  return (
    <button
      onClick={() => {
        setCount(count + 1);
        onClick(count + 1);
      }}
    >
      {count}
    </button>
  );
}
