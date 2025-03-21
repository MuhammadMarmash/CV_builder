import React from "react";

function ExperienceItem({ show, company, iconClick, onClick }) {
    return (
        <div className="entry" onClick={onClick}>
            <span>{company}</span>
            <div className="entry-controls">
                {show ? (
                    <i
                        className="fas fa-eye"
                        onClick={(e) => {
                            e.stopPropagation();
                            iconClick();
                        }}
                    ></i>
                ) : (
                    <i
                        className="fas fa-eye-slash"
                        onClick={(e) => {
                            e.stopPropagation();
                            iconClick();
                        }}
                    ></i>
                )}
            </div>
        </div>
    );
}

export default ExperienceItem;
