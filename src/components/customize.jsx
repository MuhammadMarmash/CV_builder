import "../styles/index.css";
function Customize() {
    return (
        <>
            <div className="editor-section" id="layout-section">
                <h3 className="section-title">Layout</h3>
                <div className="layout-options">
                    <div className="layout-option selected">
                        <div className="layout-preview layout-top"></div>
                        <span>Top</span>
                    </div>
                    <div className="layout-option">
                        <div className="layout-preview layout-left"></div>
                        <span>Left</span>
                    </div>
                    <div className="layout-option">
                        <div className="layout-preview layout-right"></div>
                        <span>Right</span>
                    </div>
                </div>
            </div>

            <div className="editor-section" id="color-section">
                <h3 className="section-title">Color</h3>
                <div className="color-picker">
                    <label>Accent Color</label>
                    <div
                        className="color-swatch"
                        style={{ backgroundColor: "#0e3553" }}
                    ></div>
                </div>
            </div>

            <div className="editor-section" id="fonts-section">
                <h3 className="section-title">Fonts</h3>
                <div className="font-options">
                    <div className="font-option">
                        <span className="font-preview serif">Aa</span>
                        <span className="font-name">Serif</span>
                    </div>
                    <div className="font-option selected">
                        <span className="font-preview sans">Aa</span>
                        <span className="font-name">Sans</span>
                    </div>
                    <div className="font-option">
                        <span className="font-preview mono">Aa</span>
                        <span className="font-name">Mono</span>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Customize;
