import Image from "next/image";
import { useState } from "react";
import { aboutMeData } from "../../data/aboutMeData";
import { Button } from "../../components/reusable";
import { FiBookmark, FiChevronLeft } from "react-icons/fi";

function AboutMeBio() {
  const [aboutMe, setAboutMe] = useState(aboutMeData);
  return (
    <div className="max-w-6xl sm:flex sm:gap-10 mt-10 sm:mt-20">
      <div className="font-general-regular text-left">
        {aboutMe.map((bio, index) => (
          <div
            className={`mb-24 text-ternary-dark dark:text-ternary-light text-lg grid gap-12 place-items-center md:flex md:flex-row  md:gap-8  ${
              index % 2 === 0 ? "" : "md:flex-row-reverse"
            }`}
            key={bio.id}
          >
            <Image
              src={bio.image}
              width={250}
              height={450}
              className="h-full transition ease-in-out order-last md:order-first rounded-lg grayscale hover:grayscale-0 duration-500"
              alt="Profile Image"
            />
            <div className="">
              <h3 className="text-xl font-semibold pb-4">{bio.title}</h3>
              <p className="font-light">{bio.bio}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default AboutMeBio;
