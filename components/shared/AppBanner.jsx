import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowDownCircle, FiBriefcase } from "react-icons/fi";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";
import homePageImage from "../../public/images/homePage";

function AppBanner() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="flex flex-col sm:justify-between items-center sm:flex-row mt-5 md:mt-2"
    >
      <div className="w-full md:w-1/3 text-left">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.1,
          }}
          className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark uppercase"
        >
          Hi👋🏽, I'm Benjamin
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.2,
          }}
          className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
        >
          Product designer & problem solver
          <p className="text-sm font-light">
            Building customer value through usable and professional software.
          </p>
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.3,
          }}
          className="flex justify-center sm:block"
        >
          <a
            href="../files/benjamizCVdetailed.pdf"
            className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg py-2.5 sm:py-3 shadow-lg rounded-lg bg-ternary-light text-primary-dark focus:ring-1 focus:ring-primary-dark hover:bg-primary-dark hover:text-primary-light  hover:translate-y-0.5 hover:scale-105 duration-500"
            aria-label="Download Resume"
          >
            <FiBriefcase className="ml-0 sm:ml-1 mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiBriefcase>
            <span className="text-sm sm:text-lg duration-100">View CV</span>
          </a>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className="relative w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0 "
      >
        <div className=" hover:translate-y-0.5 hover:scale-105 grayscale hover:grayscale-0  duration-500">
          <Image
            layout="responsive"
            src={homePageImage.hero}
            alt="Product designer"
          />
        </div>
      </motion.div>
    </motion.section>
  );
}

export default AppBanner;
