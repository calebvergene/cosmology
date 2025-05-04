import Image from "next/image";
import Hero from "./components/hero";
import Article from "./components/article";

export default function Home() {
  return (
    <div>
      <Hero />
      <Article />
    </div>
  );
}
