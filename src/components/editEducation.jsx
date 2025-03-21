import "../styles/editEducation.css";
function EditEducation(props) {
    return (
        <>
            <div className="education-widget">
                <label htmlFor="school">School</label>
                <input
                    type="text"
                    id="school"
                    defaultValue={props.data.school}
                    placeholder="Enter school name"
                />

                <label htmlFor="degree">Degree</label>
                <input
                    type="text"
                    id="degree"
                    defaultValue={props.data.degree}
                    placeholder="Enter degree
                "
                />

                <div className="date-fields">
                    <div>
                        <label htmlFor="start-date">Start Date</label>
                        <input
                            type="text"
                            id="start-date"
                            defaultValue={props.data.startDate}
                            placeholder="MM/YYYY"
                        />
                    </div>
                    <div>
                        <label htmlFor="end-date">End Date</label>
                        <input
                            type="text"
                            id="end-date"
                            defaultValue={props.data.endDate}
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
                    defaultValue={props.data.location}
                    placeholder="Enter location
                "
                />

                <div className="buttons">
                    <button className="delete" onClick={props.delete}>
                        Delete
                    </button>
                    <button className="cancel" onClick={props.cancel}>
                        Cancel
                    </button>
                    <button className="save" onClick={props.save}>
                        Save
                    </button>
                </div>
            </div>
        </>
    );
}
export default EditEducation;
