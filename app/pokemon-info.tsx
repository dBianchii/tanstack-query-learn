"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";

type Pokemon = {
  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];
  base_experience: number;
  forms: {
    name: string;
    url: string;
  }[];
  game_indices: {
    game_index: number;
    version: {
      name: string;
      url: string;
    };
  }[];
  height: number;
  held_items: {
    item: {
      name: string;
      url: string;
    };
    version_details: {
      rarity: number;
      version: {
        name: string;
        url: string;
      };
    }[];
  }[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: {
    move: {
      name: string;
      url: string;
    };
    version_group_details: {
      level_learned_at: number;
      move_learn_method: {
        name: string;
        url: string;
      };
      version_group: {
        name: string;
        url: string;
      };
    }[];
  }[];
  name: string;
  order: number;
  past_types: any[]; // You can replace this with a specific type if needed
  species: {
    name: string;
    url: string;
  };
  sprites: {
    back_default: string;
    back_female: string | null;
    back_shiny: string;
    back_shiny_female: string | null;
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
    other: {
      dream_world: {
        front_default: string;
        front_female: string | null;
      };
      home: {
        front_default: string;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
      };
      "official-artwork": {
        front_default: string;
        front_shiny: string | null;
      };
    };
    versions: {
      generation_i: {
        "red-blue": {
          back_default: string;
          back_gray: string;
          back_transparent: string;
          front_default: string;
          front_gray: string;
          front_transparent: string;
        };
        yellow: {
          back_default: string;
          back_gray: string;
          back_transparent: string;
          front_default: string;
          front_gray: string;
          front_transparent: string;
        };
      };
      generation_ii: {
        crystal: {
          back_default: string;
          back_shiny: string;
          back_shiny_transparent: string;
          back_transparent: string;
          front_default: string;
          front_shiny: string;
          front_shiny_transparent: string;
          front_transparent: string;
        };
        gold: {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
          front_transparent: string;
        };
        silver: {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
          front_transparent: string;
        };
      };
      generation_iii: {
        emerald: {
          front_default: string;
          front_shiny: string;
        };
        "firered-leafgreen": {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
        };
        "ruby-sapphire": {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
        };
      };
      generation_iv: {
        "diamond-pearl": {
          back_default: string;
          back_female: string | null;
          back_shiny: string;
          back_shiny_female: string | null;
          front_default: string;
          front_female: string | null;
          front_shiny: string;
          front_shiny_female: string | null;
        };
        "heartgold-soulsilver": {
          back_default: string;
          back_female: string | null;
          back_shiny: string;
          back_shiny_female: string | null;
          front_default: string;
          front_female: string | null;
          front_shiny: string;
          front_shiny_female: string | null;
        };
        platinum: {
          back_default: string;
          back_female: string | null;
          back_shiny: string;
          back_shiny_female: string | null;
          front_default: string;
          front_female: string | null;
          front_shiny: string;
          front_shiny_female: string | null;
        };
      };
      generation_v: {
        "black-white": {
          animated: {
            back_default: string;
            back_female: string | null;
            back_shiny: string;
            back_shiny_female: string | null;
            front_default: string;
            front_female: string | null;
            front_shiny: string;
            front_shiny_female: string | null;
          };
          back_default: string;
          back_female: string | null;
          back_shiny: string;
          back_shiny_female: string | null;
          front_default: string;
          front_female: string | null;
          front_shiny: string;
          front_shiny_female: string | null;
        };
      };
      generation_vi: {
        "omegaruby-alphasapphire": {
          front_default: string;
          front_female: string | null;
          front_shiny: string;
          front_shiny_female: string | null;
        };
        "x-y": {
          front_default: string;
          front_female: string | null;
          front_shiny: string;
          front_shiny_female: string | null;
        };
      };
      generation_vii: {
        icons: {
          front_default: string;
          front_female: string | null;
        };
        "ultra-sun-ultra-moon": {
          front_default: string;
          front_female: string | null;
          front_shiny: string;
          front_shiny_female: string | null;
        };
      };
      generation_viii: {
        icons: {
          front_default: string;
          front_female: string | null;
        };
      };
    };
  };
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  weight: number;
};

export default function PokemonInfo() {
  const pokemons = [
    "ditto",
    "pikachu",
    "geodude",
    "jigglypuff",
    "bulbasaur",
    "pidgey",
  ] as const;

  const [selectedPokemon, setSelectedPokemon] = useState<
    (typeof pokemons)[number]
  >(pokemons[0]);

  const pokemonResult = useQuery({
    queryKey: ["repoData", selectedPokemon],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const result = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`
      );
      const pokemon: Pokemon = await result.json();
      return pokemon;
    },
  });

  console.log("I've been called!");

  return (
    <div className="bg-slate-900 rounded-md p-4 text-center flex flex-col w-full">
      <div className="flex flex-row space-x-2 space-y-2 flex-wrap p-2 rounded-md border">
        {pokemons.map((pokemon) => (
          <button
            key={pokemon}
            onClick={() => setSelectedPokemon(pokemon)}
            className={`bg-fuchsia-500 rounded-md text-lg p-2 text-white hover:text-red-300 border border-fuchsia-500 ${
              selectedPokemon === pokemon ? "border-red-300 text-red-300" : ""
            }`}
          >
            <h1 className="font-bold">{pokemon}</h1>
          </button>
        ))}
      </div>
      <div className="flex flex-row justify-center">
        <div className="flex flex-col justify-center items-center mt-8">
          <h1 className="text-3xl font-bold text-white">Pokemon Info</h1>
          {pokemonResult.isLoading ? (
            <p>Loading...</p>
          ) : (
            pokemonResult.data && (
              <table className="table-auto mt-4">
                <tbody>
                  <tr>
                    <td colSpan={2} align="center">
                      <Image
                        width={200}
                        height={200}
                        src={pokemonResult.data.sprites.front_default || ""}
                        alt="pokemon"
                        className="scale-150"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="font-bold text-gray-500">Name:</td>
                    <td>{pokemonResult.data?.name}</td>
                  </tr>
                  <tr>
                    <td className="font-bold text-gray-500">Type:</td>
                    <td>
                      {pokemonResult.data?.types.map((type, i) => (
                        <span
                          className="rounded-md px-2 py-1 bg-fuchsia-500 text-white text-xs mr-2"
                          key={i}
                        >
                          {type.type.name}
                        </span>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td className="font-bold text-gray-500">Height:</td>
                    <td>{pokemonResult.data?.height}</td>
                  </tr>
                  <tr>
                    <td className="font-bold text-gray-500">Weight:</td>
                    <td>{pokemonResult.data?.weight}</td>
                  </tr>
                  <tr>
                    <td className="font-bold text-gray-500">
                      Base Experience:
                    </td>
                    <td>{pokemonResult.data?.base_experience}</td>
                  </tr>
                  <tr>
                    <td className="font-bold text-gray-500">Abilities:</td>
                    <td>
                      {pokemonResult.data?.abilities.map((ability, i) => (
                        <div className="flex flex-row space-x-2" key={i}>
                          <p>{ability.ability.name}</p>
                          <p className="text-gray-500 text-sm">
                            (Hidden: {ability.is_hidden ? "Yes" : "No"})
                          </p>
                        </div>
                      ))}
                    </td>
                  </tr>
                </tbody>
              </table>
            )
          )}
        </div>
      </div>
    </div>
  );
}
