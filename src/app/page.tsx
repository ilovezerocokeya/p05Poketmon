import PoketmonList from "@/components/poketmonList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-r from-black to-blue-900">
      <PoketmonList />
    </main>
  );
}