/**
 * React dependencies
 */
import { useState } from "react";

/**
 * Internal dependencies
 */
import './sidetopic.css';
import { SideBarImage2 } from "../../../utils";
import { dropdownSections } from "./utils";



const SideTopicBar = () => {
    const [expandedSections, setExpandedSections] = useState({
        artTypes: false,
        artist: false,
        material: false,
        timePeriod: false,
        priceRange: false,
        sizeDimensions: false,
        artistNationality: false
    });

    const toggleSection = (section) => {
        setExpandedSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    return (
        <div className="dropdown-section">
            {dropdownSections.map(({ id = "", label = "", options = [] }) => (
                <div key={id} className="mt-8">
                    <div key={id} onClick={() => toggleSection(id)} className="dropdown-header menu-item">
                        <span>{label}</span>
                        <span
                            className={`arrow ${expandedSections[id] ? "arrow-up" : "arrow-down"
                                }`}
                        />
                    </div>

                    {expandedSections[id] && (
                        options?.map(({ id = "", label = "" }) => {
                            return <div className="dropdown-content menu-item"><img src={SideBarImage2} key={id} alt={id} /><span className="li-cl-name">{label}</span></div>
                        })
                    )}
                </div>
            ))}
        </div>
    )
}
export default SideTopicBar;