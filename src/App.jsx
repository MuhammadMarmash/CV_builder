import "./styles/index.css";
import PreviewPanel from "./components/PreviewPanel";
import SideBar from "./components/SideBar";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function App() {
    const experienceDataExample = [
        {
            key: uuidv4(),
            show: true,
            company: "Tech Corp",
            position: "Software Engineer",
            startDate: "01/2020",
            endDate: "present",
            location: "San Francisco, US",
            description: "Developed and maintained web applications.",
        },
        {
            key: uuidv4(),
            show: false,
            company: "Web Solutions",
            position: "Frontend Developer",
            startDate: "06/2018",
            endDate: "12/2019",
            location: "New York, US",
            description: "Created responsive web designs.",
        },
    ];
    const educationDataExample = [
        {
            key: uuidv4(),
            show: true,
            school: "London City University",
            degree: "Bachelors in Economics",
            startDate: "08/2020",
            endDate: "present",
            location: "New York City, US",
        },
        {
            key: uuidv4(),
            show: false,
            school: "Hidden University",
            degree: "Masters in Computer Science",
            startDate: "09/2022",
            endDate: "present",
            location: "London, UK",
        },
    ];
    const infoDataExample = {
        name: "Josephine Meyer",
        email: "josephine.meyers@mail.co.uk",
        number: "+44 3245 5521 5521",
        address: "London, UK",
    };

    const [infoData, setInfoData] = useState(infoDataExample);
    const [educationData, setEducationData] = useState(educationDataExample);
    const [experienceData, setExperienceData] = useState(experienceDataExample);

    const handleLoadExample = () => {
        setInfoData(infoDataExample);
        setEducationData(educationDataExample);
        setExperienceData(experienceDataExample);
    };

    const handleClearResume = () => {
        setInfoData({
            name: "",
            email: "",
            number: "",
            address: "",
        });
        setEducationData([]);
        setExperienceData([]);
    };

    return (
        <div className="app-container">
            <SideBar
                infoData={infoData}
                educationData={educationData}
                experienceData={experienceData}
                handleLoadExample={handleLoadExample}
                handleClearResume={handleClearResume}
            />
            <PreviewPanel
                infoData={infoData}
                educationData={educationData}
                experienceData={experienceData}
            />
        </div>
    );
}

export default App;
