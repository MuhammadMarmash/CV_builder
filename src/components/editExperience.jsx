import "../styles/editEducation.css"; // Reuse the same styles as editEducation
import React from "react";

function EditExperience({ data, delete: deleteExperience, cancel, save }) {
    return (
        <div className="education-widget">
            <label htmlFor="company">Company</label>
            <input
                type="text"
                id="company"
                defaultValue={data.company}
                placeholder="Enter company name"
            />

            <label htmlFor="position">Position</label>
            <input
                type="text"
                id="position"
                defaultValue={data.position}
                placeholder="Enter position"
            />

            <div className="date-fields">
                <div>
                    <label htmlFor="start-date">Start Date</label>
                    <input
                        type="text"
                        id="start-date"
                        defaultValue={data.startDate}
                        placeholder="MM/YYYY"
                    />
                </div>
                <div>
                    <label htmlFor="end-date">End Date</label>
                    <input
                        type="text"
                        id="end-date"
                        defaultValue={data.endDate}
                        placeholder="MM/YYYY or present"
                    />
                </div>
            </div>

            <label htmlFor="location">
                Location <span className="optional">(optional)</span>
            </label>
            <input
                type="text"
                id="location"
                defaultValue={data.location}
                placeholder="Enter location"
            />

            <label htmlFor="description">Description</label>
            <textarea
                id="description"
                defaultValue={data.description}
                placeholder="Enter description"
                className="input-style"
                style={{ resize: "vertical", overflow: "auto" }}
            />

            <div className="buttons">
                <button className="delete" onClick={deleteExperience}>
                    Delete
                </button>
                <button className="cancel" onClick={cancel}>
                    Cancel
                </button>
                <button className="save" onClick={save}>
                    Save
                </button>
            </div>
        </div>
    );
}

export default EditExperience;
