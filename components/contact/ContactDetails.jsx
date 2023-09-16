import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";

const contacts = [
  {
    id: 1,
    name: "Your Address, Your City, Your Country",
    icon: <FiMapPin />,
  },
  {
    id: 2,
    name: "Benjamin.Mizrany@gmail.com",
    icon: <FiMail />,
  },
  {
    id: 3,
    name: "555 8888 888",
    icon: <FiPhone />,
  },
];

function Experience() {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000); // Reset after 3 seconds
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-semibold pb-1">Benjamin Mizrany</h1>
      <h2 className="text-xl text-gray-600 pb-2">
        Product Designer | UX Specialist
      </h2>
      <div className="flex gap-2">
        <a>📧</a>
        <a
          className="underline underline-offset-4"
          href="mailto:benjamin.mizrany@gmail.com"
        >
          Email me
        </a>
        <a>|</a>
        <a>☎️</a>
        <a>Call me</a>
      </div>

      <h3>Summary</h3>
      <p>
        Driven by curiosity and a need to fix inefficient systems, I excel in
        problem-solving and thrive in collaborative settings that value high
        standards, a proactive work ethic, and continuous improvement. I'm
        committed to ensuring the user's voice is integral to the development
        process. I work to balance simplicity, value, and impact.
      </p>

      <h3>Experience</h3>
      <h4>Product Designer, Mayden</h4>
      <p>May 2023 - Present</p>
      <ul>
        <li>User Engagement: Led customer touchpoint initiative.</li>
        <li>Organisational Culture: Active in "Ways of Working" group.</li>
        <li>Data-driven: Collaborated with data and security teams.</li>
        <li>Design Advocacy: Integrated design into product development.</li>
      </ul>

      <h4>Product Designer, Insendi</h4>
      <p>Jan 2022 - May 2023, Remote</p>
      <ul>
        <li>Built and maintained component library on Figma.</li>
        <li>Streamlined product development practices.</li>
        <li>Transitioned from media to design, showcasing adaptability.</li>
      </ul>

      <h4>Lead Media Specialist @ Insendi</h4>
      <p>August 2018 – January 2022, London</p>
      <ul>
        <li>Scaled video production.</li>
        <li>Built bespoke efficiency tools.</li>
        <li>Mentored freelancers.</li>
      </ul>

      <h3>Skills</h3>
      <p>
        Design & Prototyping, User Research, Agile, Figma, Data Compliance,
        Front-End Development, Adaptability, Problem-Solving, Collaboration,
        Curiosity, Strategic Thinking
      </p>

      <h3>Education</h3>
      <p>BA (Hon) Television Post Production @ Southampton Solent University</p>
      <p>2008 - 2011</p>
    </div>
  );
}

export default Experience;
