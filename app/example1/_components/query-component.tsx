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
    initialData:
      JSON.stringify(initialInput) === JSON.stringify(input)
        ? initialData
        : undefined,
  });

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border border-black text-black"
      />
      {query.isLoading ? "loading..." : query.data}
    </div>
  );
}
