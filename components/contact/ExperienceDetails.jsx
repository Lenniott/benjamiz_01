import { experienceData } from "../../data/experience";
import { FiBriefcase, FiMenu } from "react-icons/fi";

const ExperienceTimeline = () => {
  return (
    <ol className="relative border-l border-gray-300 flex flex-col ">
      {experienceData.map((exp) => (
        <li key={exp.id} className="mb-10 ml-10 ">
          <span className="absolute flex items-center justify-center w-8 h-8 bg-indigo-600 rounded-full -left-4 ring-8 ring-white dark:ring-gray-900">
            <FiBriefcase className="text-white" />
          </span>
          <h3 className="flex items-center justify-left mb-1 text-lg font-semibold text-gray-900">
            {exp.title}
          </h3>
          <div className="block flex gap-2 mb-2 text-sm font-normal leading-none text-gray-500">
          <time >
            {exp.date}, {exp.location}
          </time>
          <p></p>
          </div>
          <ul>
            {exp.tasks.map((task) => (
              <li className="ml-5 py-1 list-disc" key={task.id}>{task.task}</li>
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
      <ExperienceTimeline />
    </div>
  );
}

export default Experience;
