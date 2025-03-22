import "../styles/index.css";
import { useState, useEffect } from "react";
import eventBus from "../eventBus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faPhone,
    faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

function CvHeader(props) {
    const [info, setInfo] = useState(props.info);
    const [bgColor, setBgColor] = useState("#0e3553");

    useEffect(() => {
        const handleColorChange = (color) => {
            setBgColor(color);
        };

        eventBus.on("changeHeaderColor", handleColorChange);

        return () => {
            eventBus.remove("changeHeaderColor", handleColorChange);
        };
    }, []);

    eventBus.on("changeInfo", (data) =>
        setInfo({
            name: data.name,
            email: data.email,
            number: data.number,
            address: data.address,
        })
    );

    return (
        <div className="cv-header" style={{ backgroundColor: bgColor }}>
            <h1 className="cv-name">{info.name}</h1>
            <div className="cv-contact-info">
                <div className="contact-item">
                    {info.email.length !== 0 && (
                        <FontAwesomeIcon icon={faEnvelope} />
                    )}
                    <span>{info.email}</span>
                </div>
                <div className="contact-item">
                    {info.number.length !== 0 && (
                        <FontAwesomeIcon icon={faPhone} />
                    )}
                    <span>{info.number}</span>
                </div>
                <div className="contact-item">
                    {info.address.length !== 0 && (
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                    )}
                    <span>{info.address}</span>
                </div>
            </div>
        </div>
    );
}

export default CvHeader;
