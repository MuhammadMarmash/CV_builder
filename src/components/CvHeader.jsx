import "../styles/index.css";
import { useState } from "react";
import eventBus from "../eventBus";
function CvHeader() {
    const [info, setInfo] = useState({
        name: "Josephine Meyer",
        email: "josephine.meyers@mail.co.uk",
        number: "+44 3245 5521 5521",
        address: "London, UK",
    });

    eventBus.on("changeInfo", (data) =>
        setInfo({
            name: data.name,
            email: data.email,
            number: data.number,
            address: data.address,
        })
    );
    return (
        <div className="cv-header">
            <h1 className="cv-name">{info.name}</h1>
            <div className="cv-contact-info">
                <div className="contact-item">
                    {info.email.length != 0 && (
                        <i className="fas fa-envelope"></i>
                    )}
                    <span>{info.email}</span>
                </div>
                <div className="contact-item">
                    {info.number.length != 0 && (
                        <i className="fas fa-phone"></i>
                    )}
                    <span>{info.number}</span>
                </div>
                <div className="contact-item">
                    {info.address.length != 0 && (
                        <i className="fas fa-map-marker-alt"></i>
                    )}
                    <span>{info.address}</span>
                </div>
            </div>
        </div>
    );
}

export default CvHeader;
