import React from "react";
import ExperienceItemCv from "./experienceItemCv";
import { useState, useEffect } from "react";
import eventBus from "../eventBus";

function ExperienceSection(props) {
    const [experience, setExperience] = useState(props.experienceData);
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
