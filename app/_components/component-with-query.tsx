"use client";

import { useQuery } from "@tanstack/react-query";

export default function ComponentWithQuery({
  queryKey = "color",
}: {
  queryKey?: string;
}) {
  const query = useQuery({
    queryKey: [queryKey],
    queryFn: () => fetch("/api/something").then((res) => res.json()),
  });

  return (
    <div
      onClick={() => query.refetch()}
      className={`bg-${query.data}-400 rounded-md hover:scale-[1.05] h-40 w-40 transition-all`}
    >
      {query.data}
    </div>
  );
}
