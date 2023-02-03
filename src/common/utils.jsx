import { useEffect, useRef } from "react";
import { CircularProgress } from "@mui/material";

export const conditionalSpinner = (
  loading,
  iconPropertyName,
  boxClassName,
  size
) =>
  loading
    ? {
        [iconPropertyName]: () => (
          <div className={boxClassName}>
            <CircularProgress size={size} />
          </div>
        ),
      }
    : () => {};

export const useEffectOnce = (effect) => {
  const effectRan = useRef(false);

  useEffect(() => {
    if (effectRan.current === false) {
      effect();
      return () => {
        effectRan.current = true;
      };
    }
  }, []);
};
