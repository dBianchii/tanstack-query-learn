import Image from "next/image";
import ComponentWithQuery from "./_components/component-with-query";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-slate-900 p-2">
      <span className="bg-red-400 hidden"></span>
      <span className="bg-blue-400 hidden"></span>
      <span className="bg-orange-400 hidden"></span>
      <span className="bg-green-400 hidden"></span>
      <span className="bg-yellow-400 hidden"></span>

      <div className="grid grid-cols-4 gap-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <>
            <ComponentWithQuery queryKey="1" />
            <ComponentWithQuery queryKey="2" />
            <ComponentWithQuery queryKey="3" />
            <ComponentWithQuery queryKey="4" />
          </>
        ))}
      </div>
    </main>
  );
}
