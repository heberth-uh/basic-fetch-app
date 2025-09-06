import { useEffect, useState } from "react";
import type { User } from "../types";
import type { UseFetchReturn } from "./types/types";

export default function useFetch(): UseFetchReturn {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok)
          throw new Error(
            `Something went wrong fetching data. Status error ${response.status}`
          );
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      })
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}
