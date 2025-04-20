import Image from "next/image";
import LocationAnalysis from './components/LocationAnalysis';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <LocationAnalysis />
    </main>
  );
}
