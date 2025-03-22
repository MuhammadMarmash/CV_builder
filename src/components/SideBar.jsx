import "../styles/index.css";
import Content from "./content";
import ActionButtons from "./ActionButtons";
import NavigationTabs from "./NavigationTabs";

function SideBar(props) {
    return (
        <div className="editor-sidebar">
            <NavigationTabs />
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
            />
        </div>
    );
}
export default SideBar;
