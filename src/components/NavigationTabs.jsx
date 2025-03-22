import "../styles/index.css";
function NavigationTabs(props) {
    return (
        <div className="nav-tabs">
            <div
                className="tab active"
                onClick={() => props.changeActiveTab("content")}
            >
                <i className="fas fa-file-alt"></i>
                <span>Content</span>
            </div>
            <div
                className="tab"
                onClick={() => props.changeActiveTab("customize")}
            >
                <i className="fas fa-sliders-h"></i>
                <span>Customize</span>
            </div>
        </div>
    );
}

export default NavigationTabs;
