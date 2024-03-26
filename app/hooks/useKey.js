import { useEffect } from "react";

export function useKey(key, actions) {
  useEffect(
    function () {
      const handleKey = (e) => {
        if (e.code === key) {
          actions();
        }
      };
      document.addEventListener("keydown", handleKey);
      return () => document.removeEventListener("keydown", handleKey);
    },
    [actions, key]
  );
}
