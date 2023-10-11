import ProjectSingle from "./ProjectSingle";
import { projectsData } from "../../data/projectsData";

function ProjectsGrid() {
  return (
    <section className="py-5 sm:py-10 mt-5 sm:mt-10">
      <div className="flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
            Case studies
          </h1>
        </div>

        <div className="grid grid-flow-col auto-cols-max mt-6 gap-8 max-w-6xl">
          {projectsData.map((project, index) => (
            <ProjectSingle key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsGrid;
