import "../styles/index.css";
import Content from "./content";
import ActionButtons from "./ActionButtons";
import NavigationTabs from "./NavigationTabs";

function SideBar() {
    return (
        <div className="editor-sidebar">
            <NavigationTabs />
            <ActionButtons />
            <Content />
        </div>
    );
}
export default SideBar;
