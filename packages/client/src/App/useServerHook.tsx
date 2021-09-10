import React from "react";
import useSWR from "swr";

const INTERVAL = 5000;
const fetcher = (url: any) =>
  fetch(url)
    .then((r) => {
      return r.json();
    })
    .then((r) => {
      r.lastUpdate = new Date().toUTCString().split(" ").slice(-2);

      return r;
    });
const useServerHook = (serverId: number) => {
  const [shouldFetch, setShouldFetch] = React.useState(true);
  // si swr recibe null no manda un el fetch ;)
  const { data, error } = useSWR(
    shouldFetch ? `http://localhost:8000/status/${serverId}` : null,
    fetcher,
    { refreshInterval: INTERVAL }
  );

  return {
    server: data,
    isLoading: !error && !data,
    isError: error,
    monitoring: shouldFetch,
    toggleMonitoring: () => setShouldFetch(!shouldFetch),
  };
};

export default useServerHook;
