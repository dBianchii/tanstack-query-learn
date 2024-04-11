"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getDataFromServer } from "../_actions";

export default function QueryComponent({
  initialData,
  initialInput,
}: {
  initialData: Awaited<ReturnType<typeof getDataFromServer>>;
  initialInput: string;
}) {
  const [input, setInput] = React.useState(initialInput);

  const query = useQuery({
    queryKey: ["myquery", input],
    queryFn: () => getDataFromServer({ input: input }),
    initialData,
  });

  if (query.isLoading) return <div>isLoading...</div>;

  return (
    <div className="flex justify-center items-center">
      {JSON.stringify(query.data)}
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border border-black text-black"
      />
    </div>
  );
}
