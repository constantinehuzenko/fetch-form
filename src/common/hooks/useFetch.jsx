import { useState } from "react";
import { useEffectOnce } from "../utils";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffectOnce(() => {
    setLoading(true);
    setData(null);
    setError(null);

    const getData = async () => {
      try {
        const response = await fetch(url);
        const parse = await response.json();

        setLoading(false);
        parse && setData(parse);
      } catch {
        setLoading(false);
        setError(true);
      }
    };
    getData();
  }, []);

  return { data, loading, error };
};
