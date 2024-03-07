"use client";

import { useEffect, useMemo, useState } from "react";

function CounterPage({ children }: { children: React.ReactNode }) {
  const [countState, setCountState] = useState(0);

  const memoizedCount = useMemo(() => countState, [countState]);

  useEffect(() => {
    // Render HTML dựa trên memoizedCount.
  }, [memoizedCount]);

  const handleClick = () => {
    setCountState(countState + 1);
  };

  return (
    <div>
      <h1>Số lượng: {memoizedCount}</h1>
      <button onClick={handleClick}>Tăng số lượng</button>
      <h1>Server Component below</h1>
      <div>{children}</div>
    </div>
  );
}

export default CounterPage;
