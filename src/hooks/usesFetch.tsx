import { useEffect, useState } from "react";

export const useFetch = <T = unknown>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!url) return;

    fetch(url)
      .then((res) => res.json())
      .then((json: T) => {
        setData(json);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [url]);

  return { data, loading };
};