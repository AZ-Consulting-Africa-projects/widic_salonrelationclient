import HomeSection1 from "./components/HomeSection1";
import HomeSection2 from "./components/HomeSection2";
import HomeSection3 from "./components/HomeSection3";




export default function Home() {
  return (
    <main className="flex flex-col overflow-x-hidden hide-scrollbar">
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
    </main>
  );
}
