import "../styles/index.css";
function ExperienceSection() {
    return (
        <div className="cv-section">
            <h2 className="cv-section-title">Professional Experience</h2>
            <div className="cv-entry">
                <div className="entry-date">08/2020 - present</div>
                <div className="entry-content">
                    <div className="entry-title">Umbrella Inc.</div>
                    <div className="entry-location">New York City, US</div>
                    <div className="entry-description">UX & UI Designer</div>
                    <p className="entry-details">
                        Designed and prototyped user interface patterns htmlFor
                        various clients in various industries, ranging from
                        self-service apps within the telecommunications-sector
                        to mobile games htmlFor iOS and Android
                    </p>
                </div>
            </div>
            <div className="cv-entry">
                <div className="entry-date">04/2018 - 02/2019</div>
                <div className="entry-content">
                    <div className="entry-title">Black Mesa Labs</div>
                    <div className="entry-location">Berlin, Germany</div>
                    <div className="entry-description">
                        UX Research Assistant
                    </div>
                    <p className="entry-details">
                        Supported senior researchers on accessibility standards
                        htmlFor the open web. Created and usability tested
                        wireframes and prototypes. Produced interactive
                        documentation htmlFor quick onboarding of new
                        researchers.
                    </p>
                </div>
            </div>
        </div>
    );
}
export default ExperienceSection;
