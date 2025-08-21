import Image from "next/image";
import Banner from "./Banner";
import TopRecipe from "./Components/TopRecipe";

export default function Home() {
  return (
    <div>
      <Banner/>
      <TopRecipe/>
    </div>
  );
}
