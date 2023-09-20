import Image from "next/image";
import PokemonInfo from "./pokemon-info";
import { useState } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between bg-slate-900">
      <PokemonInfo />
    </main>
  );
}
