import { motion } from "framer-motion";

const ProjectLink = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
      className="w-full"
    >
      <a
        href={props.link}
        aria-label={props.title}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="p-4 flex-col h-full flex gap-4 rounded-xl shadow-lg hover:shadow-xl  hover:translate-y-0.5 hover:scale-105 cursor-pointer  bg-secondary-light duration-500">
            <h2 className="font-general-medium text-left text-md md:text-lg text-ternary-dark">
            {props.title}
            </h2>
            <p className="text-ternary-dark text-left font-light text-md break-normal">
                {props.description}
            </p>
        </div>
      </a>
    </motion.div>
  );
};

export default ProjectLink;
