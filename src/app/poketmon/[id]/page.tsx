import { fetchPoketmonData } from "@/apis/poketmon";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const PoketmonDetailPage = async ({ params }: { params: { id: string } }) => {
  const poketmon = await fetchPoketmonData(params.id);

  return (
    <div className="poketmon-details max-w-xl mx-auto bg-gradient-to-r from-black to-blue-900 shadow-lg rounded-lg overflow-hidden border border-blue-200 mt-2 text-blue-200">
      <div className="bg-black bg-opacity-50 text-center p-4 border-b-2 border-blue-200">
        <h2 className="text-2xl font-bold">{poketmon.korean_name}</h2>
        <p>No.{poketmon.id.toString().padStart(4, "0")}</p>
      </div>
      <div className="p-4 flex flex-col justify-start items-center">
        <Image
          src={poketmon.sprites.front_default}
          alt={poketmon.korean_name}
          className="mx-auto"
          width={150}
          height={150}
        />
        <p className="text-center text-xl my-2">이름 : {poketmon.korean_name}</p>
        <div className="flex gap-4">
          <p className="text-center">키 : {poketmon.height / 10} m</p>
          <p className="text-center">무게 : {poketmon.weight / 10} kg</p>
        </div>
        <div className="text-center my-2">
          <p className="font-bold mb-5">기술:</p>
          <div className="flex flex-wrap gap-2 items-center text-center justify-center">
            {poketmon.moves.map((move) => (
              <div key={move.move.name} className="bg-black bg-opacity-50 p-2 rounded">
                {move.move.korean_name}
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-4">
          <Link href="/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            뒤로가기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PoketmonDetailPage;