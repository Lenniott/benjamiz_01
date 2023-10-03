import Image from "next/image";
import { useState } from "react";
import PagesMetaHead from "../../components/PagesMetaHead";
import { projectsData } from "../../data/projectsData";

function ProjectSingle(props) {

  return (
    <div className="container mx-auto max-w-6xl">
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
      {/* <RelatedProjects /> */}
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
