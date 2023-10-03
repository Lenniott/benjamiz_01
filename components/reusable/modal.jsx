import Image from "next/image"; // Make sure to import Image from 'next/image'
import { FiXCircle } from "react-icons/fi";
import { motion } from "framer-motion";

function Modal({ image, modal, modalClose }) {
  return (
    <>
      {modal && (
        <motion.div
          initial={{ opacity: 0, y: -180 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.3 }}
          className="bg-black fixed top-0 left-0 w-screen h-screen z-50 relatative opacity-95 p-8 duration-500"
        >
          <div className="w-full flex items-start justify-end">
            <button label="close" onClick={modalClose}>
              <FiXCircle className="text-4xl text-primary-light" />
            </button>
          </div>
          <span className="bg-red">
            <Image
              src={image?.src || ""}
              alt={image?.alt || ""}
              height={image?.height || ""}
              width={image?.width || ""}
            />
          </span>
          <p>{image?.alt || ""}</p>
        </motion.div>
      )}
    </>
  );
}

export default Modal;
