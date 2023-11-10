import Hero from "./components/storeFront/Hero";
import Category from "./components/storeFront/Category";
import Featured from "./components/storeFront/Featured";
import Favorites from "./components/storeFront/Favorites";
import CTA from "./components/storeFront/CTA";

export default function Home() {
  return (
    <div className="min-h-screen px-4 lg:px-8">
      {/* Hero section */}
      <Hero />
      <main className="">
        <Category />
        <Featured />
        <Favorites />
        <CTA />
      </main>
    </div>
  );
}
