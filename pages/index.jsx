import PagesMetaHead from "../components/PagesMetaHead";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import AppBanner from "../components/shared/AppBanner";

export default function Home() {
  return (
    <div className="">
      <PagesMetaHead title="Home" />
      <AppBanner />
      <ProjectsGrid />
    </div>
  );
}
