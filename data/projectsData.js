import { v4 as uuidv4 } from "uuid";
import projectOneImages from "../public/images/project 1";

export const projectsData = [
  {
    id: 1,
    title: "The Paradox of Knowledge Handoffs",
    url: "the-paradox-of-knowledge-handoffs",
    category: "Working principles",
    img: projectOneImages.thumbnail,
    ProjectHeader: {
      title: "The Paradox of Knowledge Handoffs",
      publishDate: "Jul 2023",
      description:
        "This case study discusses my experience at Insendi, focusing on the challenges of knowledge handover and the importance of collective learning for effective product development.",
    },
    ProjectInfo: {
      ProjectDetailsHeading: "",
      ProjectDetails: [
        {
          id: uuidv4(),
          styleID: "quote",
          title: "",
          img: "",
          alt: "",
          body: "How can I claim expertise in designing experiences if I can't effectively create a knowledge-sharing process that shapes our product development?",
        },
        {
          id: uuidv4(),
          styleID: "allDetails",
          title: "A Team in Flux",
          img: projectOneImages.team,
          alt: "product team Gran Canaria 2022",
          body: "I stepped into my role as product designer during a period of significant upheaval. A newly-appointed CTO had just arrived, accompanied by a fresh team of product managers and a technical director. Amidst this flux, the air was rife with speculation about the future of Insendi's product, vision, and strategy. Conversations were swirling around the idea of dividing Insendi into three distinct applications, each tailored to a specific Job To Be Done (JTBD).",
        },
        {
          id: uuidv4(),
          styleID: "chip",
          title: "The coordinator's job to be done",
          img: "",
          alt: "",
          body: "When a student cohort wants to enrol on an online course, help me coordinate and manage student access, faculty support, and course maintenance so that a seamless and effective learning experience is ensured for all stakeholders.",
        },
        {
          id: uuidv4(),
          styleID: "chip",
          title: "The Builder's job to be done",
          img: "",
          alt: "",
          body: "When tasked with educating a cohort of students through an online or blended format, help me design and structure a comprehensive and coherent course that effectively scaffolds the learning journey so that students can successfully master the subject matter and pass the course.",
        },
        {
          id: uuidv4(),
          styleID: "chip",
          title: "The Deliverer's job to be done",
          img: "",
          alt: "",
          body: "When the course is live and students are actively participating, help me effectively guide, engage, and assess students throughout their learning journey so that they successfully complete the course and earn meaningful grades.",
        },
        {
          id: uuidv4(),
          styleID: "textOnly",
          title: "",
          img: "",
          alt: "",
          body: 'Our team was tasked with the "Build" aspect, but the project awaited formal approval. So while we waited the team focused on platform architecture and tech debt removal. The product manager and I had the opportunity to do some initial discovery.',
        },
      ],
    },
  },
];
