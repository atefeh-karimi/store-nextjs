import Hero from "./components/storeFront/Hero";
import Category from "./components/storeFront/Category";
import Featured from "./components/storeFront/Featured";
import Favorites from "./components/storeFront/Favorites";
import CTA from "./components/storeFront/CTA";
import Trend from "./components/storeFront/Trend";

export default function Home() {
  return (
    <div className="">
      {/* Hero section */}
      <Hero />
      <main className="">
        <Category />
        <Featured />
        <Favorites />
        <CTA />
        <Trend />
      </main>
    </div>
  );
}
