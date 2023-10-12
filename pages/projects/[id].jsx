import Image from "next/image";
import { useState } from "react";
import PagesMetaHead from "../../components/PagesMetaHead";
import { projectsData } from "../../data/projectsData";
// import { Modal } from "../../components/reusable";
import MoreLinks from "../../components/projects/MoreLinks";

function ProjectSingle(props) {
  const [modal, setModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);


  const openModal = (imageDetails) => {
    setCurrentImage(imageDetails);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const renderLayout = (details, index) => {
    switch (details.styleID) {
      case "ImageOnly":
        return (
          <>
            <div
              key={details.id}
              className={`flex items-center justify-center gap-8`}
            >
              <div className="grid gap-2 py-2">
              {details?.imgHi ? (
                <button onClick={() => {
                  openModal({
                    src: details.imgHi,
                    alt: details.alt,
                    height: 3000,
                    width: 3000,
                  });
                }}>
                  <Image
                    alt={details.alt}
                    src={details.img}
                    width={700}
                    height={700}
                    quality={75}
                    className="w-full rounded-lg"
                  />
                </button>
              ) : (
                <span>
                  <Image
                    alt={details.alt}
                    src={details.img}
                    width={700}
                    height={700}
                    quality={75}
                    className="w-full rounded-lg"
                  />
                </span>
              )}


                <p className="text-center text-xs">{details.alt}</p>
              </div>
            </div>
          </>
        );
      case "textOnly":
        return (
          <div key={details.id} className="py-2">
            <div className=" rounded-lg">
              {details.title && (
                <h2 className="w-full flex justify-start text-2xl font-semibold pb-2">
                  {details.title}
                </h2>
              )}

              <p className="text-ternary-dark text-left font-light  text-lg">
                {details.body}
              </p>
            </div>
          </div>
        );
      case "allDetails":
        return (
          <>
            <div
              key={details.id}
              className={`grid md:flex gap-8 ${
                (index + 1) % 2 === 0 ? "" : "md:flex-row-reverse"
              } `}
            >
              <div
                className={`flex py-2 ${
                  details.img ? "md:w-3/5" : ""
                } flex-col justify-center items-center`}
              >
                <h2 className="w-full flex justify-start text-2xl font-semibold pb-2">
                  {details.title}
                </h2>

                <p className="text-ternary-dark text-left font-light  text-lg">
                  {details.body}
                </p>
              </div>
              <div className="md:w-2/5 flex flex-col items-center justify-center gap-2 ">
              {details?.imgHi ? (
                <button onClick={() => {
                  openModal({
                    src: details.imgHi,
                    alt: details.alt,
                    height: 3000,
                    width: 3000,
                  });
                }}>
                  <Image
                    alt={details.alt}
                    src={details.img}
                    width={700}
                    height={700}
                    quality={75}
                    className="w-full rounded-lg"
                  />
                </button>
                ) : (
                <span>
                  <Image
                    alt={details.alt}
                    src={details.img}
                    width={700}
                    height={700}
                    quality={75}
                    className="w-full rounded-lg"
                  />
                </span>
                )}

                <p className="text-center text-xs">{details.alt}</p>
              </div>
            </div>
          </>
        );
      case "quote":
        return (
          <div key={details.id} className="mb-8 mt-4">
            <div className="bg-slate-700 p-4 rounded-lg">
              <h2 className="w-full flex justify-start text-2xl font-semibold">
                {details.title}
              </h2>
              <p className="italic text-ternary-light text-left font-light  text-lg ">
                {details.body}
              </p>
            </div>
          </div>
        );
      case "chip":
        return (
          <div key={details.id} className="">
            <div className="bg-slate-200 p-4 rounded-lg">
              <h2 className="w-full flex justify-start text-xl font-semibold text-gray-700 pb-2">
                {details.title}
              </h2>
              <p className="italic text-ternary-dark text-left font-light  text-lg ">
                {details.body}
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto max-w-6xl">
      {/* <Modal
        modal={modal}
        image={currentImage}
        modalClose={closeModal}
      /> */}
      <PagesMetaHead title={props.project.title} />

      {/* Header */}
      <div>
        <p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-4">
          {props.project.ProjectHeader.title}
        </p>
        <div className="flex">
          <p className="font-light text-primary-dar">
            {props.project.ProjectHeader.description}
          </p>
        </div>
      </div>

      {/* Info */}
      <div className="">
        {/*  Single project right section details */}
        <div className="w-full text-left grid gap-4">
          <p className="text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
            {props.project.ProjectInfo.ProjectDetailsHeading}
          </p>
          {props.project.ProjectInfo.ProjectDetails.map((details, index) => {
            return <div key={details.id}>{renderLayout(details, index)}</div>;
          })}
        </div>
      </div>
      
      <div className="flex flex-col items-center justify-center py-5 sm:py-10 mt-5 sm:mt-10">
        <div className="text-center">
          <h1 className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
            Extneral links
          </h1>
        </div>  
          <div className="grid grid-flow-col col-auto mt-6 gap-8 w-full">
            {props.project.links.map((link, index) => (
              <MoreLinks key={index} {...link} />
            ))}
          </div>
      </div>

    </div>
  );
}

export async function getServerSideProps({ query }) {
  const { id } = query;
  return {
    props: {
      project: projectsData.filter((project) => project.id === parseInt(id))[0],
    },
  };
}

export default ProjectSingle;
