import PagesMetaHead from "../../components/PagesMetaHead";
import ProjectsGrid from "../../components/projects/ProjectsGrid";
import dynamic from 'next/dynamic';

const DynamicMediumGrid = dynamic(() => import("../../components/projects/Medium"), {
  ssr: false,
}); 

function index() {
  return (
    <div className="container ">
      <PagesMetaHead title="Projects" />

      <ProjectsGrid />
      <DynamicMediumGrid/>
    </div>
  );
}

export default index;
