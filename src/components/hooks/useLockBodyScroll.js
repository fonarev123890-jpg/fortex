import { useEffect } from "react";

let locks = 0;

export default function useLockBodyScroll(isLocked) {
  useEffect(() => {
    if (isLocked) {
      locks++;
      document.body.classList.add("no-scroll");
    } else {
      locks = Math.max(locks - 1, 0);
      if (locks === 0) {
        document.body.classList.remove("no-scroll");
      }
    }

    return () => {
      locks = Math.max(locks - 1, 0);
      if (locks === 0) {
        document.body.classList.remove("no-scroll");
      }
    };
  }, [isLocked]);
}
