import "../styles/index.css";
import Customize from "./customize";
import eventBus from "../eventBus";
import EducationItem from "./educationItem";
import EditEducation from "./editEducation";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
function Content() {
    let changeInfo = () => {
        eventBus.dispatch("changeInfo", {
            name: document.getElementById("fullName").value,
            email: document.getElementById("email").value,
            number: document.getElementById("phone").value,
            address: document.getElementById("address").value,
        });
    };
    let newEducation = {
        key: null,
        show: false,
        school: "New University",
        degree: "Degree",
        startDate: "Start Date",
        endDate: "End Date",
        location: "Location",
    };
    const [education, setEducation] = useState([
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
    ]);
    const [editIndex, setEditIndex] = useState(null);
    const [showEducationSection, setShowEducationSection] = useState(true);
    return (
        <div className="editor-content">
            <div className="editor-section">
                <h3 className="section-title">Personal Details</h3>
                <div className="form-group">
                    <label htmlFor="fullName">Full name</label>
                    <input
                        type="text"
                        id="fullName"
                        defaultValue="Josephine Meyers"
                        onChange={changeInfo}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">
                        Email <span className="recommended">recommended</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        defaultValue="josephine.meyers@mail.co.uk"
                        onChange={changeInfo}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">
                        Phone number{" "}
                        <span className="recommended">recommended</span>
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        defaultValue="+44 3245 5521 5521"
                        onChange={changeInfo}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">
                        Address <span className="recommended">recommended</span>
                    </label>
                    <input
                        type="text"
                        id="address"
                        defaultValue="London, UK"
                        onChange={changeInfo}
                    />
                </div>
            </div>

            <div className="editor-section">
                <div className="section-header">
                    <h3 className="section-title">
                        <i className="fas fa-graduation-cap"></i> Education
                    </h3>
                    {showEducationSection ? (
                        <i
                            className="fas fa-chevron-up"
                            onClick={() => {
                                setShowEducationSection(!showEducationSection);
                            }}
                        ></i>
                    ) : (
                        <i
                            className="fas fa-chevron-down"
                            onClick={() => {
                                setShowEducationSection(!showEducationSection);
                            }}
                        ></i>
                    )}
                </div>

                {showEducationSection && (
                    <div className="section-content">
                        {editIndex != null ? (
                            <EditEducation
                                key={education[editIndex].key}
                                data={education[editIndex]}
                                delete={() => {
                                    let temp = [...education];
                                    temp.splice(editIndex, 1);
                                    setEducation(temp);
                                    setEditIndex(null);
                                    eventBus.dispatch("changeEducation", temp);
                                }}
                                cancel={() => {
                                    if (
                                        education[editIndex].degree ==
                                            newEducation.degree &&
                                        education[editIndex].school ==
                                            newEducation.school &&
                                        education[editIndex].startDate ==
                                            newEducation.startDate &&
                                        education[editIndex].endDate ==
                                            newEducation.endDate &&
                                        education[editIndex].location ==
                                            newEducation.location
                                    ) {
                                        let temp = [...education];
                                        temp.splice(editIndex, 1);
                                        setEducation(temp);
                                    }
                                    setEditIndex(null);
                                }}
                                save={() => {
                                    let temp = [...education];
                                    temp[editIndex] = {
                                        key: temp[editIndex].key,
                                        show: temp[editIndex].show,
                                        school: document.getElementById(
                                            "school"
                                        ).value,
                                        degree: document.getElementById(
                                            "degree"
                                        ).value,
                                        startDate:
                                            document.getElementById(
                                                "start-date"
                                            ).value,
                                        endDate:
                                            document.getElementById("end-date")
                                                .value,
                                        location:
                                            document.getElementById("location")
                                                .value,
                                    };
                                    setEducation(temp);
                                    setEditIndex(null);
                                    eventBus.dispatch("changeEducation", temp);
                                }}
                            />
                        ) : (
                            <>
                                {education.map((item, index) => {
                                    return (
                                        <EducationItem
                                            key={item.key}
                                            show={item.show}
                                            school={item.school}
                                            iconClick={() => {
                                                let temp = [...education];
                                                temp[index].show =
                                                    !temp[index].show;
                                                setEducation(temp);
                                                eventBus.dispatch(
                                                    "changeEducation",
                                                    temp
                                                );
                                            }}
                                            onClick={() => {
                                                setEditIndex(index);
                                            }}
                                        />
                                    );
                                })}
                                <button
                                    className="btn btn-add"
                                    onClick={() => {
                                        let temp = [...education];
                                        newEducation.key = uuidv4();
                                        temp.push(newEducation);
                                        setEditIndex(temp.length - 1);
                                        setEducation(temp);
                                        eventBus.dispatch(
                                            "changeEducation",
                                            temp
                                        );
                                    }}
                                >
                                    <i className="fas fa-plus"></i> Education
                                </button>
                            </>
                        )}
                    </div>
                )}
            </div>

            <div className="editor-section">
                <div className="section-header">
                    <h3 className="section-title">
                        <i className="fas fa-briefcase"></i> Experience
                    </h3>
                    <i className="fas fa-chevron-down"></i>
                </div>
            </div>
            <Customize />
        </div>
    );
}
export default Content;
