import "../styles/index.css";
import Content from "./content";
import ActionButtons from "./ActionButtons";
import NavigationTabs from "./NavigationTabs";
import { useState } from "react";
function SideBar(props) {
    const [activeTab, setActiveTab] = useState("content");
    let changeActiveTab = (tab) => {
        setActiveTab(tab);
    };
    return (
        <div className="editor-sidebar">
            <NavigationTabs changeActiveTab={changeActiveTab} />
            <ActionButtons
                handleLoadExample={props.handleLoadExample}
                handleClearResume={props.handleClearResume}
            />
            <Content
                infoData={props.infoData}
                educationData={props.educationData}
                experienceData={props.experienceData}
                onExperienceChange={props.handleExperienceChange}
                onEducationChange={props.handleEducationChange}
                onInfoChange={props.handleInfoChange}
                actionButtonClicked={props.actionButtonClicked}
                stopActionButtonClicked={props.stopActionButtonClicked}
                activeTab={activeTab}
            />
        </div>
    );
}
export default SideBar;
