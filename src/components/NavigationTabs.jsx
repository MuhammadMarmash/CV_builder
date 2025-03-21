import "../styles/index.css";
function NavigationTabs() {
    return (
        <div className="nav-tabs">
            <div className="tab active">
                <i className="fas fa-file-alt"></i>
                <span>Content</span>
            </div>
            <div className="tab">
                <i className="fas fa-sliders-h"></i>
                <span>Customize</span>
            </div>
        </div>
    );
}

export default NavigationTabs;
