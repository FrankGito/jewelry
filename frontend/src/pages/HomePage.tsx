import CategoryGrid from "@/components/ui/CategoryGrid";
import MainContainer from "@/components/ui/MainContainer";
import Navigation from "@/components/ui/Navigation";
import PopularGrid from "@/components/ui/PopularGrid";
import SpotlightGrid from "@/components/ui/SpotlightGrid";
import UnpopularGrid from "@/components/ui/UnpopularGrid";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <MainContainer />
      <SpotlightGrid />
      <CategoryGrid title="Newly designed" />
      <PopularGrid title="Popular" />
      <UnpopularGrid title="Unpopular" />
    </>
  );
}
