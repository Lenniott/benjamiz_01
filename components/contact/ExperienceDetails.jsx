import { experienceData } from "../../data/experience";
import { FiBriefcase, FiMenu } from "react-icons/fi";

const ExperienceTimeline = () => {
  return (
    <ol className="relative border-l border-gray-300 flex flex-col items-center justify-center">
      {experienceData.map((exp) => (
        <li key={exp.id} className="mb-10 ml-10 ">
          <span className="absolute flex items-center justify-center w-8 h-8 bg-indigo-600 rounded-full -left-4 ring-8 ring-white dark:ring-gray-900">
            <FiBriefcase className="text-white" />
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            {exp.title}
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {exp.date}
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            {exp.location}
          </p>
          <ul>
            {exp.tasks.map((task) => (
              <li key={task.id}>{task.task}</li>
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
      <ExperienceTimeline />
    </div>
  );
}

export default Experience;
