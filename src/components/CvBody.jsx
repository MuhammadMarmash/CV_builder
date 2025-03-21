import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import "../styles/index.css";

function CvBody() {
    return (
        <div className="cv-body">
            <div className="cv-section">
                <h2 className="cv-section-title">Education</h2>
                <EducationSection />
            </div>
            <div className="cv-section">
                <h2 className="cv-section-title">Professional Experience</h2>
                <ExperienceSection />
            </div>
        </div>
    );
}

export default CvBody;
