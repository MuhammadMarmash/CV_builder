import "../styles/index.css";
function EducationItemCv(props) {
    return (
        <div className="cv-entry">
            <div className="entry-date">
                {props.startDate} - {props.endDate}
            </div>
            <div className="entry-content">
                <div className="entry-title">{props.school}</div>
                <div className="entry-location">{props.location}</div>
                <div className="entry-description">{props.degree}</div>
            </div>
        </div>
    );
}
export default EducationItemCv;
