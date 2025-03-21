import "./styles/index.css";
import PreviewPanel from "./components/PreviewPanel";
import SideBar from "./components/SideBar";

function App() {
    return (
        <>
            <div className="app-container">
                <SideBar />
                <PreviewPanel />
            </div>
        </>
    );
}
export default App;
