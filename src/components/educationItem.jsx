function EducationItem(props) {
    return (
        <div className="entry" onClick={props.onClick}>
            <span>{props.school}</span>
            <div className="entry-controls">
                {props.show ? (
                    <i
                        className="fas fa-eye"
                        onClick={(e) => {
                            e.stopPropagation();
                            props.iconClick();
                        }}
                    ></i>
                ) : (
                    <i
                        className="fas fa-eye-slash"
                        onClick={(e) => {
                            e.stopPropagation();
                            props.iconClick();
                        }}
                    ></i>
                )}
            </div>
        </div>
    );
}
export default EducationItem;
