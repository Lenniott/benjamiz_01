import Skills from "./skillIcons";
import { experienceData } from "../../data/experience";
import { FiBriefcase, FiArrowUp } from "react-icons/fi";

const ExperienceTimeline = () => {
  return (
    <ol className="relative border-l border-gray-300  flex flex-col ">
      {experienceData.map((exp, index) => (
        <li key={exp.id} id="experienceBucket" className="mb-10 ml-10">
          <span className="absolute flex items-center justify-center w-8 h-8 bg-primary-dark rounded-full -left-4 ring-8 ring-primary-light">
            <FiBriefcase className="text-primary-light" />
          </span>
          <h3 className="flex items-center justify-left mb-1 text-lg font-semibold text-gray-900">
            {exp.title}
          </h3>
          <div className="flex gap-2 mb-2 text-sm font-normal leading-none text-gray-500">
            <time>
              {exp.date}, {exp.location}
            </time>
          </div>
          <ul>
            {exp.tasks.map((task) => (
              <li className="ml-5 py-1 list-disc" key={task.id}>
                {task.task}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
};

function Experience() {
  return (
    <div className="flex  flex-col m-8">
      <h1 className="text-2xl pt-1 pb-4">Professional experience</h1>
      <div className="ml-4">
        <ExperienceTimeline />
        <span className="absolute flex items-center justify-center w-8 h-8 bg-primary-dark rounded-full left-[65px] ring-8 ring-primary-light">
          <FiArrowUp className="text-primary-light" />
        </span>
      </div>

      <div className="mt-24">
        <h1 className="text-2xl pt-1 pb-4">Software experience</h1>
        <Skills />
      </div>
    </div>
  );
}

export default Experience;
