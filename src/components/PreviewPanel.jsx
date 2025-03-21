import CvBody from "./CvBody";
import CvHeader from "./CvHeader";
import "../styles/index.css";

function previewPanel() {
    return (
        <div className="preview-panel">
            <div className="cv-container">
                <CvHeader />
                <CvBody />
            </div>
        </div>
    );
}
export default previewPanel;
