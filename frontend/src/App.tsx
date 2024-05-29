import CategoryGrid from "./components/ui/CategoryGrid";
import MainContainer from "./components/ui/MainContainer";
import Navigation from "./components/ui/Navigation";
import SpotlightGrid from "./components/ui/SpotlightGrid";

export default function Example() {
  return (
    <>
      <Navigation />
      <MainContainer />
      <SpotlightGrid />
      <CategoryGrid title="Newly designed" />
      <CategoryGrid title="Popular" />
    </>
  );
}
