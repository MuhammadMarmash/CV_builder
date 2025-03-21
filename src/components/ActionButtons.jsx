import "../styles/index.css";
function ActionButtons() {
    return (
        <div className="action-buttons">
            <button className="btn btn-clear">
                <i className="fas fa-trash-alt"></i> Clear Resume
            </button>
            <button className="btn btn-load">Load Example</button>
        </div>
    );
}
export default ActionButtons;
