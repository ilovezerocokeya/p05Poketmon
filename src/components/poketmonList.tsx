"use client";

import { Poketmon } from "@/types/poketmon";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const PoketmonList: React.FC = () => {
  const [poketmons, setPoketmons] = useState<Poketmon[]>([]);

  useEffect(() => {
    const fetchInitialData = async () => {
      const response = await fetch("/api/poketmons");
      const data = await response.json();
      setPoketmons(data);
    };
    fetchInitialData();
  }, []);
  return (
    <div className="container mx-auto bg-gradient-to-r from-black to-blue-900 text-blue-200">
      <h1 className="text-center text-2xl font-bold py-4">포켓몬 도감</h1>
      {poketmons.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-screen">
          <div className="loader"></div>
          <p className="text-xl font-semibold">불러오는 중입니다</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
          {poketmons.map((poketmon) => (
            <div
              key={poketmon.id}
              className="poketmon p-4 border border-blue-200 rounded-lg bg-black bg-opacity-50 transform hover:scale-105 transition-transform duration-300"
            >
              <Link href={`/poketmon/${poketmon.id}`}>
                  <Image
                    src={poketmon.sprites.front_default}
                    alt={poketmon.korean_name}
                    width={96}
                    height={96}
                    className="mx-auto"
                  />
                  <p className="mt-2">{poketmon.korean_name}</p>
                  <p>도감번호 : {poketmon.id}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PoketmonList;