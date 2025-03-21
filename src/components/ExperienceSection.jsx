import React from "react";
import ExperienceItemCv from "./experienceItemCv";
import { useState, useEffect } from "react";
import eventBus from "../eventBus";
import { v4 as uuidv4 } from "uuid";

function ExperienceSection() {
    const [experience, setExperience] = useState([
        {
            key: uuidv4(),
            show: true,
            company: "Tech Corp",
            position: "Software Engineer",
            startDate: "01/2020",
            endDate: "present",
            location: "San Francisco, US",
            description: "Developed and maintained web applications.",
        },
        {
            key: uuidv4(),
            show: false,
            company: "Web Solutions",
            position: "Frontend Developer",
            startDate: "06/2018",
            endDate: "12/2019",
            location: "New York, US",
            description: "Created responsive web designs.",
        },
    ]);
    useEffect(() => {
        const handleExperienceChange = (newExperience) => {
            setExperience(newExperience);
        };

        eventBus.on("changeExperience", handleExperienceChange);

        return () => {
            eventBus.remove("changeExperience", handleExperienceChange);
        };
    }, []);

    return (
        <div className="experience-section">
            {experience.map(
                (item) =>
                    item.show && (
                        <ExperienceItemCv
                            key={item.key}
                            company={item.company}
                            position={item.position}
                            startDate={item.startDate}
                            endDate={item.endDate}
                            location={item.location}
                            description={item.description}
                        />
                    )
            )}
        </div>
    );
}

export default ExperienceSection;
