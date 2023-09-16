import { motion } from "framer-motion";
import ExperienceDetails from "../components/contact/ExperienceDetails";
import ContactForm from "../components/contact/ContactForm";
import PagesMetaHead from "../components/PagesMetaHead";

function experience() {
  return (
    <div>
      <PagesMetaHead title="cv" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
          delay: 0.1,
        }}
        className="container relative gap-6 mx-auto flex flex-col lg:flex-row "
      >
        <ExperienceDetails />
        <ContactForm />
      </motion.div>
    </div>
  );
}

export default experience;
