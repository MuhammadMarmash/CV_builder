import "../styles/index.css";
import Customize from "./customize";
import eventBus from "../eventBus";
import EducationItem from "./educationItem";
import EditEducation from "./editEducation";
import ExperienceItem from "./experienceItem";
import EditExperience from "./editExperience";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function Content(props) {
    let newEducation = {
        key: null,
        show: false,
        school: "New University",
        degree: "Degree",
        startDate: "Start Date",
        endDate: "End Date",
        location: "Location",
    };

    let newExperience = {
        key: null,
        show: false,
        company: "New Company",
        position: "Position",
        startDate: "Start Date",
        endDate: "End Date",
        location: "Location",
        description: "Description",
    };

    const [education, setEducation] = useState(props.educationData);
    const [experience, setExperience] = useState(props.experienceData);
    const [info, setInfo] = useState(props.infoData);

    const [editIndex, setEditIndex] = useState(null);
    const [editExperienceIndex, setEditExperienceIndex] = useState(null);
    const [showEducationSection, setShowEducationSection] = useState(true);
    const [showExperienceSection, setShowExperienceSection] = useState(false);

    useEffect(() => {
        if (props.actionButtonClicked) {
            setInfo(props.infoData);
            setEducation(props.educationData);
            setExperience(props.experienceData);
            eventBus.dispatch("changeInfo", props.infoData);
            eventBus.dispatch("changeEducation", props.educationData);
            eventBus.dispatch("changeExperience", props.experienceData);
            props.stopActionButtonClicked();
        }
    }, [props.actionButtonClicked]);

    let changeInfo = (e) => {
        let temp = { ...info };
        temp[e.target.id] = e.target.value;
        setInfo(temp);
        eventBus.dispatch("changeInfo", temp);
    };

    return (
        <div className="editor-content">
            <div className="editor-section">
                <h3 className="section-title">Personal Details</h3>
                <div className="form-group">
                    <label htmlFor="name">Full name</label>
                    <input
                        type="text"
                        id="name"
                        value={info.name}
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
                        value={info.email}
                        onChange={changeInfo}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="number">
                        Phone number{" "}
                        <span className="recommended">recommended</span>
                    </label>
                    <input
                        type="tel"
                        id="number"
                        value={info.number}
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
                        value={info.address}
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
                    {showExperienceSection ? (
                        <i
                            className="fas fa-chevron-up"
                            onClick={() => {
                                setShowExperienceSection(
                                    !showExperienceSection
                                );
                            }}
                        ></i>
                    ) : (
                        <i
                            className="fas fa-chevron-down"
                            onClick={() => {
                                setShowExperienceSection(
                                    !showExperienceSection
                                );
                            }}
                        ></i>
                    )}
                </div>

                {showExperienceSection && (
                    <div className="section-content">
                        {editExperienceIndex != null ? (
                            <EditExperience
                                key={experience[editExperienceIndex].key}
                                data={experience[editExperienceIndex]}
                                delete={() => {
                                    let temp = [...experience];
                                    temp.splice(editExperienceIndex, 1);
                                    setExperience(temp);
                                    setEditExperienceIndex(null);
                                    eventBus.dispatch("changeExperience", temp);
                                }}
                                cancel={() => {
                                    if (
                                        experience[editExperienceIndex]
                                            .company == newExperience.company &&
                                        experience[editExperienceIndex]
                                            .position ==
                                            newExperience.position &&
                                        experience[editExperienceIndex]
                                            .startDate ==
                                            newExperience.startDate &&
                                        experience[editExperienceIndex]
                                            .endDate == newExperience.endDate &&
                                        experience[editExperienceIndex]
                                            .location ==
                                            newExperience.location &&
                                        experience[editExperienceIndex]
                                            .description ==
                                            newExperience.description
                                    ) {
                                        let temp = [...experience];
                                        temp.splice(editExperienceIndex, 1);
                                        setExperience(temp);
                                    }
                                    setEditExperienceIndex(null);
                                }}
                                save={() => {
                                    let temp = [...experience];
                                    temp[editExperienceIndex] = {
                                        key: temp[editExperienceIndex].key,
                                        show: temp[editExperienceIndex].show,
                                        company:
                                            document.getElementById("company")
                                                .value,
                                        position:
                                            document.getElementById("position")
                                                .value,
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
                                        description:
                                            document.getElementById(
                                                "description"
                                            ).value,
                                    };
                                    setExperience(temp);
                                    setEditExperienceIndex(null);
                                    eventBus.dispatch("changeExperience", temp);
                                }}
                            />
                        ) : (
                            <>
                                {experience.map((item, index) => {
                                    return (
                                        <ExperienceItem
                                            key={item.key}
                                            show={item.show}
                                            company={item.company}
                                            iconClick={() => {
                                                let temp = [...experience];
                                                temp[index].show =
                                                    !temp[index].show;
                                                setExperience(temp);
                                                eventBus.dispatch(
                                                    "changeExperience",
                                                    temp
                                                );
                                            }}
                                            onClick={() => {
                                                setEditExperienceIndex(index);
                                            }}
                                        />
                                    );
                                })}
                                <button
                                    className="btn btn-add"
                                    onClick={() => {
                                        let temp = [...experience];
                                        newExperience.key = uuidv4();
                                        temp.push(newExperience);
                                        setEditExperienceIndex(temp.length - 1);
                                        setExperience(temp);
                                        eventBus.dispatch(
                                            "changeExperience",
                                            temp
                                        );
                                    }}
                                >
                                    <i className="fas fa-plus"></i> Experience
                                </button>
                            </>
                        )}
                    </div>
                )}
            </div>
            <Customize />
        </div>
    );
}

export default Content;
