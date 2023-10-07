import PagesMetaHead from "../components/PagesMetaHead";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import AppBanner from "../components/shared/AppBanner";
import Medium from "../components/projects/Medium";
export default function Home() {
  return (
    <div className="container mx-auto">
      <PagesMetaHead title="Home" />
      <AppBanner />
      <ProjectsGrid />
      <Medium/>
    </div>
  );
}
