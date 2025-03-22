import CvBody from "./CvBody";
import CvHeader from "./CvHeader";
import "../styles/index.css";

function previewPanel(props) {
    return (
        <div className="preview-panel">
            <div className="cv-container">
                <CvHeader info={props.infoData} />
                <CvBody
                    experienceData={props.experienceData}
                    educationData={props.educationData}
                />
            </div>
        </div>
    );
}
export default previewPanel;
