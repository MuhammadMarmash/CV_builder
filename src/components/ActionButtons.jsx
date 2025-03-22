import "../styles/index.css";
function ActionButtons(props) {
    return (
        <div className="action-buttons">
            <button className="btn btn-clear" onClick={props.handleClearResume}>
                <i className="fas fa-trash-alt"></i> Clear Resume
            </button>
            <button className="btn btn-load" onClick={props.handleLoadExample}>
                Load Example
            </button>
        </div>
    );
}
export default ActionButtons;
