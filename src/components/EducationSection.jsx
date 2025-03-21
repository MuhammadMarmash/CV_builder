import "../styles/index.css";
import eventBus from "../eventBus";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import EducationItemCv from "./educationItemCv";
function EducationSection() {
    const [education, setEducation] = useState([
        {
            key: uuidv4(),
            show: true,
            school: "London City University",
            degree: "Bachelors in Economics",
            startDate: "08/2020",
            endDate: "present",
            location: "New York City, US",
        },
        {
            key: uuidv4(),
            show: false,
            school: "Hidden University",
            degree: "Masters in Computer Science",
            startDate: "09/2022",
            endDate: "present",
            location: "London, UK",
        },
    ]);
    eventBus.on("changeEducation", (data) => {
        setEducation(data);
    });
    return (
        <div className="education-section">
            {education.map(
                (item) =>
                    item.show && (
                        <EducationItemCv
                            key={item.key}
                            school={item.school}
                            degree={item.degree}
                            startDate={item.startDate}
                            endDate={item.endDate}
                            location={item.location}
                        />
                    )
            )}
        </div>
    );
}
export default EducationSection;
