import img1 from "../assets/images/Project1.png";
import img2 from "../assets/images/Project2.png";
import img3 from "../assets/images/image.png";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
        id: 1,
        title: "Analysist Landing page",
        description: "A beautiful landing page app using React and Tailwind.",
        image: img1,
        tags: ["React", " TailwindCSS"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 2,
        title: "3D Landing Page",
        description:
            "Immersive 3D landing page built with React, Tailwind, and Spline. Features interactive 3D models and smooth animations for a captivating user experience",
        image: img2,
        tags: ["React", " Tailwindcss Spline"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 3,
        title: "Dice Game",
        description:
            "Interactive dice simulator with React. Roll, randomize, and enjoy smooth animations in a clean, responsive UI.",
        image: img3,
        tags: ["Strong React concepts ", "Figma design"],
        demoUrl: "#",
        githubUrl: "#",
    },
];

export default function Myprojects() {
    return (
        <div className="relative text-white h-auto w-full mb-20">
            <h1 className="text-3xl text-primary">
                Recent <span className="text-white">Projects</span>
            </h1>
            <p className="">
                A collection of my best work, showcasing creativity, performance, and
                clean code.
            </p>
            <div className="grid  grid-cols-1 md:grid-cols-3 w-[76%] mx-auto gap-7 mt-8">
                {projects.map((project, key) => (
                    <div
                        key={key}  data-aos="flip-down"
                        className="bg-card hover:card-hover group rounded-full h-auto flex flex-col text-lg text-amber-50 gap-1.5 "
                    >
                        <div className="">
                            {" "}
                            <img src={project.image} alt="nothing" />
                        </div>
                        <div className="list mx-auto w-full">
                            <ul className="flex flex-row mt-4  justify-center gap-7">
                                {project.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className=" px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </ul>
                        </div>
                        <h1 className="text-white text-2xl font-medium">{project.title}</h1>
                        <p className="text-gray-400">{project.description}</p>
                        <div className="icons flex pl-3 gap-2.5 ">
                            <FaGithub className="text-2xl" />
                            <FaExternalLinkAlt className="text-2xl" />
                        </div>
                    </div>
                ))}
            </div>
            <button className="mt-10 bg-primary rounded-full px-7 py-1.5">
                Preview ALL
            </button>
        </div>
    );
}
