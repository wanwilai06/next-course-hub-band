import { band } from "@/data/banddata";
import BandCard from "@/components/BandCard";

export default function BandsPage() {
  return (
    <main className="page">
      <h1>Favorite Bands</h1>
      <div className="courseGrid">
        {band.map((item) => (
          <BandCard key={item.id} band={item} />
        ))}
      </div>
    </main>
  );
}