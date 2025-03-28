import "../styles/index.css";
import eventBus from "../eventBus";
import { useState } from "react";

function Customize() {
    const [color, setColor] = useState("#0e3553");
    const [layout, setLayout] = useState("top");
    const [font, setFont] = useState("sans");
    const handleLayoutChange = (layout) => {
        setLayout(layout);
        eventBus.dispatch("changeLayout", layout);
    };

    const handleColorChange = (event) => {
        const newColor = event.target.value;
        setColor(newColor);
        eventBus.dispatch("changeHeaderColor", newColor);
    };

    const handleFontChange = (font) => {
        setFont(font);
        eventBus.dispatch("changeFont", font);
    };

    return (
        <>
            <div className="editor-section" id="layout-section">
                <h3 className="section-title">Layout</h3>
                <div className="layout-options">
                    <div
                        className={
                            layout == "top"
                                ? "layout-option selected"
                                : "layout-option"
                        }
                        onClick={() => handleLayoutChange("top")}
                    >
                        <div className="layout-preview layout-top"></div>
                        <span>Top</span>
                    </div>
                    <div
                        className={
                            layout == "left"
                                ? "layout-option selected"
                                : "layout-option"
                        }
                        onClick={() => handleLayoutChange("left")}
                    >
                        <div className="layout-preview layout-left"></div>
                        <span>Left</span>
                    </div>
                    <div
                        className={
                            layout == "right"
                                ? "layout-option selected"
                                : "layout-option"
                        }
                        onClick={() => handleLayoutChange("right")}
                    >
                        <div className="layout-preview layout-right"></div>
                        <span>Right</span>
                    </div>
                </div>
            </div>

            <div className="editor-section" id="color-section">
                <h3 className="section-title">Color</h3>
                <div className="color-picker">
                    <label>Accent Color</label>
                    <input
                        type="color"
                        className="color-swatch"
                        value={color}
                        onChange={handleColorChange}
                    />
                </div>
            </div>

            <div className="editor-section" id="fonts-section">
                <h3 className="section-title">Fonts</h3>
                <div className="font-options">
                    <div
                        className={
                            font == "serif"
                                ? "font-option selected"
                                : "font-option"
                        }
                        onClick={() => handleFontChange("serif")}
                    >
                        <span className="font-preview serif">Aa</span>
                        <span className="font-name">Serif</span>
                    </div>
                    <div
                        className={
                            font == "sans"
                                ? "font-option selected"
                                : "font-option"
                        }
                        onClick={() => handleFontChange("sans")}
                    >
                        <span className="font-preview sans">Aa</span>
                        <span className="font-name">Sans</span>
                    </div>
                    <div
                        className={
                            font == "mono"
                                ? "font-option selected"
                                : "font-option"
                        }
                        onClick={() => handleFontChange("mono")}
                    >
                        <span className="font-preview mono">Aa</span>
                        <span className="font-name">Mono</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Customize;
