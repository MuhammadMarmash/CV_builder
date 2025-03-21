import "../styles/index.css";
import React from "react";

function ExperienceItemCv({
    company,
    position,
    startDate,
    endDate,
    location,
    description,
}) {
    return (
        <div className="cv-entry">
            <div className="entry-date">
                {startDate} - {endDate}
            </div>
            <div className="entry-content">
                <div className="entry-title">{company}</div>
                <div className="entry-location">{location}</div>
                <div className="entry-description">{position}</div>
                <p className="entry-details">{description}</p>
            </div>
        </div>
    );
}

export default ExperienceItemCv;
