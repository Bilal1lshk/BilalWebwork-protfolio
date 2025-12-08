import React, { useState } from "react";
const skills = [
    // Frontend
    { name: "Html/css", level: 90, category: "frontend" },
    { name: "Javascript", level: 88, category: "frontend" },
    { name: "React", level: 80, category: "frontend" },
    { name: "Spline", level: 70, category: "frontend" },
    { name: "Tailwindcss", level: 90, category: "frontend" },
    { name: "Gsap", level: 75, category: "frontend" },
    //tools
    { name: "Figma", level: 84, category: "tools" },
    { name: "Git/GitHub", level: 90, category: "tools" },

    { name: "VS Code", level: 95, category: "tools" },
];
const categorys = ["all", "frontend", "tools"];
export default function Myskills() {
    const [activecategory, setactivecategory] = useState("all");
    console.log(activecategory);
    const filteredcountry = skills.filter(
        (skill) => activecategory === "all" || skill.category === activecategory
    );
    return (
        <div id="skills" className="relative  h-full w-full  text-white mt-42 mb-40">
            <div className="wrapper">
                <h3 className="text-4xl">
                    My <span className="text-primary ">Skills</span>
                </h3>
                <div className="flex mt-5 text-amber-100 flex-wrap justify-center gap-4 mb-12">
                    {categorys.map((category, i) => (
                        <button
                            onClick={() => setactivecategory(category)}
                            className="text-white  uppercase text-2xl bg-primary px-4 py-1.5 rounded-full"
                            key={i}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <div className="h-auto w-[80%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-7">
                    {filteredcountry.map((filtered) => (
                        <div  data-aos="flip-left" className="w-full  h-[80px] flex flex-col gap-1 bg-card ">
                            <h1>{filtered.name}</h1>

                            <div className="w-[90%] mx-auto">
                                {" "}
                                <div
                                    style={{
                                        width: filtered.level + "%"
                                    }}
                                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                ></div>
                            </div>
                            <p>{filtered.level}%</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
