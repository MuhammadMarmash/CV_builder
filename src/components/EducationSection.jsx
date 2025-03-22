import "../styles/index.css";
import eventBus from "../eventBus";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import EducationItemCv from "./educationItemCv";
function EducationSection(props) {
    const [education, setEducation] = useState(props.educationData);
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
