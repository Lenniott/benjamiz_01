import PagesMetaHead from "../components/PagesMetaHead";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import AppBanner from "../components/shared/AppBanner";
import dynamic from 'next/dynamic';

const DynamicMediumGrid = dynamic(() => import("../components/projects/Medium"), {
  ssr: false,
}); 
export default function Home() {
  return (
    <div className="container mx-auto">
      <PagesMetaHead title="Home" />
      <AppBanner />
      <ProjectsGrid />
      <DynamicMediumGrid />
    </div>
  );
}
