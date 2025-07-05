import HeroSection from "@/components/HeroSection";
import LatestCategoryPost from "@/components/LatestCategoryPost";

export default async function HomePage() {
  return (
    <>
      <HeroSection />
      <LatestCategoryPost category="Data Analytics" title="Data Analytics" />
      <LatestCategoryPost
        category="Web Design and Development"
        title="Web Design and Development"
      />
      <LatestCategoryPost
        category="Football"
        title="Football Facts and Analysis"
      />
    </>
  );
}
