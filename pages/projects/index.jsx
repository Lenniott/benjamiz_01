import PagesMetaHead from "../../components/PagesMetaHead";
import ProjectsGrid from "../../components/projects/ProjectsGrid";

function index() {
  return (
    <div className="container ">
      <PagesMetaHead title="Projects" />

      <ProjectsGrid />
    </div>
  );
}

export default index;
