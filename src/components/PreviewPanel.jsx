import CvBody from "./CvBody";
import CvHeader from "./CvHeader";
import "../styles/index.css";
import { useState, useEffect } from "react";
import eventBus from "../eventBus";

function PreviewPanel(props) {
    const [position, setPosition] = useState("top");
    const [font, setFont] = useState("sans");

    useEffect(() => {
        const handleLayoutChange = (layout) => {
            setPosition(layout);
        };

        const handleFontChange = (font) => {
            setFont(font);
        };

        eventBus.on("changeLayout", handleLayoutChange);
        eventBus.on("changeFont", handleFontChange);

        return () => {
            eventBus.remove("changeLayout", handleLayoutChange);
            eventBus.remove("changeFont", handleFontChange);
        };
    }, []);

    let containerClassName = "cv-container";
    if (position === "left") containerClassName += " left";
    else if (position === "right") containerClassName += " right";

    return (
        <div className={`preview-panel ${font}`}>
            <div className={containerClassName}>
                <CvHeader info={props.infoData} />
                <CvBody
                    experienceData={props.experienceData}
                    educationData={props.educationData}
                />
            </div>
        </div>
    );
}
export default PreviewPanel;
