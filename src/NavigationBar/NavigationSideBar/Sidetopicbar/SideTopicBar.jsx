/**
 * react dependencies
 */
import React, { useState } from "react";
import { useDispatch } from "react-redux";

/**internal dependencies */
import { clearProducts, setFilter } from "../../../reducers/indx";
import { dropdownSections } from "./utils";
import './sidetopic.css';

const SideTopicBar = () => {

    const dispatch = useDispatch();
    const [expandedSections, setExpandedSections] = useState({
        artTypes: false,
        artist: false,
        material: false,
        priceRange: false,
    });

    const toggleSection = (section) => {
        setExpandedSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));

    };

    const handleFilterSelect = (filterValue) => {
        dispatch(setFilter(filterValue))
        console.log('filter dispatched', setFilter(filterValue))
    };
    
    const handleclear = () => {dispatch(clearProducts())}

    return (
        <div className="dropdown-section">
            <button onClick={handleclear} className="clear-btn">Clear Filter</button>

            {dropdownSections.map(({ id = "", label = "", options = [] }) => (
                <div key={id} className="mt-8">
                    <div
                        onClick={() => toggleSection(id)}
                        className="dropdown-header menu-item"
                    >
                        <span>{label}</span>
                        <span className={`arrow ${expandedSections[id] ? "arrow-up" : "arrow-down"}`} />
                    </div>

                    {expandedSections[id] && options.map(({ id: optionId, label: optionLabel, img }) => (
                        <div
                            key={optionId}
                            className="dropdown-content menu-item"
                            onClick={() => handleFilterSelect(optionLabel)} // On click, set the filter
                        >
                            <img src={img || 'defaultImage'} alt={optionId} />
                            <span className="li-cl-name">{optionLabel}</span>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};
export default SideTopicBar;